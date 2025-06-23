import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNoAuth from './DrawerNoAuth.routes'

import HomeScreen from '../screens/HomeScreen';
// import CadUserInicio from '../screens/CadastroScreen';
// import LoginUser from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function NoAuth() {
    return (
        <Stack.Navigator
            initialRouteName='DrawerNoAuth'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#FFA600',
            }}
        >
            <Stack.Screen
                name="DrawerNoAuth"
                component={DrawerNoAuth}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={
                    {
                        headerShown: false,
                    }
                }
            />
            {/* <Stack.Screen
                name='CadastroUsuario'
                component={CadUserInicio}
                options={
                    {
                        title: 'Cadastro de Usuário',
                    }
                }
            />
            <Stack.Screen
                name='LoginUsuario'
                component={LoginUser}
                options={
                    {
                        title: 'Login',
                    }
                }
            /> */}
        </Stack.Navigator>
    );
};