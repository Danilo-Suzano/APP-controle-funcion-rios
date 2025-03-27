import { StyleSheet } from 'react-native';
import { colors } from '../../styles/color';
import { fontFamily } from '../../styles/font-family';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray[300],
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    width: '100%', 
    alignSelf: 'center', 
  },
  description: {
    fontFamily: fontFamily.bold,
    fontSize: 16,
    color: colors.gray[500],
    marginBottom: 5, 
  },
  amount: {
    fontFamily: fontFamily.bold,
    fontSize: 18,
    color: colors.gray[500],
    marginBottom: 5, 
  },
  local: {
    fontFamily: fontFamily.regular,
    fontSize: 14,
    color: colors.gray[500],
    marginBottom: 5,
  },
  footer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    marginTop: 5,
    borderTopWidth: 1, 
    borderTopColor: colors.gray[400],
    paddingTop: 5, 
  },
  category: {
    fontSize: 14,
    fontFamily: fontFamily.bold,
    color: colors.gray[500],
  },
  date: {
    fontSize: 14,
    fontFamily: fontFamily.regular,
    color: colors.gray[500],
    marginTop: 2,
  }
});
