// importações
import { StyleSheet, Text, View, TextInput, Image, CheckBox, Button, Pressable, Platform } from 'react-native'
import Botao from '../components/Botao'
import { estilos } from './CriarConta_sty'
import { RadioButton } from 'react-native-paper';
import { HelperText } from 'react-native-paper'
import { useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { auth, db } from '../firebase/config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc, collection, setDoc, query } from 'firebase/firestore';

const CriarConta = (props) => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [dataNascimento, setDataNascimento] = useState('')
  const [senha, setSenha] = useState('')
  const [repetirSenha, setRepetirSenha] = useState('')
  const [sexo, setSexo] = useState('masculino');
  const [erroCadastro, setErroCadastro] = useState(false)

  const [date, setDate] = useState(new Date())
  const [showPicker, setShowPicker] = useState(false)

  const limparStates = () => {
    setNome('')
    setEmail('')
    setDataNascimento('')
    setSenha('')
    setRepetirSenha('')
    setSexo('')
  }

  const toggleDatePicker = () => {
    setShowPicker(!showPicker)
  }

  const onChangePicker = ({type}, selectedDate) => {
    if(type == 'set'){
      const currentDate = selectedDate
      setDate(currentDate)

      if(Platform.OS === "android"){
        toggleDatePicker()
        setDataNascimento(currentDate.toLocaleDateString('pt-br'))
      }
    }else{
      toggleDatePicker()
    }
  }

  const hasErrors = () => {
    if(senha != repetirSenha){
      return true
    }else{
      return false
    }
  }

  const criarDocumentoUsuario = () => {

    const colecao = collection(db, "users")

    const user = {
      nome: nome,
      email: email,
      senha: senha,
      dataNascimento: dataNascimento,
      sexo: sexo
    }
      
      addDoc(colecao, user).then((doc) => {
        limparStates()
        setErroCadastro(false)
        props.navigation.navigate('Login')
      })
      .catch((erro) => {
        setErroCadastro(true)
        console.log(erro)
      })
  }

  const criarConta = () => {
    if(senha == repetirSenha){

      createUserWithEmailAndPassword(auth, email, senha)
      .then((user) => {
        criarDocumentoUsuario()
      })
      .catch((erro) => {
        console.log(erro)
        setErroCadastro(true)
      })

    }
  }


  return (
    <View style={estilos.container}>
      <View style={estilos.containerInputs}>
        <View style={estilos.containerInput}> 
            <Text style={estilos.label}>Nome completo</Text>
            <TextInput style={estilos.input} placeholder='Nome completo' placeholderTextColor="#419ED7" value={nome} onChangeText={setNome}/>
        </View>
        <View style={estilos.containerInput}>
            <Text style={{fontFamily: "AveriaLibre-Regular", color: "#FFFFFF"}}>Sexo</Text>
              <RadioButton.Group onValueChange={sexo => setSexo(sexo)} value={sexo} >
                <View style={estilos.containerRadioButton}>
                    <RadioButton color="#419ED7" value="masculino" />
                    <Text style={estilos.radioText}>Masculino</Text>
                    <RadioButton color="#419ED7" value="feminino"/>
                    <Text style={estilos.radioText}>Feminino</Text>
                </View>
              </RadioButton.Group>
        </View>
        <View style={estilos.containerInput}>
            <Text style={estilos.label}>Data de nascimento</Text>
            {showPicker && (
              <DateTimePicker mode="date" display="calendar" format="dd/mm/yyyy" value={date} onChange={onChangePicker} />
            )}
            {!showPicker && (
              <Pressable onPress={toggleDatePicker}>
                <TextInput style={estilos.input} placeholder='dd/mm/aaaa' placeholderTextColor="#419ED7" editable={false} value={dataNascimento} />
              </Pressable>
            )}
            <Image style={estilos.imagem} source={require('../../assets/images/calendarInput.png')} />
        </View>
        <View style={estilos.containerInput}>
            <Text style={estilos.label}>E-mail</Text>
            <TextInput style={estilos.input} placeholder='email@email.com' placeholderTextColor="#419ED7" value={email} onChangeText={setEmail}/>
        </View>
        <View style={estilos.containerInput}>
            <Text style={estilos.label}>Senha</Text>
            <TextInput style={estilos.input} placeholder='*********' placeholderTextColor="#419ED7" secureTextEntry={true} value={senha} onChangeText={setSenha}/>
        </View>
        <View style={estilos.containerInput}>
            <Text style={estilos.label}>Repetir senha</Text>
            <TextInput style={estilos.input} placeholder='*********' placeholderTextColor="#419ED7" secureTextEntry={true} value={repetirSenha} onChangeText={setRepetirSenha} />
        </View>
        <HelperText type="error" visible={hasErrors()} style={estilos.span}>Senha não confere</HelperText>
        <HelperText type="error" visible={erroCadastro} style={estilos.span}>Erro ao cadastrar, confira se os campos estão corretos</HelperText>
        

      </View>
      <View style={estilos.containerButton}>
        <Botao texto="Cadastrar" background="green" style={{marginTop: 100}} onPress={criarConta}/>
      </View>
    </View>
  )
}


export default CriarConta