import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'

import Login from '../screens/Login'
import RecuperarSenha from '../screens/RecuperarSenha.js'
import CriarConta from '../screens/CriarConta.js'
import DrawerNavigation from '../components/DrawerNavigation'
import NovaVacina from './NovaVacina'
import EditarVacina from './EditarVacina'
import { store } from '../redux/store'

const Stack = createStackNavigator()

const Navigation = () => {

    navigationOptions = {
        header: ({ navigate }) => {
          return {
            titleStyle: {
              fontFamily: 'AveriaLibre-Regular'
            },
          };
        },
      };
      
    return(
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#C1E7E3'}, headerTintColor: '#419ED7', headerTitleStyle: { fontFamily: "AveriaLibre-Regular", fontWeight: undefined, fontSize: 23}}}>
                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Recuperar Senha" component={RecuperarSenha} options={{headerShown: false}}/>
                <Stack.Screen name="Nova Conta" component={CriarConta} />
                <Stack.Screen name="DrawerNavigation"  component={DrawerNavigation} options={{headerShown: false}}  />
                <Stack.Screen name="Nova vacina" component={NovaVacina} />
                <Stack.Screen name="Editar vacina" component={EditarVacina} />
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
}

export default Navigation;