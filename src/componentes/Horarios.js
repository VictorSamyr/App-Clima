import { View,Text,StyleSheet } from "react-native";
import HClima from "./HorariosClima";

export default function Horarios(){
    return(
        <View style = {styles.conteiner}>
            <HClima horario = "12:00" temp = "28°"></HClima>
            <HClima horario = "14:00" temp = "27°"></HClima>
            <HClima horario = "16:00" temp = "25°"></HClima>
            <HClima horario = "18:00" temp = "30°"></HClima>
            <HClima horario = "20:00" temp = "28°"></HClima>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-between'

        
    },
})