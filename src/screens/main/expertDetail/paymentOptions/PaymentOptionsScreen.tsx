import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import WalletIconSvg from '../../../../assets/icons/wallet.svg';
import CreditCardIconSvg from '../../../../assets/icons/creditCardIcon.svg';
import { styles } from './styles';

export const PaymentOptionsScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const expert = route.params?.expert || { name: 'Dr. Anjali Sharma' };
  const bookingData = route.params?.bookingData || {};

  const [selectedMethod, setSelectedMethod] = useState<'wallet' | 'razorpay'>('wallet');

  const handleContinue = () => {
    const finalBookingData = {
      ...bookingData,
      expert,
      paymentMethod: selectedMethod,
      bookingId: `WZ${Math.floor(100 + Math.random() * 900)}`,
    };

    const isWelzaaExpert =
      expert?.isWelzaa ||
      expert?.name?.toLowerCase().includes('welzaa') ||
      bookingData?.isWelzaa ||
      bookingData?.expert?.name?.toLowerCase().includes('welzaa') ||
      bookingData?.mode?.toLowerCase().includes('welzaa');

    if (isWelzaaExpert) {
      navigation.navigate('FindingExpert', { expert, bookingData: finalBookingData });
    } else {
      navigation.navigate('SessionBooked', { expert, bookingData: finalBookingData });
    }
  };

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader
        title="Payment Options"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <AppText style={styles.sectionTitle}>Select Payment Method</AppText>

        <View style={styles.methodsContainer}>
          {/* Wallet Pay */}
          <TouchableOpacity
            style={[
              styles.methodCard,
              selectedMethod === 'wallet' && styles.methodCardSelected,
            ]}
            activeOpacity={0.85}
            onPress={() => setSelectedMethod('wallet')}
          >
            <View style={styles.methodLeftRow}>
              <View style={[styles.methodIconBg, { backgroundColor: '#7C3AED' }]}>
                <WalletIconSvg width={22} height={22} color={theme.colors.white} />
              </View>
              <View>
                <AppText style={styles.methodName}>Wallet Pay</AppText>
                <AppText style={styles.methodSubtitle}>Pay using your Welzaa Wallet</AppText>
              </View>
            </View>

            <View style={[styles.radioOuter, selectedMethod === 'wallet' && styles.radioOuterSelected]}>
              {selectedMethod === 'wallet' && <View style={styles.radioInnerSelected} />}
            </View>
          </TouchableOpacity>

          {/* Razorpay */}
          <TouchableOpacity
            style={[
              styles.methodCard,
              selectedMethod === 'razorpay' && styles.methodCardSelected,
            ]}
            activeOpacity={0.85}
            onPress={() => setSelectedMethod('razorpay')}
          >
            <View style={styles.methodLeftRow}>
              <View style={[styles.methodIconBg, { backgroundColor: '#0C2340' }]}>
                <CreditCardIconSvg width={22} height={22} color={theme.colors.white} />
              </View>
              <View>
                <AppText style={styles.methodName}>Razorpay</AppText>
                <AppText style={styles.methodSubtitle}>UPI, Cards, Netbanking & Wallet</AppText>
              </View>
            </View>

            <View style={[styles.radioOuter, selectedMethod === 'razorpay' && styles.radioOuterSelected]}>
              {selectedMethod === 'razorpay' && <View style={styles.radioInnerSelected} />}
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomFooter}>
        <TouchableOpacity
          style={styles.continueBtn}
          activeOpacity={0.85}
          onPress={handleContinue}
        >
          <AppText style={styles.continueBtnText}>CONTINUE</AppText>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};
