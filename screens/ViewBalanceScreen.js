import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ViewBalanceScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon name="account-balance-wallet" size={80} color="#1f4e79" />
      <Text style={styles.title}>Your Balance</Text>
      <Text style={styles.balance}>₹ 1,23,456.78</Text>
      <Text style={styles.subtitle}>(Savings Account)</Text>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.goBack()}>
        <Text style={styles.loginButtonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fb',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f4e79',
    marginTop: 24,
  },
  balance: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#0a7e07',
    marginVertical: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 48,
  },
  loginButton: {
    backgroundColor: '#1f4e79',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
