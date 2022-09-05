import { View,Text, StyleSheet} from "react-native";

export default function RDDSemanas(){
    return (
        <View style={styles.conteiner}>
            <Text style={styles.estado}>Maceió,<Text style={styles.país}> Alagoas</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        alignItems: 'center',
        margin: 30
    },
    estado:{
        color: 'white',
        fontWeight: 600,
        fontSize: 24,
        marginBottom: 20
    },
    país:{
        fontWeight: 400,
        color: "#D1D8E8"
    },
    icone:{
        height: 30,
        width:30,
        marginBottom: 50
    }



});