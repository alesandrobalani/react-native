import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Simples from './Components/Simples'
import Parimpar from './Components/Parimpar'
import { Inverter, MegaSena } from './Components/Multi'
import Contador from './Components/Contador'
import Plataform from './Components/Plataform'
import ValidarProps from './Components/ValidarProps'
import Evento from './Components/Evento'

function MegaSenaScreen() {
  return <MegaSena numeros={6} />
}

function InverterScreen() {
  return <Inverter texto='capitao america' />
} 

function ParimparScreen() {
  return [<Parimpar key='1' numero='33' />, <Parimpar key='2' numero='30' />]
}

function SimplesScreen() {
  return <Simples texto='flexível' />  
}

function ContadorScreen() {
  return <Contador numero={10} />
}

function PlataformScreen() {
  return <Plataform />
}

function ValidarPropsScreen() {
return [
        <ValidarProps key='1' label="Teste: " ano={ 18 } />,
        <ValidarProps key='2' ano={ 18 } />,
        // <ValidarProps key='3' ano="a" />
      ]
}

function EventoScreen() {
  return <Evento />
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Evento" component={ EventoScreen } />
        <Drawer.Screen name="ValidarProps" component={ ValidarPropsScreen } />
        <Drawer.Screen name="Plataforma" component={ PlataformScreen } />
        <Drawer.Screen name="Contador" component={ ContadorScreen} />
        <Drawer.Screen name="MegaSena" component={ MegaSenaScreen } />
        <Drawer.Screen name="Inverter" component={ InverterScreen } />
        <Drawer.Screen name="Parimpar" component={ ParimparScreen } />
        <Drawer.Screen name="Simples" component={ SimplesScreen } />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
