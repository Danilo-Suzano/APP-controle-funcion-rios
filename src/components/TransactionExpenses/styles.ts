// src/components/TransactionExpenses/styles.ts

import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 16,
    padding: 16,
    elevation: 2,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  amount: {
    fontSize: 14,
    marginBottom: 2,
  },
  local: {
    fontSize: 14,
    marginBottom: 8,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  category: {
    fontSize: 14,
    color: '#555',
  },
  date: {
    fontSize: 14,
    color: '#888',
  },
  salaryInfo: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
  },
  salaryDetail: {
    fontSize: 14,
    marginBottom: 4,
  }
});