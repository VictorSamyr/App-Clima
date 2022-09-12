import { Text,Image, View, StyleSheet } from "react-native";

export default function CSpecs(props){
    return(
        <View style = {styles.conteiner}>
        <Image source={{ uri: "https://img.icons8.com/ios-glyphs/30/FFFFFF/exclamation-mark.png" }} style={styles.icone} />
        <Text style = {styles.titulo}>{props.titulo}{'\n'}
        
        <Text style = {styles.info}>{props.info}</Text>
        </Text>
        
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flexDirection: "row",
        backgroundColor: '#477FFF',
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        width: '50%',
        alignContent:'center',
        marginTop:8
        ,
        marginBottom: 8
    },
    icone:{
        width: 30, 
        height: 30,
        margin: 15
    },
    info:{
        fontWeight: 'bold',
        color: 'white',
    },
    titulo:{
        fontWeight: 'bold',
        color: "#D1D8E8",
        margin: 10
    }
   
})