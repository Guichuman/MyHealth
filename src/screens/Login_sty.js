import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'rgba(0,0,0,.3)',

    },
    cabecallho: {
        flex: 4
    },
    containerLogo:{
        flexDirection: 'row',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgVacina:{
        width: 40,
        height: 36,
        marginTop: 60
    },
    containerInputs: {
        flex: 3
    },
    input: {
        height: 30,
        margin: 12,
        backgroundColor: '#FFFFFF',
        color: '#419ED7',
        padding: 3,
        width: 270,
        borderRadius: 3
    },
    inputEmail: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    inputSenha: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',
    },
    buttons: {
        flex: 3,
    },
    logo: {
        fontSize: 35,
        fontFamily: "AveriaLibre-Regular",
        textAlign: 'center',
        color: "#419ED7",
        textDecorationLine: 'underline',
        marginTop: 60
    },
    banner: {
        fontSize: 26,
        fontFamily: "AveriaLibre-Regular",
        textAlign: 'center',
        color: "#419ED7",
        marginTop: 60
    },
    label: {
        fontFamily: "AveriaLibre-Regular",
        color: "#FFFFFF"
    },
    backgroundImage:{
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    },
    span:{
        alignSelf: 'center'
    }
    
})

export {estilos}