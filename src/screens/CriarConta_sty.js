import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ADD4D0'
    },
    containerLogo:{
        flexDirection: 'row',
        padding: 8,
        backgroundColor: '#C1E7E3'
    },
    imgVacina:{
        width: 40,
        height: 30
    },
    logo: {
        fontSize: 23,
        fontFamily: "AveriaLibre-Regular",
        textAlign: 'center',
        color: "#419ED7"
    },
    containerRadioButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 35,
        marginLeft: 20
    },
    containerInputs: {
        flex: 7,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 25
    },
    containerInput: {
        flexDirection: "row",
        alignItems: 'center',
    },
    containerButton: {
        flex: 2,
        marginTop: 90
    },
    label: {
        fontFamily: "AveriaLibre-Regular",
        color: "#FFFFFF"
    },
    input: {
        height: 34,
        margin: 12,
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        color: '#419ED7',
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
    imagem: {
        width: 18,
        height: 18,
        position: 'absolute',
        marginLeft: 308,
        zIndex: 55
    },
    radioText: {
        fontFamily: "AveriaLibre-Regular",
        color: '#FFFFFF',
        fontSize: 13,
    }
    
})

export {estilos}