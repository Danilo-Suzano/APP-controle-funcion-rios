// src/screens/List/index.tsx

import { useState, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { spendingGetAll } from '../../storage/spending/spendingGetAll';
import { SpendingStorageDTO } from '../../storage/spending/SpendingStorageDTO';
import { TransactionExpenses } from '../../components/TransactionExpenses';
import { calcularSalarioLiquido } from '../../utils/salaryCalculation';

export function List() {
    const [dataExpenses, setDataExpenses] = useState<SpendingStorageDTO[]>([]);
    const [filtroAtivo, setFiltroAtivo] = useState<'todos' | 'inss' | 'irf' | 'liquido'>('todos');

    async function loadDataSpending() {
        const data: SpendingStorageDTO[] = await spendingGetAll();
        // Filtrar apenas itens que contêm dados válidos
        const dadosValidos = data.filter(item => 
            item.name && 
            item.cpf && 
            item.func && 
            item.section && 
            item.salary
        );
        setDataExpenses(dadosValidos);
    }

    useFocusEffect(
        useCallback(() => {
            loadDataSpending();
        }, [])
    );

    function filtrarDados() {
        if (filtroAtivo === 'todos') {
            return dataExpenses;
        }
        
        return dataExpenses.map(item => {
            const calculos = calcularSalarioLiquido(
                typeof item.salary === 'string' ? parseFloat(item.salary) : Number(item.salary)
            );
            return {
                ...item,
                inss: calculos.inss,
                irf: calculos.irf,
                salarioLiquido: calculos.liquido
            };
        }).sort((a, b) => {
            if (filtroAtivo === 'inss') {
                return (b.inss || 0) - (a.inss || 0);
            } else if (filtroAtivo === 'irf') {
                return (b.irf || 0) - (a.irf || 0);
            } else { // liquido
                return (b.salarioLiquido || 0) - (a.salarioLiquido || 0);
            }
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Listagem de Funcionários</Text>
            </View>

            

            <View style={styles.transactions}>
                <FlatList
                    data={filtrarDados()}
                    renderItem={({ item }) => <TransactionExpenses data={item} />}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>Nenhum funcionário cadastrado</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}