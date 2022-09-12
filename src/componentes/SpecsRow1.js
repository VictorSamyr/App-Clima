import { View,StyleSheet, Text } from "react-native";
import CSpecs from "./ClimaSpecs";

export default function SRow1(props){
    return(
        <View style={styles.conteiner}>
            <CSpecs titulo = "Vento" info = "20km/h"></CSpecs>
            <CSpecs titulo = "Sens. Térmica" info = "28°" ></CSpecs>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flexDirection: "row",
        backgroundColor: '#477FFF',
        borderTopWidth: 1,
        borderColor: 'white',
        alignContent:'space-between'
    },
   
})