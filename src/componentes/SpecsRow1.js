import { View,StyleSheet, Text } from "react-native";
import CSpecs from "./ClimaSpecs";

export default function SRow1(props){
    return(
        <View style={styles.conteiner}>
            <CSpecs icone = "https://cdn-icons-png.flaticon.com/512/1007/1007115.png" titulo = "Vento" info = "20km/h"></CSpecs>
            <CSpecs icone = "https://cdn-icons-png.flaticon.com/512/1163/1163666.png" titulo = "Sens. Térmica" info = "28°" ></CSpecs>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flexDirection: "row",
        backgroundColor: '#477FFF',
        borderTopWidth: 1,
        borderRight: 1,
        borderColor: 'white',
        alignContent:'space-between'
    },
   
})