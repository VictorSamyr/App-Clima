import { View, StyleSheet,Text } from "react-native";

export default function RCLDSemana(){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.estado}>Alagoas, <Text style ={styles.país}>Brazil</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        margin:40,
        alignItems:'center'
    },
    estado:{
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white'
    },
    país:{
        fontWeight: '400',
        fontSize: 28,
        color: '#dfdfdf',
    },
   
})