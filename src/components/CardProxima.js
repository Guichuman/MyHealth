import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-paper';

const CardProxima = (props) => {

    return (
        <View style={{backgroundColor: '#FFFFFF', borderRadius: 8, padding: 10, height: 60, flexDirection: 'column', alignItems: 'flex-start', marginTop: 10}}>
            <Text style={{color: '#3F92C5', fontSize: 22, fontFamily: "AveriaLibre-Regular"}}>{props.item.nomeVacina}</Text>
            {props.item.dataVacinacao > props.item.proxVacinacao ? 
                <Text style={{fontFamily: "AveriaLibre-Regular", color: '#8B8B8B'}}>{props.item.dataVacinacao}</Text>
                    :
                <Text style={{fontFamily: "AveriaLibre-Regular", color: '#8B8B8B'}}>{props.item.proxVacinacao}</Text>

            }
        </View>
    )
  }
  

export default CardProxima