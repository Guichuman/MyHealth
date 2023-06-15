import { View, Text, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList, Icon } from '@react-navigation/drawer'


const CustomDrawer = (props) => {
    
    return (
        <DrawerContentScrollView {...props}> 
            <View>
                <Text style={{ fontSize: 25, color: '#419ED7', alignSelf: 'center', paddingHorizontal: 40, paddingTop: 40, paddingBottom: 25, fontFamily: "AveriaLibre-Regular" }}>Olá Guilherme</Text>
                <Text style={{ fontSize: 18, color: '#419ED7', alignSelf: 'center', fontWeight: 600, paddingBottom: 25}}>────────────────</Text>
            </View>
            <DrawerItemList {...props} />
            <DrawerItem 
                labelStyle={{  fontSize: 19,color: '#419ED7', fontFamily: "AveriaLibre-Regular" }} 
                label="Sair" 
                onPress={() => { props.navigation.popToTop() }} 
                icon={() => 
                    <Image source={require('../../assets/images/logout.png')} style={{width: 24, height: 24}} />
                }
            />
        </DrawerContentScrollView>
    )
}

export default CustomDrawer