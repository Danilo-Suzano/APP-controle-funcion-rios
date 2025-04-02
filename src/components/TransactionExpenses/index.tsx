import { View, Text } from 'react-native';
import { styles } from './styles';
import { SpendingStorageDTO } from "../../storage/spending/SpendingStorageDTO";
import { calcularSalarioLiquido } from '../../utils/salaryCalculation';

type Props = {
  data: SpendingStorageDTO
}

export function TransactionExpenses({ data }: Props) {
  // Verificar se temos dados válidos
  if (!data || !data.name || !data.salary) {
    return null; // Não renderiza componentes sem dados válidos
  }
  
  // Garantir que o salário seja tratado como número
  const salarioBruto = typeof data.salary === 'string' ? parseFloat(data.salary) : Number(data.salary);
  
  // Verificar se o salário é um número válido
  if (isNaN(salarioBruto)) {
    return null; // Não renderiza com salário inválido
  }
  
  // Calcular com o valor numérico
  const { inss, irf, liquido } = calcularSalarioLiquido(salarioBruto);
  
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{data.name}</Text>
      <Text style={styles.amount}>CPF: {data.cpf || 'Não informado'}</Text>
      <Text style={styles.local}>Função: {data.func || 'Não informado'}</Text>
      
      <View style={styles.footer}>
        <Text style={styles.category}>Setor: {data.section || 'Não informado'}</Text>
      </View>
      
      <View style={styles.salaryInfo}>
        <Text style={styles.salaryDetail}>Salário Bruto: R$ {salarioBruto.toFixed(2)}</Text>
        <Text style={styles.salaryDetail}>INSS ({obterTaxaInss(salarioBruto)}%): R$ {inss.toFixed(2)}</Text>
        <Text style={styles.salaryDetail}>IRF (10%): R$ {irf.toFixed(2)}</Text>
        <Text style={styles.salaryDetail}>Salário Líquido: R$ {liquido.toFixed(2)}</Text>
      </View>
    </View>
  )
}

// Função auxiliar para obter a taxa de INSS em porcentagem
function obterTaxaInss(salario: number): number {
  if (salario < 1500) return 10;
  if (salario >= 1500 && salario < 4000) return 12;
  if (salario >= 4000 && salario < 6000) return 14;
  return 15;
}