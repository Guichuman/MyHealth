// importações
import { StyleSheet, Text, View, Image, TextInput, CheckBox, Button, Pressable, Platform, FlatList, SafeAreaView } from 'react-native'
import Botao from '../components/Botao'
import CardVacina from '../components/CardVacina'
import { useState, useEffect } from 'react'
import { estilos } from './Home_sty'
import { auth, db } from '../firebase/config'
import { addDoc, query, collection, onSnapshot, where, doc, setDoc, parentDocRef } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux'
import { reducerSetLogin } from '../redux/loginSlice'



// Definição do componente
const Home = (props) => {

  const [listaVacinas, setListaVacinas] = useState([])
  const [dataFiltrada, setDataFiltrada] = useState([])

  const colecao = collection(db, "users")
  const userLogado = auth.currentUser
  const userRef = doc(colecao, userLogado.uid)
  const [pesquisa, setPesquisa] = useState('')
  const idUser = useSelector((state) => state.login.id)
  console.log("ID USER: "+ idUser)


  useEffect(() => {

    onSnapshot(colecao, (snapshot) => {
      const vacinas = []
      snapshot.forEach((doc) => {
        if(doc.data().userId == userLogado.uid){
          vacinas.push({
            id: doc.id,
            nomeVacina: doc.data().nomeVacina,
            dataVacinacao: doc.data().dataVacinacao,
            dose: doc.data().dose,
            imagem: doc.data().imagem,
            proxVacinacao: doc.data().proxVacinacao,
            userId: doc.data().userId
          })
          setDataFiltrada(vacinas)
          setListaVacinas(vacinas)
        }
      })
    })
  }, [])


  const pesquisaVacina = (pesquisa) => {

    if(pesquisa){
      const vacinas = []
      listaVacinas.filter((vacina) => {
  
        if(vacina.nomeVacina == pesquisa && vacina.userId == userLogado.uid){
          vacinas.push({
            id: vacina.id,
            nomeVacina: vacina.nomeVacina,
            dataVacinacao: vacina.dataVacinacao,
            dose: vacina.dose,
            imagem: vacina.imagem,
            proxVacinacao: vacina.proxVacinacao,
            userId: vacina.userId,
          })
          setDataFiltrada(vacinas)
        }
      })
    }else{
      setDataFiltrada(listaVacinas)
    }

    setPesquisa(pesquisa)
  }


  const goToNovaVacina = () => {
    props.navigation.navigate('Nova vacina')
  }


  return (
    <View style={estilos.container}>
      <View style={estilos.containerPesquisa}>
        <Image style={estilos.imagem} source={require('../../assets/images/pesquisa.png')} />
        <TextInput 
          placeholder='PESQUISAR VACINA...' 
          style={estilos.inputPesquisa} 
          value={pesquisa}
          onChangeText={(pesquisa) => pesquisaVacina(pesquisa)} 
        />
      </View>
      <SafeAreaView style={estilos.containerVacinas}>
          <FlatList 
            data={dataFiltrada} 
            renderItem={({item}) => <CardVacina item={item} navigation={props.navigation}/>}
            keyExtractor={item => item.id}
            numColumns={2}            
            />
        </SafeAreaView>
        
      <View style={estilos.containerBotao}>
        <Botao texto="Nova vacina" background="green" onPress={goToNovaVacina} />
      </View>
    </View>
  )
}

// Exportação
export default Home