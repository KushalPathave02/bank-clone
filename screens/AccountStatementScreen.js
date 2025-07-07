import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORTANT: Replace with your computer's local IP address
const API_URL = 'http://10.154.162.135:3000/api';

const AccountStatementScreen = () => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // --- UI-ONLY MODE: Using mock data instead of fetching ---
    const mockTransactions = [
      { _id: '1', type: 'debit', description: 'Online Shopping', date: new Date(), amount: 2500.00 },
      { _id: '2', type: 'credit', description: 'Salary Deposit', date: new Date(), amount: 50000.00 },
      { _id: '3', type: 'debit', description: 'Coffee Shop', date: new Date(), amount: 350.50 },
      { _id: '4', type: 'debit', description: 'Electricity Bill', date: new Date(), amount: 1200.00 },
    ];

    setTimeout(() => {
      setTransactions(mockTransactions);
      setIsLoading(false);
    }, 1500); // Simulate network delay
  }, []);

  const renderTransaction = ({ item }) => (
    <View style={styles.transactionItem}>
      <Icon
        name={item.type === 'credit' ? 'arrow-downward' : 'arrow-upward'}
        size={24}
        color={item.type === 'credit' ? '#0a7e07' : '#d9534f'}
      />
      <View style={styles.transactionDetails}>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>{new Date(item.date).toLocaleDateString()}</Text>
      </View>
      <Text style={[styles.amount, { color: item.type === 'credit' ? '#0a7e07' : '#d9534f' }]}>
        {`₹ ${item.amount.toFixed(2)}`}
      </Text>
    </View>
  );

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#004494" />
        <Text>Loading Transactions...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centerContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.filterText}>Showing recent transactions</Text>
        <TouchableOpacity>
          <Icon name="filter-list" size={24} color="#1f4e79" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactions}
        renderItem={renderTransaction}
        keyExtractor={(item) => item._id} // Use _id from MongoDB
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  filterText: {
    fontSize: 16,
    color: '#333',
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 16,
  },
  description: {
    fontSize: 16,
    fontWeight: '500',
  },
  date: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccountStatementScreen;
