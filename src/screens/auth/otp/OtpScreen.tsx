import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  NativeSyntheticEvent,
} from 'react-native';
import { HeaderLogo, PrimaryButton, BottomWave } from '../../../components/common';
import { ScreenWrapper, FormContainer } from '../../../components/layout';
import OtpSvg from '../../../assets/illustrations/otp.svg';
import ClockIconSvg from '../../../assets/icons/clockIcon.svg';
import { theme } from '../../../config/theme';
import { styles } from './styles';

interface OtpScreenProps {
  mobileNumber?: string;
  onVerifySuccess?: (otp: string) => void;
  onResendOtp?: () => void;
  onBack?: () => void;
}

export const OtpScreen: React.FC<OtpScreenProps> = ({
  mobileNumber = '',
  onVerifySuccess,
  onResendOtp,
  onBack,
}) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const [timer, setTimer] = useState<number>(30);
  const inputRefs = useRef<Array<any>>([]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timer]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    const cleanedText = text.replace(/[^0-9]/g, '');

    if (cleanedText.length > 1) {
      const digits = cleanedText.slice(0, 6).split('');
      for (let i = 0; i < 6; i++) {
        newOtp[i] = digits[i] || '';
      }
      setOtp(newOtp);
      const nextFocus = Math.min(digits.length, 5);
      inputRefs.current[nextFocus]?.focus();
      return;
    }

    newOtp[index] = cleanedText;
    setOtp(newOtp);

    if (cleanedText !== '' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<any>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setTimer(30);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    if (onResendOtp) {
      onResendOtp();
    }
  };

  const fullOtp = otp.join('');
  const isComplete = fullOtp.length === 6;

  const handleVerify = () => {
    if (isComplete && onVerifySuccess) {
      onVerifySuccess(fullOtp);
    }
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <ScreenWrapper backgroundColor={theme.colors.headerCream} renderBackground={() => <BottomWave />}>
      <FormContainer>
        <HeaderLogo style={styles.headerWrapper} imageStyle={styles.logoImage} onBack={onBack} />

        <View style={styles.cardContainer}>
          <View style={styles.illustrationWrapper}>
            <OtpSvg width="100%" height="100%" viewBox="0 0 297 297" />
          </View>

          <Text style={styles.title}>Verify Your Mobile Number</Text>
          <Text style={styles.subtitle}>
            Enter the 6-digit OTP sent to Your Mobile Number
            {mobileNumber ? ` (+91 ${mobileNumber})` : ''}
          </Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => {
                  inputRefs.current[index] = ref;
                }}
                style={[
                  styles.otpInputBox,
                  focusedIndex === index && styles.otpInputBoxFocused,
                ]}
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleOtpChange(text, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                onFocus={() => setFocusedIndex(index)}
                selectTextOnFocus
              />
            ))}
          </View>

          <View style={styles.resendContainer}>
            <ClockIconSvg width={18} height={18} style={{ marginRight: 6 }} />
            {timer > 0 ? (
              <Text style={styles.resendText}>
                Resend OTP in <Text style={styles.timerText}>{formatTimer(timer)}</Text>
              </Text>
            ) : (
              <TouchableOpacity onPress={handleResend} activeOpacity={0.7}>
                <Text style={styles.resendLink}>Resend OTP</Text>
              </TouchableOpacity>
            )}
          </View>

          <PrimaryButton
            title="VERIFY & CONTINUE"
            onPress={handleVerify}
            disabled={!isComplete}
            style={styles.verifyButton}
          />
        </View>
      </FormContainer>
    </ScreenWrapper>
  );
};
