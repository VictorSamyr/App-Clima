import { View,Image,Text,StyleSheet } from "react-native";

export default function Dias(props){
    return(
        <View style={styles.container}>
            <Image source={{ uri: "https://img.icons8.com/color/144/000000/sun--v1.png" }} style={styles.icone} />
            <Text style={styles.dia}>{props.dia}<Text style={styles.data}>{props.data}</Text></Text>
            
            
            <Text style={styles.max}>{props.max}
                <Text style={styles.min}>
                {props.min}
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        flexDirection: 'row',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icone:{
        width: '20%', 
        height: 60,
        marginRight: 20
    },
    dia:{
        width: '55%',
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    data:{
        fontSize: 20,
        color: '#dfdfdf'
    },
    max:{
        width: '25%',
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    min:{
        fontSize: 18,
        color: '#dfdfdf',
        fontWeight: 'bold'
    }
  });