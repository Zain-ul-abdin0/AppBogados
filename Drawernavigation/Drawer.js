import * as React from 'react';
import { Button, View,Image,Text } from 'react-native';
import { createDrawerNavigator,DrawerItemList  } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CalculoDePrestaciones from '../DrawerScreens/CalculoDePrestaciones';
import Contactenos from '../DrawerScreens/Contactenos';
import Informaciónlegal from '../DrawerScreens/Informaciónlegal';
import Servicioslegales from '../DrawerScreens/Servicioslegales';
import Registrate from '../screens/Registrate';
import SideBarScreen from '../screens/SideBarScreen';
import Header from '../components/Header';
import { Ionicons } from '@expo/vector-icons';
import HeaderBack from '../components/HeaderBack';
import DrawerContent from '../DrawerContent'
import Services from '../DrawerScreens/Services';

const Drawer = createDrawerNavigator();
  
const CustomDrawer = props => {
  return (
   <View>
    <View>Custom things header</View>
   <DrawerItemList {...props} />
  </View>
 );
};

export default function DrawerNav() {
  return (

 
        <Drawer.Navigator
 
 screenOptions={{
   headerStyle:{
     backgroundColor:'#bb9387',
},
headerTintColor:'#fff',
headerTintStyle:{
  fontWeight:'bold'
}
 }}


 

 drawerContentOptions={{
   inactiveTintColor:'white',
   
 }}
      drawerStyle={{
    backgroundColor: '#0A1433',
borderBottomColor:'red',


    width: 500,
  }}
      
       initialRouteName="SideBarScreen">
        <Drawer.Screen 
        
        options={{
         drawerIcon: config => <Image
            source={require('../white/Calculadora.png')} style={{width:40,height:40}}></Image>
    }}

        name="CalculoDePrestaciones" component={CalculoDePrestaciones} />

        <Drawer.Screen
        
        options={{
        drawerIcon: config => <Image
            source={require('../white/Informaciónlegal.png')} style={{width:40,height:40}}></Image>
    }}

         name="Informaciónlegal" component={Informaciónlegal} />
        <Drawer.Screen
        
        options={{
        drawerIcon: config => <Image
            source={require('../white/Servicioslegales.png')} style={{width:40,height:40}}></Image>
    }}

         name="Servicioslegales" component={Services} />



        <Drawer.Screen 
    options={{
        drawerIcon: config => <Image
            source={require('../white/contactenos.png')} style={{width:40,height:40}}></Image>
    }}

    
        name="Contactenos" component={Contactenos} />

        <Drawer.Screen 
             options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}

        
        name="SideBarScreen" component={SideBarScreen} />

      </Drawer.Navigator>
    );
}




