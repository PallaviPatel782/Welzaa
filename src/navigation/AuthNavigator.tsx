import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from './types';
import {
  SplashScreen,
  WelcomeScreen,
  SignupScreen,
  LoginScreen,
  OtpScreen,
  ParentConsentScreen,
  LocationAccessScreen,
  ProfileSetupScreen,
  YourConcernsScreen,
} from '../screens/auth';
import { ConsentVerifiedModal } from '../components/common';
import { LocationData } from '../utils/locationHelper';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator: React.FC = () => {
  const rootNav = useNavigation<any>();
  const [mobileNumber, setMobileNumber] = useState('');
  const [authMode, setAuthMode] = useState<'signup' | 'login' | 'parentConsent'>('signup');
  const [isUser18Plus, setIsUser18Plus] = useState(false);
  const [isConsentModalVisible, setIsConsentModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string>('Village Road, Rampur');

  return (
    <>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen
          name="Splash"
          options={{ animation: 'fade' }}
        >
          {({ navigation }) => (
            <SplashScreen onFinish={() => navigation.replace('Welcome')} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Welcome">
          {({ navigation }) => (
            <WelcomeScreen onComplete={() => navigation.navigate('Signup')} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Signup">
          {({ navigation }) => (
            <SignupScreen
              onSendOtp={(data) => {
                setMobileNumber(data.mobileNumber);
                setIsUser18Plus(data.is18Plus);
                setAuthMode('signup');
                navigation.navigate('Otp', {
                  mobileNumber: data.mobileNumber,
                  authMode: 'signup',
                  is18Plus: data.is18Plus,
                });
              }}
              onNavigateToLogin={() => navigation.replace('Login')}
              onBack={() => navigation.goBack()}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Login">
          {({ navigation }) => (
            <LoginScreen
              onSendOtp={(data) => {
                setMobileNumber(data.mobileNumber);
                setAuthMode('login');
                navigation.navigate('Otp', {
                  mobileNumber: data.mobileNumber,
                  authMode: 'login',
                });
              }}
              onNavigateToSignup={() => navigation.replace('Signup')}
              onBack={() => navigation.goBack()}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="Otp">
          {({ navigation, route }) => {
            const currentAuthMode = route.params?.authMode || authMode;
            const current18Plus = route.params?.is18Plus ?? isUser18Plus;

            return (
              <OtpScreen
                mobileNumber={route.params?.mobileNumber || mobileNumber}
                onVerifySuccess={() => {
                  if (currentAuthMode === 'login') {
                    rootNav.reset({
                      index: 0,
                      routes: [{ name: 'Main' }],
                    });
                  } else if (currentAuthMode === 'signup') {
                    if (current18Plus) {
                      navigation.navigate('LocationAccess');
                    } else {
                      navigation.navigate('ParentConsent');
                    }
                  } else if (currentAuthMode === 'parentConsent') {
                    setIsConsentModalVisible(true);
                  }
                }}
                onBack={() => navigation.goBack()}
              />
            );
          }}
        </Stack.Screen>

        <Stack.Screen name="ParentConsent">
          {({ navigation }) => (
            <ParentConsentScreen
              onSubmit={(data) => {
                setMobileNumber(data.parentMobile);
                setAuthMode('parentConsent');
                navigation.navigate('Otp', {
                  mobileNumber: data.parentMobile,
                  authMode: 'parentConsent',
                });
              }}
              onBack={() => navigation.goBack()}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="LocationAccess">
          {({ navigation }) => (
            <LocationAccessScreen
              onConfirmLocation={(locData: LocationData) => {
                const addr = locData.address || locData.fullAddress;
                setSelectedLocation(addr);
                navigation.navigate('ProfileSetup', { selectedLocation: addr });
              }}
              onBack={() => navigation.goBack()}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="ProfileSetup">
          {({ navigation, route }) => (
            <ProfileSetupScreen
              initialLocation={route.params?.selectedLocation || selectedLocation}
              onContinue={() => {
                navigation.navigate('YourConcerns');
              }}
              onBack={() => navigation.goBack()}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="YourConcerns">
          {({ navigation }) => {
            const goToHome = () => {
              rootNav.reset({
                index: 0,
                routes: [{ name: 'Main' }],
              });
            };
            return (
              <YourConcernsScreen
                onContinue={goToHome}
                onExploreLater={goToHome}
                onBack={() => navigation.goBack()}
              />
            );
          }}
        </Stack.Screen>
      </Stack.Navigator>

      <ConsentVerifiedModal
        visible={isConsentModalVisible}
        onContinue={() => {
          setIsConsentModalVisible(false);
          rootNav.navigate('Auth', { screen: 'LocationAccess' });
        }}
      />
    </>
  );
};
