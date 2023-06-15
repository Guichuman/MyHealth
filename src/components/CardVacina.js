import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { estilos } from './CardVacina_sty'
import { Avatar, Button, Card, Text } from 'react-native-paper';


const CardVacina = (props) => {

    const goToEditVacina = () => {
        props.navigation.navigate('Editar vacina', {item: props.item})
    }

    return (
        <TouchableOpacity style={estilos.containerCard} onPress={goToEditVacina}>
            <Card style={estilos.card}>
                <Text  style={{fontFamily: 'AveriaLibre-Regular', color: '#3F92C5', fontSize: 24, alignSelf: 'center', fontWeight: 500}} >{props.item.nomeVacina}</Text>
                <Card.Content>
                    <Text style={estilos.cardDose}>{props.item.dose}</Text>
                    <Text style={estilos.cardData} >{props.item.dataVacinacao}</Text>
                </Card.Content>
                {
                    props.item.imagem ?
                    <Card.Cover source={{ uri: props.item.imagem }} style={estilos.comprovanteVacina} />
                    : null

                }
                <Text style={estilos.proximaVacina}>{props.item.proxVacinacao == "" ? 'Não há próxima dose' : "Próxima dose em:"} {props.item.proxVacinacao}</Text>
            </Card>
        </TouchableOpacity>
    )
  }
  
  // Exportação
export default CardVacina