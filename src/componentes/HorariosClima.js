import { View,Text,StyleSheet,Image } from "react-native";

export default function HClima(props){
    return(
        <View style ={styles.conteiner}>
            <Text style ={styles.horario}>{props.horario}</Text>
            <Image source={{ uri: "https://img.icons8.com/color/30/000000/sun--v1.png" }} style={styles.icone}/>
            <Text style ={styles.temp}>{props.temp}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: 'white',
        flexDirection: 'column',
        alignItems:'center',
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D3D8E8'
        
    },
    icone:{
        width: 50, 
        height: 50,
    },
    horario:{
        margin: 7,
        color: '#aaaaaa',
        fontWeight: '700'
    },
    temp:{
       color:'#6c6c6c',
       margin: 7,
       fontWeight: 'bold'

    }
})