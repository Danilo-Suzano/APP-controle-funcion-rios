import { View, Text } from 'react-native'

import { styles } from './styles';

import { SpendingStorageDTO }
  from "../../storage/spending/SpendingStorageDTO";

type Props = {
  data: SpendingStorageDTO
}

export function TransactionExpenses({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{data.name}</Text>
      <Text style={styles.amount}>{data.cpf}</Text>
      <Text style={styles.local}>{data.func}</Text>
      <View style={styles.footer}>
        <Text style={styles.category}>{data.section}</Text>
        <Text style={styles.date}>{data.salary}</Text>
      </View>
    </View>
  )
}