import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ADD4D0',
        padding: 15
    },
    containerProxVacina:{
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 10,
        height: 60,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    textVacina: {
        color: '#3F92C5',
        fontSize: 22,
        fontFamily: "AveriaLibre-Regular",
    },
    textData: {
        fontFamily: "AveriaLibre-Regular",
        color: '#8B8B8B'
    },
    containerBotao: {
        flex: 1,
        bottom: 50
    },
    botao:{
        top: '80%'
    }
})

export {estilos}