import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORTANT: Replace with your computer's local IP address
// Use 10.0.2.2 for Android emulator to connect to localhost of the host machine
const API_URL = 'http://10.0.2.2:3000/api';

function LoginScreen({ navigation }) {
  const [mpin, setMpin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (mpin.length !== 6) {
      Alert.alert('Error', 'Please enter a valid 6-digit MPIN.');
      return;
    }

    setIsLoading(true);

    // --- UI-ONLY MODE: Bypassing backend login ---
    setIsLoading(true);
    // Simulate a network delay
    setTimeout(() => {
      // Navigate directly to the main screen
      navigation.replace('Main');
      setIsLoading(false);
    }, 1000); // 1-second delay
  };

  return (
    <View style={styles.container}>
      {/* Header - SBI Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/SBI-logo-blue.svg' }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* MPIN Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter 6-digit MPIN</Text>
        <TextInput
          style={styles.input}
          value={mpin}
          onChangeText={setMpin}
          keyboardType="numeric"
          maxLength={6}
          secureTextEntry
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.loginButtonText}>Login</Text>
        )}
      </TouchableOpacity>

      {/* Forgot MPIN and Internet Banking ID */}
      <View style={styles.linkRow}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotMpin')}>
          <Text style={styles.link}>Forgot MPIN?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('InternetBankingLogin')}>
          <Text style={styles.link}>Login with Internet Banking ID</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Options */}
      <View style={styles.additionalOptions}>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>New User? Register Here</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logoContainer: {
    marginBottom: 32,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 60,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#1f4e79',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#1f4e79',
    borderRadius: 8,
    padding: 12,
    fontSize: 18,
    backgroundColor: '#f2f7fb',
    letterSpacing: 12,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#1f4e79',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    width: '100%',
    marginTop: 12,
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 24,
    marginTop: 10,
  },
  link: {
    color: '#1f4e79',
    fontSize: 14,
    textDecorationLine: 'underline',
    marginHorizontal: 8,
  },
  additionalOptions: {
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
  },
  registerLink: {
    color: '#0a7e07',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
  },
  balanceLink: {
    color: '#e67300',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default LoginScreen;