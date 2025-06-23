import React, {useContext} from 'react';
import { AutenticadoContexto } from '../Context/authContexts';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Sair() {
    const { verificarToken, logout } = useContext(AutenticadoContexto);
    verificarToken();

    return (
        <TouchableOpacity onPress={logout} style={{ marginRight: 15 }}>
            <Feather name="log-out" size={24} color="#FFA600" />
        </TouchableOpacity>
    );
};