import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Registrate from './screens/Registrate';
import DrawerNav from './Drawernavigation/Drawer';
import CalculoDePrestaciones from './DrawerScreens/CalculoDePrestaciones';
import MyTabs from './Top';
import Drawer from './Drawernavigation/Drawer'
import NavigationStart from './Navigation';
import SideBarScreen from './screens/SideBarScreen';
import Services from './DrawerScreens/Services';
export default function App() {
  return (
    <View style={styles.container}>
<NavigationStart/>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1534', 
  },
});
