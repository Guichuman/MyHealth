// importações
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { estilos } from './Login_sty'
import Botao from '../components/Botao'
import { HelperText, TextInput } from 'react-native-paper'
import { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase/config'
import { useDispatch } from 'react-redux'
import { reducerSetLogin } from '../redux/loginSlice'


// Definição do componente
const Login = (props) => {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [erroLogin, setErroLogin] = useState(false)
  const dispatch = useDispatch()

  const onChangeEmail = email => setEmail(email)
  const onChangeSenha = senha => setSenha(senha)

  const goToRecuperarSenha = () => {
    props.navigation.navigate('Recuperar Senha');
  }

  const hasErrors = () => {
    if(email == emailCadastrado && senha == senhaCadastrada){
      return false
    }else{
      return true
    }
  };

  const autenticacao = () => {

    setLoading(true)
    
    signInWithEmailAndPassword(auth, email, senha)
    .then((response) => {
      dispatch(reducerSetLogin({id: response.user.uid ,email: email}))
      props.navigation.push('DrawerNavigation')

    
    })
    .catch((erro) => {
      console.log("ERRO: " + erro)
      setErroLogin(true)
    })
    .finally(() => {
      setLoading(false)
    })
  }

  const goToCadastro = () => {
    props.navigation.navigate('Nova Conta')
  }


  return (
    <View style={estilos.container}>
      <ImageBackground source={require('../../assets/images/background.jpg')} resizeMode="cover" style={estilos.backgroundImage} imageStyle={{opacity: 0.5}}>
        <View style={estilos.cabecalho}>
          <View style={estilos.containerLogo}>
            <Image source={require('../../assets/images/vacina.png')} style={estilos.imgVacina}/>
            <Text style={estilos.logo}>MyHealth</Text> 
          </View>
          <Text style={estilos.banner}>Controle suas vacinas e fique seguro</Text>
        </View>
        <View style={estilos.containerInputs}>
          <View style={estilos.inputEmail}>
            <Text style={estilos.label}>E-mail</Text>
            <TextInput style={estilos.input} placeholder='email@email.com' value={email} placeholderTextColor="#419ED7" onChangeText={onChangeEmail}/>
          </View>
          <View style={estilos.inputSenha}>
            <Text style={estilos.label}>Senha</Text>
            <TextInput style={estilos.input}  placeholder='************' placeholderTextColor="#419ED7" value={senha} secureTextEntry={true} onChangeText={onChangeSenha}/>
          </View>
          <HelperText type="error" visible={erroLogin} style={estilos.span}>
              E-mail e/ou senha inválidos!
          </HelperText>
        </View>
        <View style={estilos.buttons}>
          <View style={{marginBottom: 50}}>
            {isLoading ? 
              < Botao texto="Autenticando..." background="green" />
              :
              < Botao texto="Entrar" background="green" onPress={autenticacao}/>
            }
          </View>
          <View style={{marginBottom: 50}}>
            < Botao texto="Criar minha conta" background="blue" onPress={goToCadastro}/>
          </View>
          <View>
            < Botao texto="Esqueci minha senha" background="white" onPress={goToRecuperarSenha}/>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

// Exportação
export default Login