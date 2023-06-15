// importações
import { StyleSheet, Text, View, TextInput, Image, CheckBox, Button, Pressable, Platform, FlatList, SafeAreaView } from 'react-native'
import Botao from '../components/Botao'
import { useState, useEffect } from 'react'
import { estilos } from './ProximasVacinas_sty'
import CardProxima from '../components/CardProxima'
import { auth, db } from '../firebase/config'
import { addDoc, query, collection, onSnapshot, where, doc, setDoc, parentDocRef } from 'firebase/firestore';


const ProximasVacinas = (props) => {

  const [listaVacinas, setListaVacinas] = useState([])
  const dataAtual = new Date()


  const colecao = collection(db, "users")
  const userLogado = auth.currentUser

  useEffect(() => {

    onSnapshot(colecao, (snapshot) => {
      const vacinas = []
      snapshot.forEach((doc) => {
        if(doc.data().dataVacinacao){
          var partesData = doc.data().dataVacinacao.split("/");
          var data = new Date(partesData[2], partesData[1] - 1, partesData[0])
          var partesDataProx = doc.data().proxVacinacao.split("/");
          var dataProx = new Date(partesDataProx[2], partesDataProx[1] - 1, partesDataProx[0])
        }
        if((doc.data().userId == userLogado.uid) && ((data > dataAtual) || dataProx > dataAtual)){
          vacinas.push({
            id: doc.id,
            nomeVacina: doc.data().nomeVacina,
            dataVacinacao: doc.data().dataVacinacao,
            dose: doc.data().dose,
            imagem: doc.data().url,
            proxVacinacao: doc.data().proxVacinacao,
            userId: doc.data().userId
          })
          setListaVacinas(vacinas)
        }
      })
    })
  }, [])

  const goToNovaVacina = () => {
    props.navigation.navigate('Nova vacina')
  }

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList 
            data={listaVacinas} 
            renderItem={({item}) => {
              if(item.proxVacinacao == "" || item.proxVacinacao == null || item.proxVacinacao == undefined){
                console.log('PROX: '+ item.proxVacinacao)
              } else{
                return <CardProxima item={item} />
              }
            }}
            keyExtractor={item => item.id}
            numColumns={1}            
      />
      <View style={estilos.botao}>
        <Botao texto="Nova vacina" background="green" onPress={goToNovaVacina} />
      </View>
    </SafeAreaView>
  )
}

// Exportação
export default ProximasVacinas