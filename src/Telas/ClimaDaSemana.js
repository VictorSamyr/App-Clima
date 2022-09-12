import { View, Text, Image, StyleSheet} from "react-native";
import Dias from "../componentes/Dias";
import RCLDSemana from "../componentes/RegiãoClimaDaSemana";

export default function ClimaDaSemana(){
    return (
        <View style={styles.container}>
            <RCLDSemana></RCLDSemana>
            <Text style={styles.title}>Proximos 7 Dias</Text>
            <Dias dia = "Segunda" data= ", 12 Set"max = "32" min = "/ 30°"></Dias>
            <Dias dia = "Terça" data= ", 13 Set"max = "33" min = "/ 31°"></Dias>
            <Dias dia = "Quarta" data= ", 14 Set"max = "35" min = "/ 31°"></Dias>
            <Dias dia = "Quinta" data= ", 15 Set"max = "34" min = "/ 32°"></Dias>
            <Dias dia = "Sexta" data= ", 16 Set"max = "33" min = "/ 32°"></Dias>
            <Dias dia = "Sabado" data= ", 17 Set"max = "35" min = "/ 31°"></Dias>
            <Dias dia = "Domingo" data= ", 18 Set"max = "32" min = "/ 29°"></Dias>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor:'#477FFF',
      
    },
    title:{
        color:'white',
        fontSize: 22,
        fontWeight: '600',
        marginLeft: 20
    }
  });
  
  