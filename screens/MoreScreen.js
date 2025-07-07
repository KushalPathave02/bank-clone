import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MoreScreen = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ],
      { cancelable: false }
    );
  };

  const menuItems = [
    { id: '1', title: 'App Settings', icon: 'settings', action: () => Alert.alert('Navigate', 'To App Settings') },
    { id: '2', title: 'Profile', icon: 'person', action: () => Alert.alert('Navigate', 'To Profile') },
    { id: '3', title: 'Contact Us', icon: 'phone', action: () => Alert.alert('Navigate', 'To Contact Us') },
    { id: '4', title: 'FAQs', icon: 'help-outline', action: () => Alert.alert('Navigate', 'To FAQs') },
    { id: '5', title: 'Logout', icon: 'exit-to-app', action: handleLogout },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.menuItem} onPress={item.action}>
      <Icon name={item.icon} size={24} color="#004494" style={styles.icon} />
      <Text style={styles.menuItemText}>{item.title}</Text>
      <Icon name="chevron-right" size={24} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
       {/* <Text style={styles.header}>More Options</Text> */}
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
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
     paddingTop: 10,
  },
  menuItem: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  icon: {
    marginRight: 20,
  },
  menuItemText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});

export default MoreScreen;
