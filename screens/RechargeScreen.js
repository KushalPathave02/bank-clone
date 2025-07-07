import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function RechargeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile Recharge</Text>

      <Text style={styles.label}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter 10-digit mobile number"
        keyboardType="phone-pad"
        maxLength={10}
      />

      <Text style={styles.label}>Operator</Text>
      <TextInput style={styles.input} placeholder="Select Operator" />

      <Text style={styles.label}>Amount</Text>
      <TextInput style={styles.input} placeholder="Enter amount" keyboardType="numeric" />

      <TouchableOpacity style={styles.rechargeButton}>
        <Text style={styles.rechargeButtonText}>Proceed to Recharge</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fb',
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f4e79',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: '#1f4e79',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  rechargeButton: {
    backgroundColor: '#1f4e79',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 32,
  },
  rechargeButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
