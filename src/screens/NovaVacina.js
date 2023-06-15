// importações
import { StyleSheet, Text, View, TextInput, Image, CheckBox, Button, Pressable, Platform, TouchableOpacity, Alert } from 'react-native'
import Botao from '../components/Botao'
import { estilos } from './NovaVacina_sty'
import { RadioButton } from 'react-native-paper';
import { useState, useEffect } from 'react'
import { addDoc, query, collection, onSnapshot, where, doc, setDoc, parentDocRef } from 'firebase/firestore';
import { auth, db, storage } from '../firebase/config';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';


const NovaVacina = (props) => {

  const [checked, setChecked] = useState('1a. dose')
  const [dose, setDose] = useState('1a. dose');
  const [dataVacinacao, setDataVacinacao] = useState('');
  const [proxVacinacao, setProxVacinacao] = useState('');
  const [nomeVacina, setNomeVacina] = useState('');
  const [imagem, setImagem] = useState()
  const [urlImagem, setUrlImagem] = useState()

  const numeroRandom = Math.floor(Math.random() * 1000)
  const colecao = collection(db, "users")

  const userLogado = auth.currentUser
  const userRef = doc(colecao, userLogado.uid)

  const limparStates = () => {
    setDataVacinacao('')
    setNomeVacina('')
    setDose('')
    setProxVacinacao('')
}

  const criarVacina = async () => {


    const imageRef = ref(storage, "images/"+numeroRandom+".jgp")

    const file = await fetch(urlImagem)
    const blob = await file.blob()

    uploadBytes(imageRef, blob, {contentType: 'image/jpeg'})
        .then((result) => {

            getDownloadURL(imageRef)
                .then((url) => {

                  const vacina = {
                    userId: userLogado.uid,
                    dataVacinacao: dataVacinacao,
                    nomeVacina: nomeVacina,
                    dose: dose,
                    imagem: url,
                    url: imagem,
                    proxVacinacao: proxVacinacao
                  }

                  addDoc(colecao, vacina)
                      .then((response) => {
                        limparStates()
                        props.navigation.navigate('DrawerNavigation');
                      })
                      .catch((erro) => {
                          console.log("ERRO Cadastro: "+ JSON.stringify(erro))
                      })
          

                })
                .catch((erro) => {
                    console.log("ERRO DOWNLOAD URL: "+ JSON.stringify(erro))
                })

        })
        .catch((erro) => {
          console.log("ERRO UPLOAD: "+ JSON.stringify(erro))
        })
    
  }

  const capturarImagem = () => {
    
    launchCamera({mediaType: 'photo', cameraType: 'back', quality: 1})
    .then((result) => {
      setImagem(result.assets[0])
      setUrlImagem(result.assets[0].uri)
    }) 
    .catch((erro) => {
      console.log(erro)
    })
  }
  

 


  return (
    <View style={estilos.container}>
      <View style={estilos.containerInputs}>
        <View style={estilos.containerInput}> 
          <Text style={estilos.label}>Data de vacinação</Text>
          <TextInput  placeholder='00/00/0000' value={dataVacinacao} style={estilos.input}  placeholderTextColor="#419ED7" onChangeText={dataVacinacao => setDataVacinacao(dataVacinacao)}/>
          <Image style={estilos.imagem} source={require('../../assets/images/calendarInput.png')}/>
        </View>
        <View style={estilos.containerInput}>
            <Text style={estilos.label}>Vacina</Text>
            <TextInput style={estilos.input} placeholder='Nome da vacina' value={nomeVacina}  onChangeText={nomeVacina => setNomeVacina(nomeVacina)} placeholderTextColor="#419ED7" />
        </View>
        <RadioButton.Group onValueChange={dose => setDose(dose)} value={dose} >
          <View style={estilos.radioGroup}>
          <Text style={{ fontFamily: "AveriaLibre-Regular", color: "#FFFFFF"}}>Dose</Text>
            <RadioButton label="1a. dose" color="#419ED7" value="1dose"/>
            <Text style={estilos.radioText}>1a. dose</Text>
            <RadioButton label="2a. dose" color="#419ED7" value="2dose" />
            <Text style={estilos.radioText}>2a. dose</Text>
            <RadioButton label="3a. dose" color="#419ED7" value="3dose" />
            <Text style={estilos.radioText}>3a. dose</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 30}}>
            <RadioButton label="Dose única" color="#419ED7" value="unica" style={{marginLeft: 100}}/>
            <Text style={{fontFamily: "AveriaLibre-Regular",color: '#FFFFFF',fontSize: 12}}>Dose única</Text>
          </View>
        </RadioButton.Group>
        <View style={estilos.containerInput}>
          <Text style={estilos.labelCaptura}>Comprovante</Text>
          <Botao texto="Selecionar imagem" background="blue" onPress={capturarImagem} />
          
        </View>
        {
            urlImagem ? 
              <Image source={{uri: urlImagem}} style={{height: 80, width: 80, marginTop: 10}} />
              :
              null
          }
        <View style={estilos.containerInput}>
          <Text style={estilos.label}>Próxima vacinação</Text>
          <TextInput  placeholder='00/00/0000'  style={estilos.input} value={proxVacinacao} placeholderTextColor="#419ED7" onChangeText={proxVacinacao => setProxVacinacao(proxVacinacao)}/>
          <Image style={estilos.imagem} source={require('../../assets/images/calendarInput.png')} />
        </View>
        

      </View>
      <View style={estilos.containerButton}>
        <Botao texto="Cadastrar" background="green" style={{marginTop: 100}} onPress={criarVacina} />
      </View>
    </View>
  )
}

// Exportação
export default NovaVacina