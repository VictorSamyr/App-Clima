import { View, StyleSheet,Image,Text} from "react-native";
import CIELabel from "./ClimaInfoExtendsLabel";

export default function ClimaInfos(){
    return (
        <View style = {styles.container}>
            <Image source={{ uri: "https://img.icons8.com/color/144/000000/sun--v1.png" }} style={styles.icone} />
            <Text style = {styles.clima}>Ensolarado</Text>
            <Text style = {styles.data}>Segunda, 5 Set</Text>
            <Text style = {styles.temperatura}>32°</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#477FFF',
        marginTop: 20,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        alignItems: "center"
    },
    clima: {
        color: "white",
        fontWeight: 600,
        fontSize: 24
    },
    data: {
        color: "#D1D8E8",
        fontWeight: 500
    },
    temperatura: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 58,
        margin: 20
    },
    icone:{
        width: 144, 
        height: 144,
        margin: 5
    }

});