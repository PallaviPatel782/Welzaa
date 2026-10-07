import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, AppButton } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import CalendarIconSvg from '../../../../assets/icons/calendarIcon.svg';
import ClockIconSvg from '../../../../assets/icons/clockIcon.svg';
import SunIconSvg from '../../../../assets/icons/sunIcon.svg';
import MoonIconSvg from '../../../../assets/icons/moonIcon.svg';
import ChevronLeftSvg from '../../../../assets/icons/chevronLeft.svg';
import ChevronRightSvg from '../../../../assets/icons/chevronRight.svg';
import { styles } from './styles';

interface DateSlot {
  dayName: string;
  dayNum: string;
  subText: string;
  isAvailable: boolean;
  isPast?: boolean;
}

const DATE_SLOTS: DateSlot[] = [
  { dayName: 'WED', dayNum: '16', subText: 'Past', isAvailable: false, isPast: true },
  { dayName: 'THU', dayNum: '17', subText: 'Tomorrow', isAvailable: true },
  { dayName: 'FRI', dayNum: '18', subText: '8 slots', isAvailable: true },
  { dayName: 'SAT', dayNum: '19', subText: '4 slots', isAvailable: true },
  { dayName: 'SUN', dayNum: '20', subText: 'Off', isAvailable: false },
];

export const SelectTimeSlotScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const expert = route.params?.expert || { name: 'Dr. Anjali Sharma' };

  const [duration, setDuration] = useState<'15' | '45'>('45');
  const [selectedDateIndex, setSelectedDateIndex] = useState(1); // Thu 17
  const [selectedSlot, setSelectedSlot] = useState('10:00 AM');
  const [isCalendarModalVisible, setIsCalendarModalVisible] = useState(false);

  const handleContinue = () => {
    const selectedDateObj = DATE_SLOTS[selectedDateIndex];
    const bookingData = {
      expert,
      duration: `${duration} Mins`,
      date: `Thu, ${selectedDateObj.dayNum} Oct`,
      time: selectedSlot,
      consultancyMode: route.params?.consultancyMode || 'online',
      amount: duration === '15' ? '249' : '500',
    };

    navigation.navigate('ApplyCoupon', { expert, bookingData });
  };

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader
        title="Select Time Slot"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Select Time (Duration) */}
        <View style={styles.cardSection}>
          <AppText style={styles.sectionTitle}>Select Time</AppText>
          <View style={styles.radioOptionRow}>
            <TouchableOpacity
              style={styles.radioOption}
              activeOpacity={0.8}
              onPress={() => setDuration('15')}
            >
              <View style={styles.radioCircle}>
                {duration === '15' && <View style={styles.radioInner} />}
              </View>
              <AppText style={styles.radioText}>15 mins</AppText>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.radioOption}
              activeOpacity={0.8}
              onPress={() => setDuration('45')}
            >
              <View style={styles.radioCircle}>
                {duration === '45' && <View style={styles.radioInner} />}
              </View>
              <AppText style={styles.radioText}>45 mins</AppText>
            </TouchableOpacity>
          </View>
        </View>

        {/* Select Date Section */}
        <View style={styles.cardSection}>
          <View style={styles.dateHeaderRow}>
            <View>
              <AppText style={styles.sectionTitle}>Select Date</AppText>
              <AppText style={styles.monthText}>October 2024</AppText>
            </View>

            <TouchableOpacity
              style={styles.calendarIconButton}
              activeOpacity={0.8}
              onPress={() => setIsCalendarModalVisible(true)}
            >
              <CalendarIconSvg width={20} height={20} color={theme.colors.purple} />
            </TouchableOpacity>
          </View>

          {/* Date Strip */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.dateStripScroll}
          >
            {DATE_SLOTS.map((slot, idx) => {
              const isSelected = selectedDateIndex === idx;
              return (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.dateCard,
                    slot.isPast && styles.dateCardDisabled,
                    isSelected && styles.dateCardSelected,
                  ]}
                  disabled={!slot.isAvailable}
                  activeOpacity={0.85}
                  onPress={() => setSelectedDateIndex(idx)}
                >
                  <AppText style={[styles.dayName, isSelected && styles.textWhite]}>
                    {slot.dayName}
                  </AppText>
                  <AppText style={[styles.dayNum, isSelected && styles.textWhite]}>
                    {slot.dayNum}
                  </AppText>
                  <AppText
                    style={[
                      styles.subText,
                      slot.subText.includes('slots') && styles.subTextGreen,
                      isSelected && styles.textWhite,
                    ]}
                  >
                    {slot.subText}
                  </AppText>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Available Time Slot Section */}
        <View style={styles.cardSection}>
          <View style={styles.slotHeaderRow}>
            <View>
              <AppText style={styles.sectionTitle}>Available Time Slot</AppText>
              <AppText style={styles.slotHeaderSubtext}>
                All times shown in IST (GMT+5:30)
              </AppText>
            </View>

            <View style={styles.slotsBadge}>
              <ClockIconSvg width={12} height={12} color={theme.colors.purple} />
              <AppText style={styles.slotsBadgeText}>6 slots open</AppText>
            </View>
          </View>

          {/* Morning Slots */}
          <View style={styles.timeGroup}>
            <View style={styles.timeGroupHeader}>
              <SunIconSvg width={16} height={16} color="#F59E0B" />
              <AppText style={styles.timeGroupTitle}>Morning</AppText>
            </View>

            <View style={styles.slotButtonsRow}>
              {['09:00 AM', '10:00 AM', '11:30 AM'].map((t) => {
                const isSelected = selectedSlot === t;
                const isFastest = t === '10:00 AM';
                return (
                  <TouchableOpacity
                    key={t}
                    style={[
                      styles.slotPill,
                      isSelected && styles.slotPillSelected,
                    ]}
                    activeOpacity={0.85}
                    onPress={() => setSelectedSlot(t)}
                  >
                    {isFastest && (
                      <View style={styles.fastestTag}>
                        <AppText style={styles.fastestTagText}>FASTEST</AppText>
                      </View>
                    )}
                    <AppText style={[styles.slotText, isSelected && styles.textWhite]}>
                      {t}
                    </AppText>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Afternoon Slots */}
          <View style={styles.timeGroup}>
            <View style={styles.timeGroupHeader}>
              <SunIconSvg width={16} height={16} color="#F97316" />
              <AppText style={styles.timeGroupTitle}>Afternoon</AppText>
            </View>

            <View style={styles.slotButtonsRow}>
              {['02:00 PM', '03:30 PM', '04:30 PM'].map((t) => {
                const isSelected = selectedSlot === t;
                return (
                  <TouchableOpacity
                    key={t}
                    style={[
                      styles.slotPill,
                      isSelected && styles.slotPillSelected,
                    ]}
                    activeOpacity={0.85}
                    onPress={() => setSelectedSlot(t)}
                  >
                    <AppText style={[styles.slotText, isSelected && styles.textWhite]}>
                      {t}
                    </AppText>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Evening Slots */}
          <View style={styles.timeGroup}>
            <View style={styles.timeGroupHeader}>
              <MoonIconSvg width={16} height={16} color="#6366F1" />
              <AppText style={styles.timeGroupTitle}>Evening</AppText>
            </View>

            <View style={styles.slotButtonsRow}>
              {['06:00 PM', '07:15 PM', '08:30 PM'].map((t) => {
                const isDisabled = t === '08:30 PM';
                const isSelected = selectedSlot === t;
                return (
                  <TouchableOpacity
                    key={t}
                    disabled={isDisabled}
                    style={[
                      styles.slotPill,
                      isDisabled && styles.slotPillDisabled,
                      isSelected && styles.slotPillSelected,
                    ]}
                    activeOpacity={0.85}
                    onPress={() => setSelectedSlot(t)}
                  >
                    <AppText
                      style={[
                        styles.slotText,
                        isDisabled && styles.slotTextDisabled,
                        isSelected && styles.textWhite,
                      ]}
                    >
                      {t}
                    </AppText>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Calendar Full Modal */}
      <Modal
        visible={isCalendarModalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setIsCalendarModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsCalendarModalVisible(false)}
        >
          <View style={styles.calendarModalCard}>
            <View style={styles.calendarLegendRow}>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#10B981' }]} />
                <AppText style={styles.legendText}>Available</AppText>
              </View>
              <View style={styles.legendItem}>
                <View style={[styles.legendDot, { backgroundColor: '#6B7280' }]} />
                <AppText style={styles.legendText}>Unavailable</AppText>
              </View>
            </View>

            <View style={styles.calendarMonthRow}>
              <AppText style={styles.calendarMonthTitle}>October 2024</AppText>
              <View style={styles.monthNavButtons}>
                <TouchableOpacity style={styles.monthNavBtn}>
                  <ChevronLeftSvg width={16} height={16} color={theme.colors.navy} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.monthNavBtn}>
                  <ChevronRightSvg width={16} height={16} color={theme.colors.navy} />
                </TouchableOpacity>
              </View>
            </View>

            {/* Days of Week */}
            <View style={styles.calendarGridRow}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
                <AppText key={i} style={styles.calendarDayHeader}>{d}</AppText>
              ))}
            </View>

            {/* Sample Calendar Grid */}
            <View style={styles.calendarGridDates}>
              {[
                28, 29, 30, 31, 1, 2, 3,
                4, 5, 6, 7, 8, 9, 10,
                11, 12, 13, 14, 15, 16, 17,
                18, 19, 20, 21, 22, 23, 24,
                25, 26, 27, 28, 29, 30, 31
              ].map((num, index) => {
                const isGreen = [16, 17, 18, 19].includes(num);
                const isSelected = num === 17;
                return (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.calendarDateCell,
                      isSelected && styles.calendarDateCellSelected,
                    ]}
                    onPress={() => setIsCalendarModalVisible(false)}
                  >
                    <AppText
                      style={[
                        styles.calendarDateText,
                        isGreen && styles.textGreen,
                        isSelected && styles.textWhite,
                      ]}
                    >
                      {num}
                    </AppText>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={styles.bottomFooter}>
        <AppButton
          title="CONTINUE"
          onPress={handleContinue}
          size="large"
        />
      </View>
    </ScreenWrapper>
  );
};
