import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f6f9',  
        padding: 20,  
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30, 
        textAlign: 'center',
    },
    input: {
        height: 50,
        width: '100%', 
        borderColor: '#ddd',  
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,  
        paddingLeft: 10,  
        fontSize: 16,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#007BFF',  
        paddingVertical: 12,  
        borderRadius: 8,  
        alignItems: 'center',  
        marginTop: 20,  
    },
    buttonText: {
        color: '#fff', 
        fontSize: 18, 
        fontWeight: 'bold',
    }
});
