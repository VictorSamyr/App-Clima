import {View,Image,StyleSheet,Text} from "react-native";

export default function CDHorario(props){
    return(
        <View style = {styles.conteiner}>
            <Text style = {styles.hora}>{props.hora}</Text>
            <Image source={{ uri: "https://img.icons8.com/color/30/000000/sun--v1.png" }} style={styles.icone}/>
            <Text style = {styles.temp}>{props.temperatura}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    conteiner: {
        alignItems: 'center',
        borderColor: 'grey',
        marginRight: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#D1D8E8'

        
        
    },
    icone:{
        width: 50, 
        height: 50,
    },
    hora:{
        fontWeight: 600,
        color: 'gray'
    },
    temp:{
        fontWeight: 'bold',
        color: 'gray'
    }

    
})