import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#ADD4D0'
    },
    containerInputs: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight: 15
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
  txtComprovante: {
    fontFamily: "AveriaLibre-Regular",
    color: '#FFFFFF',
    fontSize: 15,
  },
  btnComprovante: {
    padding: 6,
    borderRadius: 3,
    alignItems: 'center',
    backgroundColor: '#419ED7',
    width: 190,
    marginHorizontal: 20,
    marginVertical: 10
  },
  labelCaptura: {
    marginRight: 15,
    fontFamily: "AveriaLibre-Regular",
    color: "#FFFFFF"
  }
    
})

export {estilos}