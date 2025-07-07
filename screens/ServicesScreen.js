import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const servicesData = [
  { id: '1', title: 'Cheque Book', icon: 'book' },
  { id: '2', title: 'Debit Card', icon: 'credit-card' },
  { id: '3', title: 'Update KYC', icon: 'person-search' },
  { id: '4', title: 'Pension Slip', icon: 'receipt' },
  { id: '5', title: 'Stop Payment', icon: 'block' },
  { id: '6', title: 'Customer Care', icon: 'headset-mic' },
  { id: '7', title: 'Service Requests', icon: 'build' },
  { id: '8', title: 'Download Forms', icon: 'cloud-download' },
];

const ServicesScreen = () => {
  const handlePress = (title) => {
    Alert.alert('Service Request', `You tapped on "${title}"`);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.serviceItem} onPress={() => handlePress(item.title)}>
      <Icon name={item.icon} size={30} color="#004494" />
      <Text style={styles.serviceTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      <FlatList
        data={servicesData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#004494',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  listContainer: {
    padding: 10,
  },
  serviceItem: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    aspectRatio: 1, // Makes the items square
  },
  serviceTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default ServicesScreen;
