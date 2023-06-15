// importações
import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import Botao from '../components/Botao'
import { estilos } from './RecuperarSenha_sty'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase/config'
import { useState } from 'react'



// Definição do componente
const RecuperarSenha = (props) => {

  const [email, setEmail] = useState('')

  const btnRecuperarSenha = () => {
    sendPasswordResetEmail(auth, email)
    .then(() => {
      props.navigation.navigate('Login')
    })
    .catch((erro) => {
      props.navigation.navigate('Login')
    })
  }
  return (
    <View style={estilos.container}>
      <View style={estilos.containerLogo}>
          <Image source={require('../../assets/images/vacina.png')} style={estilos.imgVacina}/>
          <Text style={estilos.logo}>MyHealth</Text> 
      </View>
      <View style={estilos.containerInput}>
        <Text style={estilos.label}>E-mail</Text>
        <TextInput style={estilos.inputEmail} placeholder='email@email.com' placeholderTextColor="#419ED7" />
      </View>
      <View style={estilos.containerButton}>
        <Botao texto="Recuperar senha" background="green" style={{marginTop: 100}} onPress={btnRecuperarSenha}/>
      </View>
    </View>
  )
}

// Exportação
export default RecuperarSenha