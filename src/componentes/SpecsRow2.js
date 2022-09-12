import { View,StyleSheet, Text } from "react-native";
import CSpecs from "./ClimaSpecs";

export default function SRow2(props){
    return(
        <View style={styles.conteiner}>
            <CSpecs titulo = "Index UV" info = "2"></CSpecs>
            <CSpecs titulo = "Pressão" info = "1014 mbar"></CSpecs>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flexDirection: "row",
        backgroundColor: '#477FFF',
        borderTopWidth: 1,
        borderColor: 'white',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        alignContent:'space-around'
    },
    
   
})