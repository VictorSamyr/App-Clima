import Regiao from "../componentes/Regiao";
import {View, Text, StyleSheet, Image} from "react-native";
import ClimaInfos from "../componentes/climaInfo";
import CIELabel from "../componentes/ClimaInfoExtendsLabel";
import CALDDia from "../componentes/ClimaAoLongoDoDia";


export default function ClimaDeHoje(){
    return (
        <View style ={styles.container}>
        
        <Regiao></Regiao>
        <ClimaInfos></ClimaInfos>
        <CIELabel titulo1 = "Vento" info1 = "15km/h" titulo2 = "Sens.Térmica" info2 = "34°"></CIELabel>
        <CIELabel titulo1 = "Index UV" info1 = "2" titulo2 = "Pressão" info2 = "1014 mbar"></CIELabel>
        <Text style ={styles.bottom}>-</Text>
        <Text style ={styles.hoje}>Hoje</Text>
        <CALDDia></CALDDia>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        backgroundColor: 'white',
        alignItems: 'left',
        justifyContent: 'flex-start',
    },
    bottom: {
        color: '#477FFF',
        backgroundColor: '#477FFF',
        borderBottomLeftRadius : 12,
        borderBottomRightRadius: 12,
        marginBottom: 50
    },
    hoje:{
        fontWeight: 'bold',
        marginBottom: 20
    }
 
});
