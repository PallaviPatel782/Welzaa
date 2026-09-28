import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, TextInput, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, BottomWave } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import { styles } from './styles';
import { QUICK_AMOUNTS } from '../../../../mock/walletMockData';

import DocumentIconSvg from '../../../../assets/icons/documentIcon.svg';
import LockIconSvg from '../../../../assets/icons/lockIcon.svg';
import CheckIconSvg from '../../../../assets/icons/checkIcon.svg';

export const AddMoneyScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [amount, setAmount] = useState('500');
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const handleProceedToPay = () => {
    if (!amount || parseFloat(amount) <= 0) return;

    setIsSuccessModalVisible(true);

    setTimeout(() => {
      setIsSuccessModalVisible(false);
      navigation.goBack();
    }, 1600);
  };

  const handleQuickSelect = (val: string) => {
    setAmount(val);
  };

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
      renderBackground={() => <BottomWave />}
    >
      <AppHeader title="Add Money to Wallet" backgroundColor={theme.colors.white} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.topSection}>
          <AppText style={styles.inputSectionLabel}>Enter Amount</AppText>

          <View style={styles.amountInputContainer}>
            <AppText style={styles.rupeeSymbol}>₹</AppText>
            <TextInput
              style={styles.amountInput}
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              placeholder="Enter amount"
              placeholderTextColor={theme.colors.gray}
            />
          </View>

          <AppText style={styles.inputSectionLabel}>Quick Amounts</AppText>

          <View style={styles.quickAmountRow}>
            {QUICK_AMOUNTS.map((val) => {
              const isSelected = amount === val;
              return (
                <TouchableOpacity
                  key={val}
                  style={[styles.quickPill, isSelected && styles.quickPillActive]}
                  onPress={() => handleQuickSelect(val)}
                >
                  <AppText style={[styles.quickPillText, isSelected && styles.quickPillTextActive]}>
                    ₹{val}
                  </AppText>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        <View style={styles.bottomSection}>
          <View style={styles.infoCalloutBoxAmber}>
            <DocumentIconSvg width={18} height={18} color={theme.colors.darkText} />
            <AppText style={styles.infoCalloutText}>
              Wallet balance can be used for eligible bookings, withdrawal are not available.
            </AppText>
          </View>

          <TouchableOpacity
            style={styles.payButton}
            activeOpacity={0.85}
            onPress={handleProceedToPay}
          >
            <AppText style={styles.payButtonText}>Proceed to Pay</AppText>
          </TouchableOpacity>

          <View style={styles.securedRow}>
            <LockIconSvg width={14} height={14} color={theme.colors.gray} />
            <AppText style={styles.securedText}>Secured by Razorpay</AppText>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={isSuccessModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsSuccessModalVisible(false)}
      >
        <View style={styles.successModalOverlay}>
          <View style={styles.successModalCard}>
            <View style={styles.successIconCircle}>
              <CheckIconSvg width={28} height={28} color={theme.colors.greenIcon} />
            </View>

            <AppText style={styles.successTitle}>Money Added Successfully!</AppText>
            <AppText style={styles.successSubtitle}>
              ₹{amount || '0'} has been added to your Welzaa wallet.
            </AppText>

            <TouchableOpacity
              style={styles.successDoneButton}
              onPress={() => {
                setIsSuccessModalVisible(false);
                navigation.goBack();
              }}
            >
              <AppText style={styles.successDoneButtonText}>Back to Wallet</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
};
