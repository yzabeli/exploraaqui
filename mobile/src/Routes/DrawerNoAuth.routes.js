import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons'

import Sair from '../components';

//import Produtos from '../Screens/Dashboard';
import Perfil from '../screens/PerfilScreen';
import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNoAuth() {
    return (
        <Drawer.Navigator
            screenOptions={{
                title: '',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#FFA600',
                drawerStyle: {
                    backgroundColor: '#000',
                },
                drawerInactiveTintColor: '#FFA600',
                drawerActiveBackgroundColor: '#FFA600',
                drawerActiveTintColor: '#000',
                headerRight: () => <Sair />,
            }}
        >
            <Drawer.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    drawerLabel: 'Perfil'
                }}
            />
            {/* <Drawer.Screen
               name='Produtos'
               component={Produtos}
               options={{
                   drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                   drawerLabel: 'Home'
               }}
            /> */}
            <Drawer.Screen
                name='Profile'
                component={Perfil}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    drawerLabel: 'Perfil'
                }}
            />
        </Drawer.Navigator>
    );
};