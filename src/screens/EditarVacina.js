// importaçõesurlImagem
import { StyleSheet, Text, View, TextInput, Image, CheckBox, Button, Pressable, Platform, Alert, Modal } from 'react-native'
import Botao from '../components/Botao'
import { estilos } from './EditarVacina_sty'
import { RadioButton } from 'react-native-paper';
import { HelperText } from 'react-native-paper'
import { useState, useEffect } from 'react'
import { addDoc, query, collection, where, doc, updateDoc, parentDocRef, onSnapshot, deleteDoc } from 'firebase/firestore';
import { auth, db, storage } from '../firebase/config';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';




// Definição do componente
const EditarVacina = (props) => {

  const [checked, setChecked] = useState('1a. dose')
  const [dataVacinacao, setDataVacinacao] = useState(props.route.params.item.dataVacinacao);
  const [nomeVacina, setNomeVacina] = useState(props.route.params.item.nomeVacina);
  const [dose, setDose] = useState(props.route.params.item.dose);
  const [imagem, setImagem] = useState(props.route.params.item.imagem)
  const [proxVacinacao, setProxVacinacao] = useState(props.route.params.item.proxVacinacao);
  const [urlImagem, setUrlImagem] = useState(props.route.params.item.imagem)
  const numeroRandom = Math.floor(Math.random() * 1000)


  const [modalVisible, setModalVisible] = useState(false)

  
  const editarVacina = async () => {
    const colecao = collection(db, "users")

    const refDoc = doc(db, "users", props.route.params.item.id)

    const imageRef = ref(storage, "images/"+numeroRandom+".jgp")

    const file = await fetch(urlImagem)
    const blob = await file.blob()

    uploadBytes(imageRef, blob, {contentType: 'image/jpeg'})
        .then((result) => {

          getDownloadURL(imageRef)
              .then((url) => {

                  updateDoc(refDoc, {
                      nomeVacina: nomeVacina,
                      dataVacinacao: dataVacinacao,
                      dose: dose,
                      imagem: url,
                      proxVacinacao: proxVacinacao,
                  })
                      .then((result) => {
                          props.navigation.navigate('DrawerNavigation');
                      })
                      .catch((erro) => {
                          console.log("ERRO CADASTRO VACINA: " + JSON.stringify(erro))
                      })

              })
              .catch((erro) => {
                  console.log("ERRO DOWNLOAD: " + JSON.stringify(erro))
              })

        })
        .catch((erro) => {
          console.log("ERRO UPLOAD: " + JSON.stringify(erro))
        })

  } 

    const deletarVacina = () => {
      const refDoc = doc(db, "users", props.route.params.item.id)

      deleteDoc(refDoc)
      .then(() => {
        props.navigation.navigate('Minhas vacinas')
      })
      .catch((erro) => {
        console.log("ERRO excluir: " + JSON.stringify(erro))
      })
    }

    const capturarImagem = () => {
    
      launchCamera({mediaType: 'photo', cameraType: 'back', quality: 1})
        .then((result) => {
          setImagem(result.assets[0])
          setUrlImagem(result.assets[0].uri)
        }) 
        .catch((error) => {
          console.log("ERRO CAMERA" + JSON.stringify(error))
        })
    }


  return (
    <View style={estilos.container}>
        <Modal animationType='fade ' visible={modalVisible} transparent={true} onRequestClose={() =>{console.log('modal fechado')}}>
            <View style={estilos.centralizado}>
                <View style={estilos.modalContainer}>
                    <Text style={estilos.textModal}>Tem certeza que deseja remover essa vacina?</Text>
                    <View style={estilos.containerBotaoModal}>
                        <Botao texto="Sim" background="red" onPress={deletarVacina} />
                        <View style={{marginHorizontal: 8}}></View>
                        <Botao texto="Cancelar" background="blue"  onPress={() => {setModalVisible(false)}}/>
                    </View>
                </View>
            </View>
        </Modal>
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
          <Text style={estilos.label}>Comprovante</Text>
          <Botao texto="Selecionar imagem" background="blue" onPress={capturarImagem}/>
        </View>
          {
            urlImagem ?
              <Image source={{ uri: urlImagem }} style={{width: 80, height: 80}}/>
              :
              null
          }
          
        <View style={estilos.containerInput}>
          <Text style={estilos.label}>Próxima vacinação</Text>
          <TextInput  placeholder='00/00/0000' value={proxVacinacao} style={estilos.input}  placeholderTextColor="#419ED7" onChangeText={proxVacinacao => setProxVacinacao(proxVacinacao)}/>
          <Image style={estilos.imagem} source={require('../../assets/images/calendarInput.png')} />
        </View>
      </View>
      <View style={estilos.containerButton}>
        <Botao texto="Salvar alterações" background="green" onPress={editarVacina}/>
      </View>
      <View style={estilos.containerButton}>
        <Botao texto="Excluir" background="red" style={{marginBottom: 10}} onPress={() => {setModalVisible(true)}} />
      </View>
    </View>
  )
}

// Exportação
export default EditarVacina