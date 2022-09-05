import { Text, View, StyleSheet, Image } from "react-native";
import { info } from "sass";

export default function CIExtends(props){
    return (
        <View style = {styles.conteiner}>
            <Image source={{ uri: "https://img.icons8.com/ios-glyphs/30/FFFFFF/exclamation-mark.png" }} style={styles.icone} />
            <Text>
            <Text style = {styles.titulo}>{props.titulo}</Text>{"\n"}
            <Text style = {styles.info}>{props.info}</Text>
            </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    conteiner: {
        backgroundColor: '#477FFF',
        alignItems: 'center',
        width: '50%',
        flexDirection: 'row',
        
    },
    icone:{
        width: 30, 
        height: 30,
        margin: 15
    },
    info:{
        fontWeight: 'bold',
        color: 'white'
    },
    titulo:{
        fontWeight: 'bold',
        color: "#D1D8E8"
    }

})