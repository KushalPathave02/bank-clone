import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const paymentOptions = [
  { icon: 'qr-code-scanner', label: 'Scan & Pay' },
  { icon: 'contacts', label: 'Pay to Contact' },
  { icon: 'account-balance', label: 'Bank Transfer' },
  { icon: 'history', label: 'Transaction History' },
];

export default function YonoPayScreen() {
  const handlePress = (label) => {
    Alert.alert('Action', `You tapped on "${label}"`);
  };

  return (
    <View style={styles.container}>
      {paymentOptions.map((option) => (
        <TouchableOpacity
          key={option.label}
          style={styles.optionButton}
          onPress={() => handlePress(option.label)}
        >
          <Icon name={option.icon} size={28} color="#1f4e79" />
          <Text style={styles.optionText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fb',
    padding: 24,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 5,
    elevation: 2,
  },
  optionText: {
    fontSize: 18,
    color: '#1f4e79',
    marginLeft: 16,
    fontWeight: '500',
  },
});
