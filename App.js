import React from 'react';
import { StatusBar} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      {/* Barra de status no topo do celular  */}
      <StatusBar backgroundColor="#38A69D" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
}


