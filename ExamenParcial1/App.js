import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

export default function NFLGamePassForm() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  });

  const [formData, setFormData] = useState({
    id: '',
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro de Usuario - NFL Game Pass</Text>

      <Image 
        source={{ uri: 'https://static.poder360.com.br/2024/08/NFL-Logo-848x477.jpg' }} 
        style={styles.image}
      />

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="ID"
          value={formData.id}
          onChangeText={(text) => handleChange('id', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={formData.name}
          onChangeText={(text) => handleChange('name', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={formData.email}
          keyboardType="email-address"
          onChangeText={(text) => handleChange('email', text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={formData.phone}
          keyboardType="phone-pad"
          onChangeText={(text) => handleChange('phone', text)}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.outputContainer}>
        <Text style={styles.outputTitle}>Datos Registrados:</Text>
        <Text>ID: {formData.id}</Text>
        <Text>Nombre: {formData.name}</Text>
        <Text>Email: {formData.email}</Text>
        <Text>Teléfono: {formData.phone}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#1E3A8A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'Montserrat_700Bold',
  },
  image: {
    width: 200,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 20,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    width: '90%',
    padding: 12,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 8,
    backgroundColor: '#F9FAFB',
    alignSelf: 'center',
    fontFamily: 'Montserrat_400Regular',
  },
  button: {
    backgroundColor: '#8B0000',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
    width: '40%',
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
  },
  outputContainer: {
    marginTop: 25,
    backgroundColor: '#F3F4F6',
    padding: 20,
    borderRadius: 10,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  outputTitle: {
    fontWeight: '700',
    marginBottom: 10,
    fontSize: 18,
    color: '#333333',
    fontFamily: 'Montserrat_700Bold',
  },
});
