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
import LightningIconSvg from '../../../../assets/icons/lightningIcon.svg';
import CalendarIconSvg from '../../../../assets/icons/calendarIcon.svg';
import ChevronDownSvg from '../../../../assets/icons/chevronDown.svg';
import ClockIconSvg from '../../../../assets/icons/clockIcon.svg';
import ShieldCheckIconSvg from '../../../../assets/icons/shieldCheckIcon.svg';
import { styles } from './styles';

export const BookSessionWelzaaInstantScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const category = route.params?.category || { name: 'Counseling' };
  const [sessionType, setSessionType] = useState<'instant' | 'schedule'>('instant');
  const [consultancyMode, setConsultancyMode] = useState<'online' | 'offline'>('online');
  const [selectedDuration, setSelectedDuration] = useState<'15 mins' | '45 mins'>('15 mins');
  const [isPolicyExpanded, setIsPolicyExpanded] = useState(true);

  const price = selectedDuration === '15 mins' ? 2000 : 4000;

  const handleBookSession = () => {
    const expert = {
      name: 'Welzaa Expert Counselor',
      categoryTag: category.name || 'Counseling',
    };

    const bookingData = {
      expert,
      sessionType,
      consultancyMode,
      duration: selectedDuration,
      amount: price,
      mode: sessionType === 'instant' ? 'Instant Session' : 'Scheduled Session',
      date: sessionType === 'instant' ? 'Today' : 'Thu, 17 Oct',
      time: sessionType === 'instant' ? 'Immediate' : '10:00 AM',
      bookingId: `WZ${Math.floor(100 + Math.random() * 900)}`,
    };

    if (sessionType === 'schedule') {
      navigation.navigate('SelectTimeSlot', {
        expert,
        sessionType,
        consultancyMode,
        duration: selectedDuration,
        category,
      });
    } else {
      navigation.navigate('ApplyCoupon', { expert, bookingData });
    }
  };

  return (
    <ScreenWrapper
      backgroundColor="#F8FAFC"
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader
        title="Book Session"
        onBackPress={() => navigation.goBack()}
        backgroundColor="transparent"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Instant Session Card */}
        <TouchableOpacity
          style={[
            styles.card,
            sessionType === 'instant' && styles.cardSelected,
          ]}
          activeOpacity={0.85}
          onPress={() => setSessionType('instant')}
        >
          <View style={styles.cardHeaderRow}>
            <View style={styles.iconSquareLightning}>
              <LightningIconSvg width={22} height={22} color="#F59E0B" />
            </View>

            <View style={styles.cardInfo}>
              <View style={styles.titleRow}>
                <AppText style={styles.cardTitle}>Instant Session</AppText>
                <View style={styles.fastestBadgePill}>
                  <AppText style={styles.fastestBadgePillText}>Fastest</AppText>
                </View>
              </View>
              <AppText style={styles.cardSubtitle}>
                Connect with {selectedDuration} via Video or Audio
              </AppText>

              <View style={styles.readyStatusPill}>
                <AppText style={styles.readyStatusPillText}>• Counselor is ready</AppText>
              </View>
            </View>

            <View style={styles.radioCircle}>
              {sessionType === 'instant' && <View style={styles.radioInner} />}
            </View>
          </View>
        </TouchableOpacity>

        {/* Schedule for Later Card */}
        <TouchableOpacity
          style={[
            styles.card,
            sessionType === 'schedule' && styles.cardSelected,
          ]}
          activeOpacity={0.85}
          onPress={() => setSessionType('schedule')}
        >
          <View style={styles.cardHeaderRow}>
            <View style={styles.iconSquareCalendar}>
              <CalendarIconSvg width={22} height={22} color="#7C3AED" />
            </View>

            <View style={styles.cardInfo}>
              <AppText style={styles.cardTitle}>Schedule for Later</AppText>
              <AppText style={styles.cardSubtitle}>
                Pick your preferred date, time slot, and consultation mode
              </AppText>
            </View>

            <View style={styles.radioCircle}>
              {sessionType === 'schedule' && <View style={styles.radioInner} />}
            </View>
          </View>
        </TouchableOpacity>

        {/* Show Select Time Card only if Instant Session is selected */}
        {sessionType === 'instant' && (
          <View style={styles.cardSection}>
            <AppText style={styles.sectionTitle}>Select Time</AppText>

            <TouchableOpacity
              style={styles.timeOptionRow}
              activeOpacity={0.8}
              onPress={() => setSelectedDuration('15 mins')}
            >
              <View style={styles.radioCircle}>
                {selectedDuration === '15 mins' && <View style={styles.radioInner} />}
              </View>
              <AppText style={styles.timeOptionLabel}>15 mins</AppText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.timeOptionRow}
              activeOpacity={0.8}
              onPress={() => setSelectedDuration('45 mins')}
            >
              <View style={styles.radioCircle}>
                {selectedDuration === '45 mins' && <View style={styles.radioInner} />}
              </View>
              <AppText style={styles.timeOptionLabel}>45 mins</AppText>
            </TouchableOpacity>
          </View>
        )}

        {/* Show Consultancy Mode Card only if Schedule for Later is selected */}
        {sessionType === 'schedule' && (
          <View style={styles.cardSection}>
            <AppText style={styles.sectionTitle}>Consultancy Mode</AppText>
            <View style={styles.radioOptionRow}>
              <TouchableOpacity
                style={styles.radioOption}
                activeOpacity={0.8}
                onPress={() => setConsultancyMode('online')}
              >
                <View style={styles.radioCircle}>
                  {consultancyMode === 'online' && <View style={styles.radioInner} />}
                </View>
                <AppText style={styles.radioText}>Online</AppText>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.radioOption}
                activeOpacity={0.8}
                onPress={() => setConsultancyMode('offline')}
              >
                <View style={styles.radioCircle}>
                  {consultancyMode === 'offline' && <View style={styles.radioInner} />}
                </View>
                <AppText style={styles.radioText}>Offline</AppText>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Session Guidelines and Policies Accordion Card */}
        <View style={styles.cardSection}>
          <TouchableOpacity
            style={styles.accordionHeaderRow}
            activeOpacity={0.8}
            onPress={() => setIsPolicyExpanded(!isPolicyExpanded)}
          >
            <AppText style={styles.accordionHeaderTitle}>Session Guidelines and Policies</AppText>
            <View style={{ transform: [{ rotate: isPolicyExpanded ? '180deg' : '0deg' }] }}>
              <ChevronDownSvg width={18} height={18} color={theme.colors.darkText} />
            </View>
          </TouchableOpacity>

          {isPolicyExpanded && (
            <View style={styles.accordionBody}>
              <AppText style={styles.policySubTitle}>Rescheduled Policy:</AppText>
              <View style={styles.policyBulletRow}>
                <AppText style={styles.bulletDot}>•</AppText>
                <AppText style={styles.policyBulletText}>
                  As per company policy, sessions can only be rescheduled/cancelled up to 1 hours prior to scheduled timing.
                </AppText>
              </View>

              <View style={styles.policyBadgesRow}>
                <View style={styles.policyBadgeItem}>
                  <ClockIconSvg width={13} height={13} color="#7C3AED" />
                  <AppText style={styles.policyBadgeText}>Free Reschedule (up to 1h)</AppText>
                </View>

                <View style={styles.policyBadgeItem}>
                  <ShieldCheckIconSvg width={13} height={13} color="#7C3AED" />
                  <AppText style={styles.policyBadgeText}>100% Confidential & Encrypted</AppText>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      {/* Sticky Bottom Bar */}
      <View style={styles.bottomStickyBar}>
        {sessionType === 'instant' ? (
          <>
            <View style={styles.priceCol}>
              <AppText style={styles.priceValue}>
                ₹ {price} <AppText style={styles.perSessionText}>/session</AppText>
              </AppText>
              <AppText style={styles.consultationLabel}>for {selectedDuration} consultation</AppText>
            </View>

            <TouchableOpacity
              style={styles.bookSessionBtn}
              activeOpacity={0.85}
              onPress={handleBookSession}
            >
              <AppText style={styles.bookSessionBtnText}>Book Session</AppText>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={styles.fullWidthContinueBtn}
            activeOpacity={0.85}
            onPress={handleBookSession}
          >
            <AppText style={styles.bookSessionBtnText}>CONTINUE</AppText>
          </TouchableOpacity>
        )}
      </View>
    </ScreenWrapper>
  );
};
