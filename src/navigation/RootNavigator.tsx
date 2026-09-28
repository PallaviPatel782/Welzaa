import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './types';
import { AuthNavigator } from './AuthNavigator';
import { MainTabNavigator } from './MainTabNavigator';
import {
  SosScreen,
  NotificationScreen,
  ExpertDetailScreen,
  WalletScreen,
  AddMoneyScreen,
  TransactionDetailsScreen,
} from '../screens/main';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Auth"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Auth" component={AuthNavigator} />
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="Sos">
          {({ navigation }) => <SosScreen onBack={() => navigation.goBack()} />}
        </Stack.Screen>
        <Stack.Screen name="Notification">
          {({ navigation }) => <NotificationScreen onBack={() => navigation.goBack()} />}
        </Stack.Screen>
        <Stack.Screen name="ExpertDetail" component={ExpertDetailScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
        <Stack.Screen name="AddMoney" component={AddMoneyScreen} />
        <Stack.Screen name="TransactionDetails" component={TransactionDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
