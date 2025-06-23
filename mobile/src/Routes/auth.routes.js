import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Sair from '../components';
import DrawerAuth from './DrawerAuth.routes'

import Perfil from '../screens/PerfilScreen'


const Stack = createNativeStackNavigator();

export default function Auth() {
    return (
        <Stack.Navigator
            screenOptions={{
                title: '',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#FFA600',
                headerRight: () => <Sair />,
            }}
        >
            <Stack.Screen
                name="DrawerAuth"
                component={DrawerAuth}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Perfil'
                component={Perfil}
            />
           
        </Stack.Navigator>
    );
};