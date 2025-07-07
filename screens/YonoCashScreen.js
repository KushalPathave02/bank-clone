import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function YonoCashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Withdraw Cash without a Card</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Amount</Text>
        <TextInput
          style={styles.input}
          placeholder="₹ 0.00"
          keyboardType="numeric"
        />
        <Text style={styles.limitText}>Daily limit: ₹ 20,000</Text>
      </View>

      <TouchableOpacity style={styles.generateButton}>
        <Text style={styles.generateButtonText}>Generate YONO Cash PIN</Text>
      </TouchableOpacity>

      <Text style={styles.infoText}>
        A temporary PIN will be generated for you to withdraw cash from any SBI ATM.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fb',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f4e79',
    textAlign: 'center',
    marginBottom: 32,
  },
  inputContainer: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    color: '#1f4e79',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  limitText: {
    textAlign: 'right',
    color: '#555',
    marginTop: 4,
  },
  generateButton: {
    backgroundColor: '#1f4e79',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
  },
  generateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoText: {
    textAlign: 'center',
    color: '#555',
    marginTop: 24,
    fontSize: 14,
    lineHeight: 20,
  },
});
