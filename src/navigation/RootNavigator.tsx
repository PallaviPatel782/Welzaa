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
  ReferAFriendScreen,
  PersonalInformationScreen,
  MoodHistoryScreen,
  JournalEntriesScreen,
  NewJournalEntryScreen,
  JournalDetailScreen,
  EditJournalEntryScreen,
  WellnessArticleDetailScreen,
  SendFeedbackScreen,
  FaqScreen,
  AboutUsScreen,
  PrivacyPolicyScreen,
  TermsConditionsScreen,
  SessionDetailsScreen,
  JoinSessionScreen,
  VideoCallScreen,
  RescheduleSessionScreen,
  CancelSessionScreen,
  RefundPolicyScreen,
  SessionChatScreen,
  BookSessionMarketplaceScreen,
  BookSessionWelzaaInstantScreen,
  SelectTimeSlotScreen,
  ApplyCouponScreen,
  PaymentOptionsScreen,
  SessionBookedScreen,
  GetToKnowYouScreen,
  FindingExpertScreen,
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
        <Stack.Screen name="ReferAFriend" component={ReferAFriendScreen} />
        <Stack.Screen name="PersonalInformation" component={PersonalInformationScreen} />
        <Stack.Screen name="MoodHistory" component={MoodHistoryScreen} />
        <Stack.Screen name="JournalEntries" component={JournalEntriesScreen} />
        <Stack.Screen name="NewJournalEntry" component={NewJournalEntryScreen} />
        <Stack.Screen name="JournalDetail" component={JournalDetailScreen} />
        <Stack.Screen name="EditJournalEntry" component={EditJournalEntryScreen} />
        <Stack.Screen name="WellnessArticleDetail" component={WellnessArticleDetailScreen} />
        <Stack.Screen name="SendFeedback" component={SendFeedbackScreen} />
        <Stack.Screen name="Faq" component={FaqScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="TermsConditions" component={TermsConditionsScreen} />
        <Stack.Screen name="SessionDetails" component={SessionDetailsScreen} />
        <Stack.Screen name="JoinSession" component={JoinSessionScreen} />
        <Stack.Screen name="VideoCall" component={VideoCallScreen} />
        <Stack.Screen name="RescheduleSession" component={RescheduleSessionScreen} />
        <Stack.Screen name="CancelSession" component={CancelSessionScreen} />
        <Stack.Screen name="RefundPolicy" component={RefundPolicyScreen} />
        <Stack.Screen name="SessionChat" component={SessionChatScreen} />
        <Stack.Screen name="BookSessionMarketplace" component={BookSessionMarketplaceScreen} />
        <Stack.Screen name="BookSessionWelzaaInstant" component={BookSessionWelzaaInstantScreen} />
        <Stack.Screen name="SelectTimeSlot" component={SelectTimeSlotScreen} />
        <Stack.Screen name="ApplyCoupon" component={ApplyCouponScreen} />
        <Stack.Screen name="PaymentOptions" component={PaymentOptionsScreen} />
        <Stack.Screen name="SessionBooked" component={SessionBookedScreen} />
        <Stack.Screen name="GetToKnowYou" component={GetToKnowYouScreen} />
        <Stack.Screen name="FindingExpert" component={FindingExpertScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

