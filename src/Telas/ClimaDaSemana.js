import { View, Text, Image, StyleSheet} from "react-native";
import CDDSemana from "../componentes/ClimaDiaDaSemana";
import RDDSLabel from "../componentes/RegiãoDDSLabel";


export default function ClimaDaSemana(){
    return (
        <View style={styles.container}>
            <RDDSLabel></RDDSLabel>
            <Text style={styles.titulo}>Proximos 7 Dias</Text>
            <CDDSemana dia = 'Segunda,' data = '5 set' minima = '30' maxima = '/33°'></CDDSemana>
            <CDDSemana dia = 'Terça,' data = '6 set' minima = '31' maxima = '/32°'></CDDSemana>
            <CDDSemana dia = 'Quarta,' data = '7 set' minima = '32' maxima = '/32°'></CDDSemana>
            <CDDSemana dia = 'Quinta,' data = '8 set' minima = '33' maxima = '/32°'></CDDSemana>
            <CDDSemana dia = 'Sexta,' data = '9 set' minima = '34' maxima = '/32°'></CDDSemana>
            <CDDSemana dia = 'Sabado,' data = '10 set' minima = '35' maxima = '/32°'></CDDSemana>
            <CDDSemana dia = 'Domingo,' data = '11 set' minima = '36' maxima = '/32°'></CDDSemana>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#477FFF',
      
    },
    titulo:{
        color: 'white',
        fontWeight: 600,
        fontSize: 24,
        marginLeft: 25,
        marginBottom: 20
    }
  });
  
  