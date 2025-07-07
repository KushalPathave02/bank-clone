import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORTANT: Replace with your computer's local IP address
const API_URL = 'http://10.154.162.135:3000/api';

const getIconForAccountType = (type) => {
  switch (type.toLowerCase()) {
    case 'savings account':
      return 'account-balance-wallet';
    case 'fixed deposit':
      return 'lock';
    case 'home loan':
      return 'home';
    case 'mutual funds':
      return 'trending-up';
    default:
      return 'credit-card';
  }
};

const AccountsScreen = () => {
  const [accounts, setAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // --- UI-ONLY MODE: Using mock data instead of fetching ---
    const mockAccounts = [
      { _id: '1', type: 'Savings Account', balance: '₹ 1,23,456.78' },
      { _id: '2', type: 'Fixed Deposit', balance: '₹ 5,00,000.00' },
      { _id: '3', type: 'Home Loan', balance: '₹ 25,00,000.00' },
      { _id: '4', type: 'Mutual Funds', balance: '₹ 75,000.00' },
    ];

    setTimeout(() => {
      setAccounts(mockAccounts);
      setIsLoading(false);
    }, 1000); // Simulate network delay
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.accountItem}>
      <Icon name={getIconForAccountType(item.type)} size={30} color="#004494" style={styles.icon} />
      <View style={styles.accountDetails}>
        <Text style={styles.accountType}>{item.type}</Text>
        <Text style={styles.accountBalance}>{item.balance}</Text>
      </View>
      <Icon name="chevron-right" size={24} color="#ccc" />
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#004494" />
        <Text>Loading Accounts...</Text>
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
      {/* <Text style={styles.header}>My Accounts</Text> */}
      <FlatList
        data={accounts}
        renderItem={renderItem}
        keyExtractor={(item) => item._id} // Use _id from MongoDB
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
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  accountItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },
  icon: {
    marginRight: 15,
  },
  accountDetails: {
    flex: 1,
  },
  accountType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  accountBalance: {
    fontSize: 18,
    color: '#004494',
    marginTop: 5,
  },
});

export default AccountsScreen;
