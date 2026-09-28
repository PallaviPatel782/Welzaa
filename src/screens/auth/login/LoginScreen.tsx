import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { HeaderLogo, PrimaryButton, BottomWave, AppFastImage } from '../../../components/common';
import { ScreenWrapper, FormContainer } from '../../../components/layout';
import IndiaFlagSvg from '../../../assets/icons/indiaFlag.svg';
import { theme } from '../../../config/theme';
import { styles } from './styles';

interface LoginScreenProps {
  onSendOtp?: (data: { mobileNumber: string }) => void;
  onNavigateToSignup?: () => void;
  onBack?: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  onSendOtp,
  onNavigateToSignup,
  onBack,
}) => {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSendOtp = () => {
    if (onSendOtp) {
      onSendOtp({ mobileNumber });
    }
  };

  const isFormValid = mobileNumber.trim().length === 10;

  return (
    <ScreenWrapper backgroundColor={theme.colors.headerCream} renderBackground={() => <BottomWave />}>
      <FormContainer>
        <HeaderLogo style={styles.headerWrapper} imageStyle={styles.logoImage} onBack={onBack} />

        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeTitle}>Welcome to Welzaa</Text>
          <Text style={styles.welcomeSubtitle}>
            Join as a expert and help people lead better lives.
          </Text>
        </View>

        <View style={styles.illustrationContainer}>
          <AppFastImage
            source={require('../../../assets/illustrations/login.png')}
            style={styles.illustrationImage}
          />
        </View>

        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Login with Mobile number</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Mobile Number</Text>
            <View style={styles.phoneInputWrapper}>
              <IndiaFlagSvg width={24} height={16} style={{ marginRight: 8 }} />
              <Text style={styles.countryCode}>+91</Text>
              <View style={styles.verticalDivider} />
              <TextInput
                style={styles.phoneInput}
                placeholder="Enter Mobile Number"
                placeholderTextColor={theme.colors.slateGray}
                keyboardType="phone-pad"
                maxLength={10}
                value={mobileNumber}
                onChangeText={setMobileNumber}
              />
            </View>
          </View>

          <PrimaryButton
            title="SEND OTP"
            onPress={handleSendOtp}
            disabled={!isFormValid}
            style={styles.sendButton}
          />

          {onNavigateToSignup && (
            <TouchableOpacity
              style={styles.toggleRow}
              onPress={onNavigateToSignup}
              activeOpacity={0.7}
            >
              <Text style={styles.toggleText}>
                Don't have an account? <Text style={styles.toggleLink}>Sign up</Text>
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </FormContainer>
    </ScreenWrapper>
  );
};
