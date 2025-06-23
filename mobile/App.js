import React from 'react';
import {
  StatusBar,
} from 'react-native';
import AuthProvider from './src/Context/authContexts';
import { NavigationContainer } from '@react-navigation/native';
 
import Rotas from './src/Routes';
 
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle='light-content' translucent={false} />
        <Rotas />
      </AuthProvider>
    </NavigationContainer>
  );
}