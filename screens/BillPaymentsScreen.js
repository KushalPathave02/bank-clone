import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const categories = [
  { id: '1', name: 'Electricity', icon: 'lightbulb' },
  { id: '2', name: 'Mobile Postpaid', icon: 'phone-iphone' },
  { id: '3', name: 'DTH', icon: 'tv' },
  { id: '4', name: 'Credit Card', icon: 'credit-card' },
  { id: '5', name: 'Gas', icon: 'local-fire-department' },
  { id: '6', name: 'Water', icon: 'opacity' },
  { id: '7', name: 'Broadband', icon: 'wifi' },
  { id: '8', name: 'Insurance', icon: 'shield' },
];

export default function BillPaymentsScreen() {
  const handlePress = (categoryName) => {
    Alert.alert('Category Selected', `You selected ${categoryName}`);
  };

  return (
    <FlatList
      data={categories}
      style={styles.container}
      numColumns={3}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.categoryTile} onPress={() => handlePress(item.name)}>
          <Icon name={item.icon} size={32} color="#1f4e79" />
          <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
      )}
      ListHeaderComponent={() => <Text style={styles.title}>Select a Category</Text>}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fb',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f4e79',
    padding: 24,
    textAlign: 'center',
  },
  categoryTile: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 5,
    elevation: 2,
  },
  categoryText: {
    marginTop: 8,
    color: '#333',
    textAlign: 'center',
  },
});
