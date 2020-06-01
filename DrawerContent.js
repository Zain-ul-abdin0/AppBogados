import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { DrawerContentScrollView,DrawerItem ,Drawer } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

export class DrawerContent extends Component {
    render() {
        return (
            <View style={{flex:1}}>
<DrawerContentScrollView>
  
</DrawerContentScrollView>
            </View>
        )
    }
}

export default DrawerContent
