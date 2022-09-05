import RDDSemanas from "./RegiãoDiasDaSemanas";
import {View,Text, StyleSheet,} from "react-native";


export default function RDDSLabel(){
    return(
        <RDDSemanas></RDDSemanas>
    );

}
const styles = StyleSheet.create({
    conteiner:{
        backgroundColor: 'white',
        alignItems: 'center',
    }
})