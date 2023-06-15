import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { IconButton } from 'react-native-paper';

import { Provider } from 'react-redux'
import { store } from '../redux/store'

import Home from '../screens/Home'
import Proximasvacinas from '../screens/Proximasvacinas'
import CustomDrawer from './CustomDrawer'

const Drawer = createDrawerNavigator()


const DrawerNavigation = () => {
    return (

        <Drawer.Navigator screenOptions={{drawerStyle: {backgroundColor: '#ADD4D0', }, drawerLabelStyle: { fontSize: 19,color: '#419ED7', fontFamily: "AveriaLibre-Regular"}, headerStyle: {backgroundColor: '#C1E7E3'}, headerTintColor: '#419ED7', headerTitleStyle: { fontFamily: "AveriaLibre-Regular", fontWeight: undefined, fontSize: 25}}} drawerContent={(props) => <CustomDrawer {...props} />}>
            <Drawer.Screen name="Minhas vacinas" component={Home}  
                options={{
                drawerIcon: () => (
                    <Image name="home" source={require('../../assets/images/vacina.png')} style={estilos.iconSize} />
                ),
            }}  />
            <Drawer.Screen name="Próximas vacinas" 
            options={{
                drawerIcon: () => (
                    <Image name="calendar"  source={require('../../assets/images/calendar.png')} style={estilos.iconSize} />
                ),
            }}
            component={Proximasvacinas} />
        </Drawer.Navigator>
    )
}

const estilos = StyleSheet.create({
    iconSize: {
        height: 24,
        width: 24,
    }
})

export default DrawerNavigation