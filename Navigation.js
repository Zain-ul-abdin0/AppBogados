// In App.js in a new project

import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Registrate from "./screens/Registrate";
import Drawer from "./Drawernavigation/Drawer";
import CalculoDePrestaciones from "./DrawerScreens/CalculoDePrestaciones";
import Contactenos from "./DrawerScreens/Contactenos";
import Informaciónlegal from "./DrawerScreens/Informaciónlegal";
import Servicioslegales from "./DrawerScreens/Servicioslegales";
import SideBarScreen from "./screens/SideBarScreen";




function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function NavigationStart() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false, // change this to `false`
          }}
        />

        <Stack.Screen
          name="Drawer"
          component={Drawer}
          options={{
            headerShown: false, // change this to `false`
          }}
        />
        <Stack.Screen
          options={{
            title: "Registrate",
            headerStyle: {
              backgroundColor: "#0B1534",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          name="Registrate"
          component={Registrate}
        />

<Stack.Screen
             options={{
            headerShown: false, // change this to `false`
          }}
          name="CalculoDePrestaciones"
          component={CalculoDePrestaciones}
        />

<Stack.Screen
              options={{
            headerShown: false, // change this to `false`
          }}
          name="Contactenos"
          component={Contactenos}
        />
<Stack.Screen
             options={{
            headerShown: false, // change this to `false`
          }}
          name="Informaciónlegal"
          component={Informaciónlegal}
        />

<Stack.Screen
              options={{
            headerShown: false, // change this to `false`
          }}
          name="Servicioslegales"
          component={Servicioslegales}
        />

<Stack.Screen
              options={{
            headerShown: false, // change this to `false`
          }}
          name="SideBarScreen"
          component={SideBarScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStart;
