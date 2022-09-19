import { View,Text,StyleSheet } from "react-native";
import HClima from "./HorariosClima";

export default function Horarios(){
    return(
        <View style = {styles.conteiner}>
            <HClima icone = "https://cdn-icons-png.flaticon.com/512/1163/1163662.png" horario = "12:00" temp = "28°"></HClima>
            <HClima icone = "https://cdn-icons-png.flaticon.com/512/1163/1163661.png" horario = "14:00" temp = "27°"></HClima>
            <HClima icone = "https://cdn-icons-png.flaticon.com/512/1163/1163657.png" horario = "16:00" temp = "25°"></HClima>
            <HClima icone = "https://cdn-icons-png.flaticon.com/512/1163/1163626.png" horario = "18:00" temp = "30°"></HClima>
            <HClima icone = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png" horario = "20:00" temp = "28°"></HClima>
        </View>
    );
}

const styles =  StyleSheet.create({
    conteiner:{
        flexDirection: 'row',
        width:'100%',
        justifyContent: 'space-between'       
    },
})