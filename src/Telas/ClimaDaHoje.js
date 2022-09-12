import {View, Text, StyleSheet, Image} from "react-native";
import CDHInfo from "../componentes/ClimaDeHojeInfo";
import Horarios from "../componentes/Horarios";
import Região from "../componentes/Região";
import SRow1 from "../componentes/SpecsRow1";
import SRow2 from "../componentes/SpecsRow2";


export default function ClimaDeHoje(){
    return (
        <View style ={styles.conteiner}>
        <Região></Região>
        <CDHInfo></CDHInfo>
        <SRow1></SRow1>
        <SRow2></SRow2>
        <Text style ={styles.title}>Today</Text>
        <Horarios></Horarios>
        </View>
    );
}


const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        margin: 50,
        width:'85%',
    },
    title:{
        color: '#404040',
        fontSize: 22,
        fontWeight: '600',
        marginTop: 50,
        marginBottom: 5
    }
    
    
});
