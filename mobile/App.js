import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AuthProvider from './src/Context/authContext';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import PerfilScreen from './src/screens/PerfilScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
       <AuthProvider>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Explora Aqui" component={HomeScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Cadastro" component={CadastroScreen} />
        <Drawer.Screen name="Perfil" component={PerfilScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </AuthProvider>
  );
}
