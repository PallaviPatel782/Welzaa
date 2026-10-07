import React, { useEffect, useCallback } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import SessionBookedSvg from '../../../../assets/illustrations/sessionbooked.svg';
import DrNikitaDharmaSvg from '../../../../assets/images/DrNikitaDharma.svg';
import CalendarIconSvg from '../../../../assets/icons/calendarIcon.svg';
import ClockIconSvg from '../../../../assets/icons/clockIcon.svg';
import VideoIconSvg from '../../../../assets/icons/videoIcon.svg';
import BanknoteIconSvg from '../../../../assets/icons/banknoteIcon.svg';
import IdCardIconSvg from '../../../../assets/icons/idCardIcon.svg';
import EditIconSvg from '../../../../assets/icons/Edit.svg';
import { styles } from './styles';

export const SessionBookedScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const expert = route.params?.expert || {
    name: 'Dr. Anjali Sharma',
    categoryTag: 'Relationship Expert',
  };
  const bookingData = route.params?.bookingData || {};
  const isQuestionnaireCompleted = route.params?.isQuestionnaireCompleted || false;

  const AvatarComponent = expert.AvatarSvg || DrNikitaDharmaSvg;

  const handleGoToHome = useCallback(() => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  }, [navigation]);

  useEffect(() => {
    const onBackPress = () => {
      handleGoToHome();
      return true;
    };

    const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);
    return () => subscription.remove();
  }, [handleGoToHome]);

  const handleLetExpertKnow = () => {
    navigation.navigate('GetToKnowYou', {
      expert,
      bookingData,
      isQuestionnaireCompleted,
      isViewMode: isQuestionnaireCompleted,
    });
  };

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader
        title=""
        onBackPress={handleGoToHome}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Top Illustration */}
        <View style={styles.illustrationWrapper}>
          <SessionBookedSvg width={160} height={140} />
        </View>

        {/* Headings */}
        <AppText style={styles.mainTitle}>Your Session is Booked!</AppText>
        <AppText style={styles.mainSubtitle}>
          Your Expert session has been successfully scheduled.
        </AppText>

        {/* Details Card */}
        <View style={styles.detailsCard}>
          <View style={styles.doctorHeaderRow}>
            <View style={styles.doctorAvatarWrapper}>
              <AvatarComponent width={52} height={52} />
              <View style={styles.onlineDot} />
            </View>

            <View style={styles.doctorMeta}>
              <AppText style={styles.doctorLabel}>Expert Session</AppText>
              <AppText style={styles.doctorName}>{expert.name || 'Dr. Anjali Sharma'}</AppText>
              <AppText style={styles.doctorCategory}>{expert.categoryTag || 'Relationship Expert'}</AppText>
            </View>

            <View style={styles.successBadge}>
              <AppText style={styles.successBadgeText}>Successful</AppText>
            </View>
          </View>

          <View style={styles.divider} />

          {/* Key-Value Details */}
          <View style={styles.metaList}>
            <View style={styles.metaRow}>
              <View style={styles.metaLabelRow}>
                <CalendarIconSvg width={15} height={15} color={theme.colors.darkText} />
                <AppText style={styles.metaLabel}>Date & Time</AppText>
              </View>
              <AppText style={[styles.metaValue, { textAlign: 'right' }]}>
                {bookingData.date || '16 Sep 2026'}{'\n'}
                <AppText style={styles.metaTimeSubValue}>
                  {bookingData.time || '06:00 PM'}
                </AppText>
              </AppText>
            </View>

            <View style={styles.metaRow}>
              <View style={styles.metaLabelRow}>
                <ClockIconSvg width={15} height={15} color={theme.colors.darkText} />
                <AppText style={styles.metaLabel}>Duration</AppText>
              </View>
              <AppText style={styles.metaValue}>{bookingData.duration || '45 Minutes'}</AppText>
            </View>

            <View style={styles.metaRow}>
              <View style={styles.metaLabelRow}>
                <VideoIconSvg width={15} height={15} color={theme.colors.darkText} />
                <AppText style={styles.metaLabel}>Mode</AppText>
              </View>
              <AppText style={styles.metaValue}>Online Session</AppText>
            </View>

            <View style={styles.metaRow}>
              <View style={styles.metaLabelRow}>
                <BanknoteIconSvg width={15} height={15} color={theme.colors.darkText} />
                <AppText style={styles.metaLabel}>Amount Paid</AppText>
              </View>
              <AppText style={styles.metaValue}>₹{bookingData.amount || '500'}</AppText>
            </View>

            <View style={styles.metaRow}>
              <View style={styles.metaLabelRow}>
                <IdCardIconSvg width={15} height={15} color={theme.colors.darkText} />
                <AppText style={styles.metaLabel}>Booking ID</AppText>
              </View>
              <AppText style={styles.metaValue}>{bookingData.bookingId || 'WZ123'}</AppText>
            </View>
          </View>

          {/* Yellow Note Box */}
          <View style={styles.yellowNoteBox}>
            <View style={styles.noteIconWrapper}>
              <EditIconSvg width={14} height={14} color="#854D0E" />
            </View>
            <AppText style={styles.yellowNoteText}>
              Amount has been deducted from your wallet/selected payment method.
            </AppText>
          </View>
        </View>

        {/* Action Buttons */}
        <TouchableOpacity
          style={styles.letExpertKnowBtn}
          activeOpacity={0.85}
          onPress={handleLetExpertKnow}
        >
          <AppText style={styles.letExpertKnowText}>
            {isQuestionnaireCompleted ? 'View Your Answers  ≫' : 'Let Expert know about you  ≫'}
          </AppText>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.goToHomeBtn}
          activeOpacity={0.85}
          onPress={handleGoToHome}
        >
          <AppText style={styles.goToHomeText}>Go to Home</AppText>
        </TouchableOpacity>
      </ScrollView>
    </ScreenWrapper>
  );
};
