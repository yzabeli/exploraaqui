import React, { useState, useContext } from 'react';
import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AutenticadoContexto } from '../Context/authContext';
import styles from '../styles/styles';

export default function LoginScreen({ navigation }) {
  const { loginEntrada } = useContext(AutenticadoContexto)
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  
  async function dadosLogin() {
    if (!email || !senha) {
      console.log("Prencha todos os campos");
      return
    }
    try {
      await AsyncStorage.setItem('@nome', JSON.stringify(nome))
      await loginEntrada(email, senha)
    
    } catch (err) {
      console.log(err);
    }
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#001F3F" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.headerText}>EXPLORA AQUI</Text>
        <Ionicons name="home-outline" size={24} color="white" />
      </View>

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
          Login
        </Text>

        <View style={[styles.card, { gap: 12 }]}>
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#10B981"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="senha"
            placeholderTextColor="#10B981"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        <TouchableOpacity style={[styles.greenButton, { backgroundColor: '#3B82F6', marginTop: 30 }]} onPress={dadosLogin}>
          <Text style={styles.greenButtonText}>entrar</Text>
        </TouchableOpacity>
      </View>
      <View>
                      <TouchableOpacity onPress={() => navigation.navigate('CadastroScreen')}>
                      <Text style={styles.buttonPageRegistrar}>Não tem uma conta ? Clique<Text style={styles.greenButton}> aqui</Text></Text>
                      </TouchableOpacity>
                  </View>
    </SafeAreaView>
  );
}
