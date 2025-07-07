import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const payees = [
  { id: '1', name: 'John Doe', account: '...1234' },
  { id: '2', name: 'Jane Smith', account: '...5678' },
  { id: '3', name: 'Mom', account: '...9012' },
];

export default function FundTransferScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Icon name="person-add" size={24} color="#1f4e79" />
          <Text style={styles.optionText}>Add Beneficiary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Icon name="send" size={24} color="#1f4e79" />
          <Text style={styles.optionText}>IMPS / NEFT</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.listTitle}>Recent Payees</Text>
      <FlatList
        data={payees}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.payeeItem}>
            <View style={styles.payeeAvatar}>
              <Text style={styles.payeeAvatarText}>{item.name.charAt(0)}</Text>
            </View>
            <View>
              <Text style={styles.payeeName}>{item.name}</Text>
              <Text style={styles.payeeAccount}>{item.account}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fb',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#fff',
  },
  optionButton: {
    alignItems: 'center',
  },
  optionText: {
    marginTop: 4,
    color: '#1f4e79',
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f4e79',
    padding: 16,
  },
  payeeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  payeeAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#dbe9f6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  payeeAvatarText: {
    fontSize: 20,
    color: '#1f4e79',
    fontWeight: 'bold',
  },
  payeeName: {
    fontSize: 16,
    fontWeight: '500',
  },
  payeeAccount: {
    color: '#777',
  },
});
