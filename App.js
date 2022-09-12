import { StyleSheet, Text, View } from 'react-native';
import ClimaDeHoje from './src/Telas/ClimaDaHoje';
import ClimaDaSemana from './src/Telas/ClimaDaSemana';

export default function App() {
  return (
    <View style={styles.container}>
    <ClimaDaSemana></ClimaDaSemana>
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
