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
import CalendarIconSvg from '../../../../assets/icons/calendarIcon.svg';
import ClockIconSvg from '../../../../assets/icons/clockIcon.svg';
import ChevronDownSvg from '../../../../assets/icons/chevronDown.svg';
import ShieldCheckIconSvg from '../../../../assets/icons/shieldCheckIcon.svg';
import SunIconSvg from '../../../../assets/icons/sunIcon.svg';
import MoonIconSvg from '../../../../assets/icons/moonIcon.svg';
import EditIconSvg from '../../../../assets/icons/Edit.svg';

import DrNikitaDharmaSvg from '../../../../assets/images/DrNikitaDharma.svg';
import {
  DoctorSummaryCard,
  RescheduleNotAllowedModal,
  FutureDatePickerModal,
} from '../../../../components/session';
import { styles } from './styles';

export const RescheduleSessionScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const isEligible = route.params?.isEligible !== undefined ? route.params.isEligible : true;
  const [showNotAllowedModal, setShowNotAllowedModal] = useState(!isEligible);
  const [isPolicyExpanded, setIsPolicyExpanded] = useState(true);

  // Date selection state
  const [selectedDate, setSelectedDate] = useState<Date>(() => {
    return new Date(2026, 8, 17); // 17 Sep 2026
  });
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('10:00 AM');

  const session = route.params?.session || {
    doctorName: 'Dr. Anjali Sharma',
    specialty: 'Relationship Expert',
    AvatarComponent: DrNikitaDharmaSvg,
  };

  const handleConfirmReschedule = () => {
    if (!isEligible) {
      setShowNotAllowedModal(true);
      return;
    }
    navigation.goBack();
  };

  // Format month and year title dynamically
  const monthYearTitle = selectedDate.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  const isSameDay = (d1: Date, d2: Date) =>
    d1.getDate() === d2.getDate() &&
    d1.getMonth() === d2.getMonth() &&
    d1.getFullYear() === d2.getFullYear();

  const defaultDates = [
    {
      date: new Date(2026, 8, 16),
      dayName: 'WED',
      dateNum: '16',
      badgeText: 'Past',
      isDisabled: true,
    },
    {
      date: new Date(2026, 8, 17),
      dayName: 'THU',
      dateNum: '17',
      badgeText: 'Tomorrow',
      isDisabled: false,
    },
    {
      date: new Date(2026, 8, 18),
      dayName: 'FRI',
      dateNum: '18',
      badgeText: '8 slots',
      isDisabled: false,
    },
    {
      date: new Date(2026, 8, 19),
      dayName: 'SAT',
      dateNum: '19',
      badgeText: '4 slots',
      isDisabled: false,
    },
    {
      date: new Date(2026, 8, 20),
      dayName: 'SUN',
      dateNum: '20',
      badgeText: 'Off',
      isDisabled: true,
    },
  ];

  const isDefaultSelected = defaultDates.some((d) => isSameDay(d.date, selectedDate));

  let displayedPills = [...defaultDates];
  if (!isDefaultSelected) {
    const customDayName = selectedDate
      .toLocaleDateString('en-US', { weekday: 'short' })
      .toUpperCase();
    const customDateNum = String(selectedDate.getDate());
    displayedPills[1] = {
      date: selectedDate,
      dayName: customDayName,
      dateNum: customDateNum,
      badgeText: 'Selected',
      isDisabled: false,
    };
  }

  return (
    <ScreenWrapper backgroundColor={theme.colors.bgLight} edges={['top', 'left', 'right', 'bottom']}>
      <AppHeader
        title="Reschedule Session"
        onBackPress={() => navigation.goBack()}
        backgroundColor={theme.colors.bgLight}
      />

      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <AppText style={styles.headingTitle}>
            Choose a new date and time for session
          </AppText>

          {/* Info Notice Box */}
          <View style={styles.noticeBox}>
            <EditIconSvg width={16} height={16} color={theme.colors.dark} style={styles.noticeIcon} />
            <AppText style={styles.noticeText}>
              Your current session will be cancelled and a new session will be created for the selected date and Time
            </AppText>
          </View>

          {/* Expert Card */}
          <View style={styles.expertCard}>
            <DoctorSummaryCard
              doctorName={session.doctorName}
              specialty={session.specialty}
              AvatarComponent={session.AvatarComponent}
            />
          </View>

          {/* Session Guidelines and Policies Accordion */}
          <View style={styles.accordionCard}>
            <TouchableOpacity
              style={styles.accordionHeader}
              activeOpacity={0.8}
              onPress={() => setIsPolicyExpanded(!isPolicyExpanded)}
            >
              <AppText style={styles.accordionTitle}>Session Guidelines and Policies</AppText>
              <ChevronDownSvg
                width={16}
                height={16}
                color={theme.colors.dark}
                style={{ transform: [{ rotate: isPolicyExpanded ? '180deg' : '0deg' }] }}
              />
            </TouchableOpacity>

            {isPolicyExpanded && (
              <View style={styles.accordionContent}>
                <AppText style={styles.policySubtitle}>Rescheduled Policy:</AppText>
                <AppText style={styles.policyBody}>
                  • As per company policy, sessions can only be reschedules/cancelled up to 1 hours prior to scheduled timing.
                </AppText>

                <View style={styles.policyBadgesRow}>
                  <View style={styles.policyPill}>
                    <AppText style={styles.policyPillText}>Free Reschedule (up to 1h)</AppText>
                  </View>

                  <View style={styles.securePill}>
                    <ShieldCheckIconSvg width={14} height={14} color={theme.colors.purple} />
                    <AppText style={styles.securePillText}>100% Confidential & Encrypted</AppText>
                  </View>
                </View>
              </View>
            )}
          </View>

          {/* Duration Card */}
          <View style={styles.durationCard}>
            <AppText style={styles.cardLabel}>Select Time</AppText>
            <View style={styles.radioRow}>
              <View style={styles.radioOuter}>
                <View style={styles.radioInner} />
              </View>
              <AppText style={styles.radioText}>45 mins</AppText>
            </View>
          </View>

          {/* Date Selector Card */}
          <View style={styles.dateCard}>
            <View style={styles.dateHeaderRow}>
              <AppText style={styles.cardLabel}>Select Date</AppText>
              <TouchableOpacity
                style={styles.dateHeaderRow}
                activeOpacity={0.7}
                onPress={() => setShowCalendarModal(true)}
              >
                <AppText style={styles.monthTitle}>{monthYearTitle}</AppText>
                <View style={styles.calendarIconBtn}>
                  <CalendarIconSvg width={16} height={16} color={theme.colors.purple} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.datePillsRow}>
              {displayedPills.map((pill, idx) => {
                const active = isSameDay(pill.date, selectedDate);
                if (pill.isDisabled) {
                  return (
                    <View key={idx} style={[styles.datePill, styles.disabledDatePill]}>
                      <AppText style={[styles.dayText, styles.disabledDayText]}>{pill.dayName}</AppText>
                      <AppText style={[styles.dateNumText, styles.disabledDateNumText]}>{pill.dateNum}</AppText>
                      <AppText style={[styles.slotBadgeText, styles.disabledSlotBadgeText]}>{pill.badgeText}</AppText>
                    </View>
                  );
                }

                return (
                  <TouchableOpacity
                    key={idx}
                    style={[styles.datePill, active && styles.selectedDatePill]}
                    activeOpacity={0.8}
                    onPress={() => setSelectedDate(pill.date)}
                  >
                    <AppText style={[styles.dayText, active && styles.selectedDayText]}>{pill.dayName}</AppText>
                    <AppText style={[styles.dateNumText, active && styles.selectedDateNumText]}>{pill.dateNum}</AppText>
                    <AppText style={[styles.slotBadgeText, active && styles.selectedSlotBadgeText]}>{pill.badgeText}</AppText>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Available Time Slot Card */}
          <View style={styles.timeSlotCard}>
            <View style={styles.timeSlotHeaderRow}>
              <AppText style={styles.cardLabel}>Available Time Slot</AppText>
              <View style={styles.openSlotsBadge}>
                <ClockIconSvg width={12} height={12} color={theme.colors.purple} />
                <AppText style={styles.openSlotsText}>6 slots open</AppText>
              </View>
            </View>

            <AppText style={styles.timeSubtext}>All times shown in IST (GMT+5:30)</AppText>

            {/* Morning Section */}
            <View style={styles.periodSection}>
              <View style={styles.periodHeader}>
                <SunIconSvg width={14} height={14} color={theme.colors.goldStar} />
                <AppText style={styles.periodTitle}>Morning</AppText>
              </View>

              <View style={styles.slotsGrid}>
                <View style={[styles.timeSlotBtn, styles.disabledTimeSlotBtn]}>
                  <AppText style={[styles.timeSlotText, styles.disabledTimeSlotText]}>09:00 AM</AppText>
                </View>

                <TouchableOpacity
                  style={[styles.timeSlotBtn, selectedTimeSlot === '10:00 AM' && styles.selectedTimeSlotBtn]}
                  activeOpacity={0.8}
                  onPress={() => setSelectedTimeSlot('10:00 AM')}
                >
                  <View style={styles.fastestBadge}>
                    <AppText style={styles.fastestBadgeText}>FASTEST</AppText>
                  </View>
                  <AppText style={[styles.timeSlotText, selectedTimeSlot === '10:00 AM' && styles.selectedTimeSlotText]}>
                    10:00 AM
                  </AppText>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.timeSlotBtn, selectedTimeSlot === '11:30 AM' && styles.selectedTimeSlotBtn]}
                  activeOpacity={0.8}
                  onPress={() => setSelectedTimeSlot('11:30 AM')}
                >
                  <AppText style={[styles.timeSlotText, selectedTimeSlot === '11:30 AM' && styles.selectedTimeSlotText]}>
                    11:30 AM
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>

            {/* Afternoon Section */}
            <View style={styles.periodSection}>
              <View style={styles.periodHeader}>
                <SunIconSvg width={14} height={14} color={theme.colors.goldStar} />
                <AppText style={styles.periodTitle}>Afternoon</AppText>
              </View>

              <View style={styles.slotsGrid}>
                {['02:00 PM', '03:30 PM', '04:30 PM'].map((slot) => (
                  <TouchableOpacity
                    key={slot}
                    style={[styles.timeSlotBtn, selectedTimeSlot === slot && styles.selectedTimeSlotBtn]}
                    activeOpacity={0.8}
                    onPress={() => setSelectedTimeSlot(slot)}
                  >
                    <AppText style={[styles.timeSlotText, selectedTimeSlot === slot && styles.selectedTimeSlotText]}>
                      {slot}
                    </AppText>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            {/* Evening Section */}
            <View style={styles.periodSection}>
              <View style={styles.periodHeader}>
                <MoonIconSvg width={14} height={14} color={theme.colors.purple} />
                <AppText style={styles.periodTitle}>Evening</AppText>
              </View>

              <View style={styles.slotsGrid}>
                <TouchableOpacity
                  style={[styles.timeSlotBtn, selectedTimeSlot === '06:00 PM' && styles.selectedTimeSlotBtn]}
                  activeOpacity={0.8}
                  onPress={() => setSelectedTimeSlot('06:00 PM')}
                >
                  <AppText style={[styles.timeSlotText, selectedTimeSlot === '06:00 PM' && styles.selectedTimeSlotText]}>
                    06:00 PM
                  </AppText>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.timeSlotBtn, selectedTimeSlot === '07:15 PM' && styles.selectedTimeSlotBtn]}
                  activeOpacity={0.8}
                  onPress={() => setSelectedTimeSlot('07:15 PM')}
                >
                  <AppText style={[styles.timeSlotText, selectedTimeSlot === '07:15 PM' && styles.selectedTimeSlotText]}>
                    07:15 PM
                  </AppText>
                </TouchableOpacity>

                <View style={[styles.timeSlotBtn, styles.disabledTimeSlotBtn]}>
                  <AppText style={[styles.timeSlotText, styles.disabledTimeSlotText]}>08:30 PM</AppText>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom Floating Confirm Bar */}
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.confirmBtn}
            activeOpacity={0.85}
            onPress={handleConfirmReschedule}
          >
            <CalendarIconSvg width={18} height={18} color={theme.colors.white} stroke={theme.colors.white} />
            <AppText style={styles.confirmBtnText}>CONFIRM RESCHEDULE</AppText>
          </TouchableOpacity>
        </View>

        {/* Future Date Picker Modal */}
        <FutureDatePickerModal
          visible={showCalendarModal}
          onClose={() => setShowCalendarModal(false)}
          selectedDate={selectedDate}
          onDateSelect={(date) => setSelectedDate(date)}
        />

        {/* Reschedule Not Allowed Modal */}
        <RescheduleNotAllowedModal
          visible={showNotAllowedModal}
          onClose={() => setShowNotAllowedModal(false)}
          session={session}
        />
      </View>
    </ScreenWrapper>
  );
};

