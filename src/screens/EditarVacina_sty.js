import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ADD4D0'
    },
    containerInputs: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 15
    },
    containerInput: {
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 5
    },
    containerButton: {
        flex: 1,
        marginTop: 45
    },
    label: {
        fontFamily: "AveriaLibre-Regular",
        color: "#FFFFFF"
    },
    input: {
        fontFamily: "AveriaLibre-Regular",
        color: '#419ED7',
        height: 34,
        margin: 12,
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        padding: 10,
        width: 200
    },
    span:{
        alignSelf: 'center',
        marginLeft: 25,
        fontWeight: 600
    },
    dateComponent: {
        width: 250
    },
    radioGroup:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        width: 18,
        height: 18,
        position: 'absolute',
        marginLeft: 302,
        zIndex: 55
    },
    radioGroup:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioText: {
        fontFamily: "AveriaLibre-Regular",
        color: '#FFFFFF',
        fontSize: 12,
    },
    modalContainer:{
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        width: "68%",
        height: "18%",
        flexDirection: 'column',
        borderColor: '#B9DFDB',
        borderRadius: 7,
        borderColor: 'red',
        borderWidth: 2
    },
    textModal: {
        color: '#FD7979',
        fontFamily: "AveriaLibre-Regular",
        fontSize: 20,
        paddingVertical: 20
    },
    containerBotaoModal:{
        flexDirection: 'row'
    },
    centralizado:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)'
    }
    
})

export {estilos}