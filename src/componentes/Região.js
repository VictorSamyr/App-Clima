import { View, StyleSheet,Text } from "react-native";

export default function Região(){
    return(
        <View style={styles.conteiner}>
            <Text style={styles.estado}>Alagoas, <Text style ={styles.país}>Brazil</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        marginBottom:20
    },
    estado:{
        fontWeight: '400',
        fontSize: 28,
        color: '#404040'
    },
    país:{
        fontWeight: '200',
        fontSize: 28,
        color: 'gray',
    },
   
})