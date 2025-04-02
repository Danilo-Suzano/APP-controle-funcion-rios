
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f2f5',
        padding: 16,
    },
    header: {
        alignItems: 'center',
        marginVertical: 24,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#363f5f',
        textAlign: 'center',
    },
    filters: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        flexWrap: 'wrap',
    },
    filterButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        backgroundColor: '#e7e9ee',
        marginBottom: 8,
    },
    filterActive: {
        backgroundColor: '#5636d3',
    },
    filterText: {
        fontSize: 14,
        color: '#363f5f',
    },
    filterTextActive: {
        color: '#ffffff',
    },
    transactions: {
        flex: 1,
    },
    emptyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    emptyText: {
        fontSize: 16,
        color: '#888',
    }
});