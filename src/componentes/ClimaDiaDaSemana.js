import { View, Text, Image, StyleSheet} from "react-native";
export default function CDDSemana(porps){
    return (
        <View style={styles.conteiner}>
            <Image source={{ uri: "https://img.icons8.com/color/60/000000/sun--v1.png" }} style={styles.icone} />
            <Text style={styles.dia}>      {porps.dia}</Text>
            <Text style={styles.data}>{porps.data}</Text>
            <Text style={styles.min}>{porps.minima}</Text>
            <Text style={styles.max}>{porps.maxima}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner:{
        flexDirection: "row",
        marginBottom: 10
      
    },
    icone: {
        height:60,
        width: 60,
        marginLeft: 15
    },
    dia:{
        margin: 20,
        marginRight: 0,
        fontWeight: 'bold',
        color: 'white'
    },
    data:{
        margin: 20,
        marginRight: 0,
        fontWeight: 'bold',
        color: "#D1D8E8",
     
    },
    min:{
        margin: 20,
        marginRight: 0,
        color: "#D1D8E8",
        fontWeight: 'bold',
        alignItems: 'flex-end'
    },
    max:{
        margin: 20,
        marginLeft: 0,
        color: "white",
        fontWeight: 'bold',
    }
})