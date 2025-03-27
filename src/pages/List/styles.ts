import { StyleSheet } from "react-native";
import { colors } from "../../styles/color";
import { fontFamily } from "../../styles/font-family";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.gray[100],
        paddingHorizontal: 20,
        paddingVertical: 20,
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 28,
        fontFamily: fontFamily.bold,
        color: colors.gray[500],
        marginBottom: 20,
        textAlign: 'center',
    },
    listContainer: {
        flexGrow: 1,
        paddingBottom: 20,  
    },
    item: {
        backgroundColor: colors.gray[300],
        borderRadius: 8,
        padding: 15,
        marginBottom: 12,
        shadowColor: colors.gray[500],
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: colors.gray[200],
    },
    itemText: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginBottom: 5,
    },
    itemLabel: {
        fontSize: 18,
        fontFamily: fontFamily.bold,
        color: colors.gray[500],
    },
    transactions: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 10,
        marginTop: 20, 
    },
});
