import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import LiquidacionTop from './TopBar/LiquidacionTop'
import DecimoTop from './TopBar/DecimoTop'
import VacacionesTop from './TopBar/VacacionesTop'

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <View style={{flex:1}}>
      <Tab.Navigator
     
      tabBarOptions={ {
        activeTintColor:'#435CAF',
        labelStyle: { fontSize: 12,fontWeight:'bold' },

        inactiveTintColor:'#D3D3D3',
        style:{
            backgroundColor:'#0B1534',
            borderTopColor:'#D3D3D3'
        },
        indicatorStyle: {
        },
    }}

      
      >
            <Tab.Screen name="Vacaciones" component={VacacionesTop} />

      <Tab.Screen name="Décimo" component={DecimoTop} />
      
      <Tab.Screen name="Liquidacion" component={LiquidacionTop} />

      </Tab.Navigator>
  
     </View>
  );
} 