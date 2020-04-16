import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Simples from './Components/Simples'
import Parimpar from './Components/Parimpar'
import { Inverter, MegaSena } from './Components/Multi'

function MegaSenaScreen() {
  return <MegaSena numeros={6} />
}

function InverterScreen() {
  return <Inverter texto='Alesandro' />
}

function ParimparScreen() {
  return [<Parimpar key='1' numero='33' />, <Parimpar key='2' numero='30' />]
}

function SimplesScreen() {
  return <Simples texto='flexível' />  
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="MegaSena" component={ MegaSenaScreen } />
        <Drawer.Screen name="Inverter" component={ InverterScreen } />
        <Drawer.Screen name="Parimpar" component={ ParimparScreen } />
        <Drawer.Screen name="Simples" component={ SimplesScreen } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
