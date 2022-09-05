import { StyleSheet, View } from "react-native";
import CIExtends from "./ClimaInfoExtends";

export default function CIELabel(props){
    return (
        <View style = {styles.conteiner}>
            <CIExtends titulo = {props.titulo1} info = {props.info1}></CIExtends>
            <CIExtends titulo= {props.titulo2} info = {props.info2}></CIExtends>
        </View>
    );
}

const styles = StyleSheet.create({

    conteiner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    

})