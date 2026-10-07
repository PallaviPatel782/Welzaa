import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import CouponSvg from '../../../../assets/illustrations/coupon.svg';
import CheckIconSvg from '../../../../assets/icons/checkIcon.svg';
import { styles } from './styles';

export const ApplyCouponScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const expert = route.params?.expert || { name: 'Dr. Anjali Sharma' };
  const bookingData = route.params?.bookingData || {};

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const handleApplyCoupon = (code: string) => {
    setAppliedCoupon(code);
    setIsSuccessModalVisible(true);
  };

  const handleProceedToPayment = () => {
    setIsSuccessModalVisible(false);
    const updatedBookingData = {
      ...bookingData,
      couponApplied: appliedCoupon || 'FLAT100',
      discountAmount: '100',
      finalAmount: '400',
    };
    navigation.navigate('PaymentOptions', { expert, bookingData: updatedBookingData });
  };

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader
        title="Coupon"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Apply Coupon Top Card */}
        <View style={styles.topCard}>
          <View style={styles.topCardContent}>
            <View style={styles.topLeftCol}>
              <AppText style={styles.topCardTitle}>Apply Coupon</AppText>
              <AppText style={styles.topCardSubtitle}>
                Enter your coupon code to get exciting discounts on your session
              </AppText>
            </View>

            <View style={styles.topRightCol}>
              <CouponSvg width={100} height={80} />
            </View>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Coupon Code Here"
              placeholderTextColor={theme.colors.gray}
              value={couponCode}
              onChangeText={setCouponCode}
              autoCapitalize="characters"
            />
            <TouchableOpacity
              style={styles.applyInputBtn}
              activeOpacity={0.8}
              onPress={() => handleApplyCoupon(couponCode || 'FLAT100')}
            >
              <AppText style={styles.applyInputBtnText}>Apply</AppText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Available Offers Section */}
        <AppText style={styles.sectionTitle}>Available Offers</AppText>

        {/* Offer 1 */}
        <View style={styles.offerCard}>
          <View style={styles.offerTagCol}>
            <AppText style={styles.offerTagText}>FLAT100</AppText>
          </View>

          <View style={styles.offerInfoCol}>
            <AppText style={styles.offerTitle}>Flat ₹100 Off</AppText>
            <AppText style={styles.offerSubtitle}>
              Special Offer for First Session for you
            </AppText>
          </View>

          <TouchableOpacity
            style={styles.offerApplyBtn}
            activeOpacity={0.8}
            onPress={() => handleApplyCoupon('FLAT100')}
          >
            <AppText style={styles.offerApplyBtnText}>Apply</AppText>
          </TouchableOpacity>
        </View>

        {/* Offer 2 */}
        <View style={styles.offerCard}>
          <View style={styles.offerTagCol}>
            <AppText style={styles.offerTagText}>FLAT100</AppText>
          </View>

          <View style={styles.offerInfoCol}>
            <AppText style={styles.offerTitle}>Diwali Offer Flat ₹100</AppText>
            <AppText style={styles.offerSubtitle}>
              On minimum purchase of ₹500. Applicable on all items. this month.
            </AppText>
          </View>

          <TouchableOpacity
            style={styles.offerApplyBtn}
            activeOpacity={0.8}
            onPress={() => handleApplyCoupon('FLAT100')}
          >
            <AppText style={styles.offerApplyBtnText}>Apply</AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Coupon Success Modal */}
      <Modal
        visible={isSuccessModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsSuccessModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.successCard}>
            <View style={styles.checkCircle}>
              <CheckIconSvg width={24} height={24} stroke={theme.colors.white} strokeWidth={3} />
            </View>

            <AppText style={styles.successCouponCode}>
              {appliedCoupon || 'FLAT100'}
            </AppText>

            <AppText style={styles.successSubtitle}>
              Special Offer for first session for you
            </AppText>

            <TouchableOpacity
              style={styles.woohooButton}
              activeOpacity={0.85}
              onPress={handleProceedToPayment}
            >
              <AppText style={styles.woohooButtonText}>WOOHOO! THANKS</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
};
