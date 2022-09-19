import { View, Text, Image, StyleSheet} from "react-native";
import Dias from "../componentes/Dias";
import RCLDSemana from "../componentes/RegiãoClimaDaSemana";

export default function ClimaDaSemana(){
    return (
        <View style={styles.container}>
            <RCLDSemana />
            <Text style={styles.title}>Próximos 7 Dias</Text>
            <Dias icone = "https://cdn-icons-png.flaticon.com/512/1163/1163662.png" dia = "Segunda" data= ", 12 Set"max = "32" min = "/ 30°" ></Dias>
            <Dias icone = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png" dia = "Terça" data= ", 13 Set"max = "28" min = "/ 22°"></Dias>
            <Dias icone = "https://cdn-icons-png.flaticon.com/512/1163/1163657.png" dia = "Quarta" data= ", 14 Set"max = "25" min = "/ 20°"></Dias>
            <Dias icone = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png" dia = "Quinta" data= ", 15 Set"max = "22" min = "/ 20°"></Dias>
            <Dias icone = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png" dia = "Sexta" data= ", 16 Set"max = "33" min = "/ 32°"></Dias>
            <Dias icone = "https://cdn-icons-png.flaticon.com/512/1163/1163662.png" dia = "Sábado" data= ", 17 Set"max = "35" min = "/ 31°"></Dias>
            <Dias icone = "https://cdn-icons-png.flaticon.com/512/1163/1163629.png" dia = "Domingo" data= ", 18 Set"max = "32" min = "/ 29°"></Dias>
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
    },
    icone:{
        width: 50, 
        height: 50,
    },
    
  });
  
  