import React from 'react';
import { View, Text, SafeAreaView, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import styles from '../styles/homestyles.js';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#001F3F" barStyle="light-content" />


      <ScrollView contentContainerStyle={{ padding: 20 }}>
        {/* Botões */}
        <View style={styles.cardContainerColumn}>
          <TouchableOpacity style={styles.cardRow}>
            <Ionicons name="search" size={20} color="white" style={{ marginRight: 10 }} />
            <Text style={styles.cardText}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardRow}>
            <MaterialIcons name="event-note" size={20} color="white" style={{ marginRight: 10 }} />
            <Text style={styles.cardText}>Excursões</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardRow}>
            <FontAwesome name="users" size={20} color="white" style={{ marginRight: 10 }} />
            <Text style={styles.cardText}>Grupos</Text>
          </TouchableOpacity>
        </View>

        {/* Carrossel */}
        <View style={styles.carousel}>
          <Text style={styles.carouselText}>carrossel</Text>
          <Text style={styles.carouselText}>imagens</Text>
        </View>

        {/* Ver mais excursões */}
        <TouchableOpacity>
          <Text style={styles.linkText}>ver mais excursões</Text>
        </TouchableOpacity>

        {/* CTA */}
        <View style={styles.ctaBox}>
          <Text style={styles.ctaText}>Encontre os melhores preços</Text>
          <TouchableOpacity style={styles.greenButton}>
            <Text style={styles.greenButtonText}>criar conta</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Menu inferior */}
      <View style={styles.bottomMenu}>
        <Ionicons name="person-outline" size={24} color="#001F3F" />
        <Ionicons name="airplane-outline" size={24} color="#001F3F" />
      </View>
    </SafeAreaView>
  );
}
