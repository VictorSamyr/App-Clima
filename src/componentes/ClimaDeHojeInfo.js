import { View, StyleSheet,Text,Image } from "react-native";


export default function CDHInfo(props){
    return(
        <View style ={styles.conteiner}>
            <Image source={{ uri: props.icone }} style={styles.icone} />
            <Text style ={styles.clima}>Ensolarado</Text>
            <Text style ={styles.data}>Segunda, 12 Set</Text>
            <Text style ={styles.temperatura}>27°</Text>
            
        </View>
    );
}
const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: '#477FFF',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        alignItems: 'center'
    },
    icone:{
        width: 144, 
        height: 144,
        margin: 20
    },
    clima:{
        color: 'white',
        fontWeight: '400',
        fontSize:28
    },
    data:{
        color: '#999999',
        fontSize: 14,
        fontWeight:'bold'
    },
    temperatura:{
        color: 'white',
        margin:20,
        fontWeight: 'bold',
        fontSize: 86
    }
    
})