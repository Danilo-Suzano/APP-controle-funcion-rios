
import { StyleSheet, Text, View } from 'react-native';

export function Search() {
    return (
        <View style={styles.container}>
        <Text>Pesquisa de funcionários</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
