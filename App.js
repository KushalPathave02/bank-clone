import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '@screens/LoginScreen.js';

import HomeScreen from '@screens/HomeScreen';
import AccountsScreen from '@screens/AccountsScreen';
import ServicesScreen from '@screens/ServicesScreen';
import MoreScreen from '@screens/MoreScreen';
import RegisterScreen from '@screens/RegisterScreen';
import ForgotMpinScreen from '@screens/ForgotMpinScreen';
import InternetBankingLoginScreen from '@screens/InternetBankingLoginScreen';
import ViewBalanceScreen from '@screens/ViewBalanceScreen';
import YonoPayScreen from '@screens/YonoPayScreen';
import YonoCashScreen from '@screens/YonoCashScreen';
import AccountStatementScreen from '@screens/AccountStatementScreen';
import FundTransferScreen from '@screens/FundTransferScreen';
import BillPaymentsScreen from '@screens/BillPaymentsScreen';
import RechargeScreen from '@screens/RechargeScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Accounts') iconName = 'account-balance-wallet';
          else if (route.name === 'Services') iconName = 'miscellaneous-services';
          else if (route.name === 'More') iconName = 'more-horiz';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1f4e79',
        tabBarInactiveTintColor: 'gray',
        headerShown: true, // Show headers for all tabs by default
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: '', // Remove the title
          headerLeft: () => (
            <Image
              source={require('./download-removebg-preview.png')}
              style={{ width: 120, height: 45, marginLeft: 15, resizeMode: 'contain' }}
            />
          ),
          headerStyle: {
            backgroundColor: '#f5f5f5',
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
      <Tab.Screen 
        name="Accounts" 
        component={AccountsScreen} 
        options={{
          headerTitle:'My Accounts',
          headerStyle: {
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#004494',
          }
        }}
      />
      <Tab.Screen 
        name="Services" 
        component={ServicesScreen} 
        options={{
          headerTitle:'Services',
          headerStyle: {
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#004494',
          }
        }}
      />
      <Tab.Screen 
        name="More" 
        component={MoreScreen} 
        options={{
          headerTitle:'More Options',
          headerStyle: {
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            borderBottomColor: '#eee',
          },
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: '#004494',
          }
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Register' }} />
        <Stack.Screen name="ForgotMpin" component={ForgotMpinScreen} options={{ title: 'Forgot MPIN' }} />
        <Stack.Screen name="InternetBankingLogin" component={InternetBankingLoginScreen} options={{ title: 'Internet Banking Login' }} />
        <Stack.Screen name="ViewBalance" component={ViewBalanceScreen} options={{ title: 'View Balance' }} />
        <Stack.Screen name="YonoPay" component={YonoPayScreen} options={{ title: 'YONO Pay' }} />
        <Stack.Screen name="YonoCash" component={YonoCashScreen} options={{ title: 'YONO Cash' }} />
        <Stack.Screen name="AccountStatement" component={AccountStatementScreen} options={{ title: 'Account Statement' }} />
        <Stack.Screen name="FundTransfer" component={FundTransferScreen} options={{ title: 'Fund Transfer' }} />
        <Stack.Screen name="BillPayments" component={BillPaymentsScreen} options={{ title: 'Bill Payments' }} />
        <Stack.Screen name="Recharge" component={RechargeScreen} options={{ title: 'Recharge' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
