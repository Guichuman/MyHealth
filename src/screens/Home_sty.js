import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD4D0'
    },
    containerPesquisa: {
        flexDirection: 'row'
    },
    inputPesquisa: {
        flex: 1,
        height: 30,
        margin: 12,
        backgroundColor: '#FFFFFF',
        color: '#419ED7',
        padding: 5,
        paddingLeft: 30,
        fontFamily: "AveriaLibre-Regular",
        borderRadius: 3
    },
    containerVacinas: {
        flex: 7,
       
    },
    containerBotao: {
        flex: 1,
    },
    imagem: {
        width: 18,
        height: 18,
        position: 'absolute',
        left: 18,
        bottom: 18,
        zIndex: 55
    }
    
})

export {estilos}