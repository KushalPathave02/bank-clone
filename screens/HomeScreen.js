import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const quickActions = [
  { label: 'YONO Pay', icon: 'payments', screen: 'YonoPay' },
  { label: 'YONO Cash', icon: 'atm', screen: 'YonoCash' },
  { label: 'Account Statement', icon: 'description', screen: 'AccountStatement' },
  { label: 'Fund Transfer', icon: 'swap-horiz', screen: 'FundTransfer' },
  { label: 'Bill Payments', icon: 'receipt', screen: 'BillPayments' },
  { label: 'Recharge', icon: 'phone-android', screen: 'Recharge' },
];

const offers = [
  { id: '1', title: '20% off on Shopping!', image: 'https://img.freepik.com/free-vector/flat-sale-background_23-2147978843.jpg' },
  { id: '2', title: 'Travel Offers', image: 'https://img.freepik.com/free-vector/flat-travel-background_23-2148054526.jpg' },
  { id: '3', title: 'Dining Discounts', image: 'https://img.freepik.com/free-vector/restaurant-offer-template_23-2148054521.jpg' },
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Section: Profile & Balance */}
      <View style={styles.topSection}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }}
          style={styles.profilePic}
        />
        <View style={{ marginLeft: 12 }}>
          <Text style={styles.userName}>Welcome, Rahul!</Text>
          <Text style={styles.balanceLabel}>Account Balance</Text>
          <Text style={styles.balanceAmount}>₹ 1,23,456.78</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        {quickActions.map((item, idx) => (
                    <TouchableOpacity
            key={item.label}
            style={styles.actionTile}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Icon name={item.icon} size={28} color="#1f4e79" />
            <Text style={styles.actionLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Offers/Promotions Carousel */}
      <View style={styles.offersSection}>
        <Text style={styles.offersTitle}>Offers & Promotions</Text>
        <FlatList
          data={offers}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.offerCard}>
              <Image source={{ uri: item.image }} style={styles.offerImage} />
              <Text style={styles.offerText}>{item.title}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f7fb',
    paddingTop: 48,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1f4e79',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f4e79',
  },
  balanceLabel: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  balanceAmount: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0a7e07',
    marginTop: 2,
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginHorizontal: 8,
    marginBottom: 24,
  },
  actionTile: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 90,
    margin: 6,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
  },
  actionLabel: {
    fontSize: 13,
    color: '#1f4e79',
    marginTop: 6,
    textAlign: 'center',
  },
  offersSection: {
    marginTop: 8,
    paddingLeft: 18,
  },
  offersTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1f4e79',
    marginBottom: 8,
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 14,
    width: 180,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
  },
  offerImage: {
    width: 160,
    height: 70,
    borderRadius: 6,
    marginBottom: 8,
  },
  offerText: {
    fontSize: 13,
    color: '#1f4e79',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;

