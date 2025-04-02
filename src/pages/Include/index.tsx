import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { spendingCreate } from '../../storage/spending/spendingCreate';
import { spendingGetAll } from '../../storage/spending/spendingGetAll';


export function Include() {
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [func, setFunc] = useState('');
    const [section, setSection] = useState('');
    const [salary, setSalary] = useState('');

    async function handleRegistration() {
        //await AsyncStorage.clear();
        
        alert("Registro concluído!");

        const data ={
            cpf,
            name,
            func,
            section,
            salary
        }
        
        console.log(data)

        await spendingCreate(data)
        const result = await spendingGetAll()
        console.log(result)

        setCpf('');
        setName('');
        setFunc('');
        setSection('');
        setSalary('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Employee Registration</Text>

            <TextInput 
                style={styles.input} 
                placeholder='CPF' 
                keyboardType='numeric' 
                value={cpf}
                onChangeText={setCpf}
            />
            <TextInput 
                style={styles.input} 
                placeholder='Name' 
                value={name}
                onChangeText={setName}
            />
            <TextInput 
                style={styles.input} 
                placeholder='Function' 
                value={func}
                onChangeText={setFunc}
            />
            <TextInput 
                style={styles.input} 
                placeholder='Section' 
                value={section}
                onChangeText={setSection}
            />
            <TextInput 
                style={styles.input} 
                placeholder='Salary' 
                keyboardType='numeric' 
                value={salary}
                onChangeText={setSalary}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
                <Text style={styles.buttonText}>Registration</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

