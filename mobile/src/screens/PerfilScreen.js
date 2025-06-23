import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from '../styles/styles';

export default function PerfilScreen() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    cep: '',
    numero: '',
    endereco: ''
  });

  useEffect(() => {
    const carregarDados = async () => {
      const usuario = await AsyncStorage.getItem('usuario');
      if (usuario) {
        setDados(JSON.parse(usuario));
      }
    };
    carregarDados();
  }, []);

  const salvarAlteracoes = async () => {
    await AsyncStorage.setItem('usuario', JSON.stringify(dados));
    alert('Dados atualizados!');
  };

  const limparCadastro = async () => {
    await AsyncStorage.removeItem('usuario');
    setDados({
      nome: '',
      email: '',
      senha: '',
      cpf: '',
      cep: '',
      numero: '',
      endereco: ''
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#001F3F" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Meu Perfil</Text>
      </View>

      <ScrollView contentContainerStyle={{ padding: 20 }}>

        {/* Foto e nome */}
        <View style={{ alignItems: 'center', marginBottom: 30 }}>
          <Image
            source={require('../../src/assets/Mídia.jpg')}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: '#ccc',
              marginBottom: 12
            }}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {dados.nome || 'Nome do Usuário'}
          </Text>
        </View>

        {/* Campos editáveis */}
        <View style={styles.profileInfo}>
          <Text style={styles.infoLabel}>Nome</Text>
          <TextInput
            style={styles.input}
            value={dados.nome}
            onChangeText={(text) => setDados({ ...dados, nome: text })}
            placeholder="Digite seu nome"
          />

          <Text style={styles.infoLabel}>Email</Text>
          <TextInput
            style={styles.input}
            value={dados.email}
            onChangeText={(text) => setDados({ ...dados, email: text })}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />

          <Text style={styles.infoLabel}>Senha</Text>
          <TextInput
            style={styles.input}
            value={dados.senha}
            onChangeText={(text) => setDados({ ...dados, senha: text })}
            placeholder="Digite sua senha"
            secureTextEntry
          />

          <Text style={styles.infoLabel}>CPF</Text>
          <TextInput
            style={styles.input}
            value={dados.cpf}
            onChangeText={(text) => setDados({ ...dados, cpf: text })}
            placeholder="Digite seu CPF"
          />

          <Text style={styles.infoLabel}>CEP</Text>
          <TextInput
            style={styles.input}
            value={dados.cep}
            onChangeText={(text) => setDados({ ...dados, cep: text })}
            placeholder="Digite seu CEP"
          />

          <Text style={styles.infoLabel}>Número</Text>
          <TextInput
            style={styles.input}
            value={dados.numero}
            onChangeText={(text) => setDados({ ...dados, numero: text })}
            placeholder="Número"
          />

          <Text style={styles.infoLabel}>Endereço</Text>
          <TextInput
            style={styles.input}
            value={dados.endereco}
            onChangeText={(text) => setDados({ ...dados, endereco: text })}
            placeholder="Digite seu endereço"
          />

          <TouchableOpacity style={styles.greenButton} onPress={salvarAlteracoes}>
            <Text style={styles.greenButtonText}>Salvar Alterações</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.greenButton, { backgroundColor: '#F87171' }]}
            onPress={limparCadastro}
          >
            <Text style={styles.greenButtonText}>Limpar Cadastro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
