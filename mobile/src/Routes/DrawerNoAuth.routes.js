import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'

import Sair from '../components';

//import Produtos from '../Screens/Dashboard';
import Perfil from '../screens/PerfilScreen';
import HomeScreen from '../screens/HomeScreen';
import CadastroHome from '../screens/CadastroScreen'
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNoAuth() {
    return (
        <Drawer.Navigator
            screenOptions={{
                title: 'Explora Aqui',
                headerStyle: {
                    backgroundColor: '#001F3F',
                },
                headerTintColor: 'white',
                drawerStyle: {
                    backgroundColor: '#334155',
                },
                drawerInactiveTintColor: 'white',
                drawerActiveBackgroundColor: 'white',

                drawerActiveTintColor: '#000',
                headerRight: () => <Sair />,
            }}
        >
            <Drawer.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="map" color={color} size={size} />,
                    drawerLabel: 'Home'
                }}
            />
            <Drawer.Screen
                name='Cadastro'
                component={CadastroHome}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    drawerLabel: 'Cadastro'
                }}
            />
           
            <Drawer.Screen
                name='Profile'
                component={Perfil}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="smile" color={color} size={size} />,
                    drawerLabel: 'Perfil'
                }}
            />
            <Drawer.Screen
                name='login'
                component={LoginScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="log-in" color={color} size={size} />,
                    drawerLabel: 'Faça login'
                }}
            />
        </Drawer.Navigator>
    );
};