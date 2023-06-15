import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ADD4D0'
    },
    cabecallho: {
        flex: 1
    },
    containerLogo:{
        flexDirection: 'row',
        padding: 8,
        backgroundColor: '#C1E7E3'
    },
    imgVacina:{
        width: 40,
        height: 30,
        marginTop: 5
    },
    logo: {
        fontSize: 32,
        fontFamily: "AveriaLibre-Regular",
        textAlign: 'center',
        color: "#419ED7"
    },
    containerInput: {
        flex: 7,
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 80
    },
    containerButton: {
        flex: 2
    },
    label: {
        fontFamily: "AveriaLibre-Regular",
        color: "#FFFFFF"
    },
    inputEmail: {
        height: 35,
        margin: 12,
        backgroundColor: '#FFFFFF',
        color: '#419ED7',
        padding: 10,
        width: 290
    },
    
})

export {estilos}