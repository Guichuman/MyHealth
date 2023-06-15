import { StyleSheet } from "react-native"


const estilos = StyleSheet.create({
    containerCard: {
        padding: 5
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 185,
        height: 200,
    },
    cardDose: {
        fontFamily: "AveriaLibre-Regular",
        backgroundColor: '#3F92C5',
        alignSelf: 'center',
        paddingHorizontal: 14,
        color: '#FFFFFF',
        marginTop: 3
    },
    cardTitulo: {
        alignSelf: 'center',
        fontFamily: 'AveriaLibre-Regular',
    },
    cardData: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 16,
        color: '#8B8B8B',
        alignSelf: 'center',
        paddingVertical: 3
    },
    proximaVacina: {
        color: '#FD7979',
        alignSelf: 'flex-end',
        fontSize: 11
    },
    comprovanteVacina:{
        height: 90,
        width: 170,
        alignSelf: 'center'
    }
})

export {estilos}