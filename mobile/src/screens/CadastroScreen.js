import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import apiLocal from '../api/apiLocal';
import styles from '../styles/styles';

export default function CadastroScreen({}) {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')

  async function cadastrarUsuario() {
    try {
      if (!nome || !telefone || !email || !cpf || !senha) {
        console.log("Campos em Branco");
        return
      }
      await apiLocal.post('/CadastroUsuarios', {
        nome,
        cpf,
        telefone,
        email,
        senha
      })
      console.log('Cadastro Efetuado com suceso');
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#001F3F" barStyle="light-content" />


      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>
          Faça Cadastro
        </Text>

        <View style={[styles.card, { gap: 12 }]}>
          <TextInput style={styles.input} placeholder="Digite o nome" placeholderTextColor="#10B981" value={nome} onChangeText={setNome} />
          <TextInput style={styles.input} placeholder="Digite o email" placeholderTextColor="#10B981" value={email} onChangeText={setEmail} />
          <TextInput style={styles.input} placeholder="Digite o telefone" placeholderTextColor="#10B981" value={telefone} onChangeText={setTelefone} />
          <TextInput style={styles.input} placeholder="Digite a senha" placeholderTextColor="#10B981" secureTextEntry value={senha} onChangeText={setSenha} />
          <TextInput style={styles.input} placeholder="Digite o cpf" placeholderTextColor="#10B981" value={cpf} onChangeText={setCpf} />
        </View>

        <TouchableOpacity style={[styles.greenButton, { backgroundColor: '#3B82F6', marginTop: 30 }]} onPress={cadastrarUsuario}>
          <Text style={styles.greenButtonText}>criar conta</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
