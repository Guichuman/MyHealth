import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { estilos } from './Button_sty'

const Button = (props) => {

    let background, texto

    if(props.background == 'green'){
      background = '#37BD6D'
    } else if(props.background == 'blue'){
      background = '#419ED7'
    }else if(props.background == 'red'){
      background = '#FD7979'
    }else if(props.background == 'white'){
      background = '#B5C7D1'
    }

    return (
      <TouchableOpacity style={[estilos.btn, {backgroundColor: background}]} onPress={props.onPress}>
        <Text style={estilos.text}>{props.texto}</Text>
      </TouchableOpacity>
    )
  }
  
  // Exportação
export default Button