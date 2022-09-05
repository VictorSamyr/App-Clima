import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ClimaDaSemana from './src/Telas/ClimaDaSemana';
import ClimaDeHoje from './src/Telas/ClimaDaHoje';

export default function App() {
    return ( 
    <View style = { styles.container }>
        <ClimaDaSemana>n</ClimaDaSemana>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'left',
        justifyContent: 'flex-start',
    },
 
});