import {View,StyleSheet} from 'react-native';
import CDHorario from './ClimaDoHorario';

export default function CALDDia(){
    return(
        <View style = {styles.conteiner}>
            <CDHorario hora = '12:00' temperatura = '34°'></CDHorario>
            <CDHorario hora = '14:00' temperatura = '32°'></CDHorario>
            <CDHorario hora = '16:00' temperatura = '30°'></CDHorario>
            <CDHorario hora = '18:00' temperatura = '28°'></CDHorario>
            <CDHorario hora = '20:00' temperatura = '26°'></CDHorario>
            <CDHorario hora = '22:00' temperatura = '24°'></CDHorario>
        </View>
    );

}

const styles = StyleSheet.create({

    conteiner: {
        flexDirection: 'row',
   
    },
    
    

})