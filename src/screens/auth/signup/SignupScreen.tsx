import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { HeaderLogo, PrimaryButton, CustomDatePicker, BottomWave, AppFastImage } from '../../../components/common';
import { ScreenWrapper, FormContainer } from '../../../components/layout';
import IndiaFlagSvg from '../../../assets/icons/indiaFlag.svg';
import CheckIconSvg from '../../../assets/icons/checkIcon.svg';
import { theme } from '../../../config/theme';
import { styles } from './styles';

interface SignupScreenProps {
  onSendOtp?: (data: {
    mobileNumber: string;
    referralCode: string;
    dob: string;
    is18Plus: boolean;
  }) => void;
  onNavigateToLogin?: () => void;
  onBack?: () => void;
}

const calculateAge = (dobString: string): number | null => {
  if (!dobString) return null;
  const parts = dobString.split('/').map((p) => parseInt(p.trim(), 10));
  if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
    const day = parts[0];
    const month = parts[1] - 1;
    const year = parts[2];
    const birthDate = new Date(year, month, day);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  return null;
};

export const SignupScreen: React.FC<SignupScreenProps> = ({
  onSendOtp,
  onNavigateToLogin,
  onBack,
}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [dob, setDob] = useState('');
  const [is18Plus, setIs18Plus] = useState(false);

  const age = calculateAge(dob);
  const isAdult = (age !== null && age >= 18) || is18Plus;

  const handleDateSelect = (_: Date, formatted: string) => {
    setDob(formatted);
    const computedAge = calculateAge(formatted);
    if (computedAge !== null) {
      setIs18Plus(computedAge >= 18);
    }
  };

  const handleSendOtp = () => {
    if (onSendOtp) {
      onSendOtp({
        mobileNumber,
        referralCode,
        dob,
        is18Plus: isAdult,
      });
    }
  };

  const isFormValid = mobileNumber.trim().length === 10 && dob.trim().length > 0;

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
          <Text style={styles.cardTitle}>Signup with Mobile number</Text>

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

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Referral Code (Optional)</Text>
            <TextInput
              style={styles.standardInput}
              placeholder="Enter referral code"
              placeholderTextColor={theme.colors.slateGray}
              value={referralCode}
              onChangeText={setReferralCode}
              autoCapitalize="characters"
            />
          </View>

          <CustomDatePicker
            label="Date of Birth"
            placeholder="DD / MM / YYYY"
            onDateSelect={handleDateSelect}
          />

          <TouchableOpacity
            style={styles.checkboxRow}
            activeOpacity={0.8}
            onPress={() => setIs18Plus(!is18Plus)}
          >
            <View style={[styles.checkboxBox, is18Plus && styles.checkboxChecked]}>
              {is18Plus && <CheckIconSvg width={12} height={12} />}
            </View>
            <Text style={styles.checkboxLabel}>I confirm that I am 18+ years in age</Text>
          </TouchableOpacity>

          <PrimaryButton
            title="SEND OTP"
            onPress={handleSendOtp}
            disabled={!isFormValid}
            style={styles.sendButton}
          />

          {onNavigateToLogin && (
            <TouchableOpacity
              style={styles.toggleRow}
              onPress={onNavigateToLogin}
              activeOpacity={0.7}
            >
              <Text style={styles.toggleText}>
                Already have an account? <Text style={styles.toggleLink}>Log in</Text>
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </FormContainer>
    </ScreenWrapper>
  );
};
