import { View,Text, StyleSheet,Image } from "react-native";

export default function Regiao(){
    return (
        <View style={styles.conteiner}>
            <Image source={{ uri: "https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png" }} style={styles.icone}/>
            <Text style={styles.estado}>Maceió,<Text style={styles.país}> Alagoas</Text></Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: 'white',
       /* flex: 1,
        alignItems: 'left', */
    },
    estado:{
        fontWeight: 600,
        fontSize: 24,
        marginBottom: 20
    },
    país:{
        fontWeight: 400,
        color: 'gray'
    },
    icone:{
        height: 30,
        width:30,
        marginBottom: 50
    }



});