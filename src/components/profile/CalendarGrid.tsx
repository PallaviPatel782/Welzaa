import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import ChevronLeftSvg from '../../assets/icons/chevronLeft.svg';
import ChevronRightSvg from '../../assets/icons/chevronRight.svg';

interface CalendarGridProps {
  monthName?: string;
  selectedRangeStart?: number;
  selectedRangeEnd?: number;
  onPrevMonth?: () => void;
  onNextMonth?: () => void;
  onSelectDay?: (day: number) => void;
}

const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

export const CalendarGrid: React.FC<CalendarGridProps> = ({
  monthName = 'December 2026',
  selectedRangeStart = 6,
  selectedRangeEnd = 15,
  onPrevMonth,
  onNextMonth,
  onSelectDay,
}) => {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <View style={styles.monthHeader}>
        <AppText style={styles.monthTitle}>{monthName}</AppText>
        <View style={styles.navRow}>
          <TouchableOpacity style={styles.navBtn} activeOpacity={0.7} onPress={onPrevMonth}>
            <ChevronLeftSvg width={14} height={14} color={theme.colors.dark} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navBtn} activeOpacity={0.7} onPress={onNextMonth}>
            <ChevronRightSvg width={14} height={14} color={theme.colors.dark} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.weekdaysRow}>
        {WEEKDAYS.map((day, idx) => (
          <AppText key={idx} style={styles.weekdayText}>
            {day}
          </AppText>
        ))}
      </View>

      <View style={styles.datesGrid}>
        <View style={styles.fadedCell}>
          <AppText style={styles.fadedDate}>27</AppText>
        </View>
        <View style={styles.fadedCell}>
          <AppText style={styles.fadedDate}>28</AppText>
        </View>
        <View style={styles.fadedCell}>
          <AppText style={styles.fadedDate}>29</AppText>
        </View>
        <View style={styles.fadedCell}>
          <AppText style={styles.fadedDate}>30</AppText>
        </View>

        {daysInMonth.map((dayNum) => {
          const inRange = dayNum >= selectedRangeStart && dayNum <= selectedRangeEnd;
          const isStart = dayNum === selectedRangeStart;
          const isEnd = dayNum === selectedRangeEnd;

          return (
            <TouchableOpacity
              key={dayNum}
              style={[
                styles.dateCell,
                inRange && styles.inRangeCell,
                isStart && styles.startRangeCell,
                isEnd && styles.endRangeCell,
              ]}
              activeOpacity={0.7}
              onPress={() => onSelectDay && onSelectDay(dayNum)}
            >
              <AppText
                style={[
                  styles.dateText,
                  inRange && styles.inRangeDateText,
                  (isStart || isEnd) && styles.startEndDateText,
                ]}
              >
                {dayNum}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  monthHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  monthTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.dark,
  },
  navRow: {
    flexDirection: 'row',
    gap: 8,
  },
  navBtn: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: theme.colors.bgLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weekdaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  weekdayText: {
    width: 36,
    textAlign: 'center',
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.gray,
  },
  datesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10,
  },
  fadedCell: {
    width: '14.28%',
    alignItems: 'center',
    paddingVertical: 6,
  },
  fadedDate: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.lightGray,
  },
  dateCell: {
    width: '14.28%',
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 6,
  },
  inRangeCell: {
    backgroundColor: theme.colors.greenBg,
  },
  startRangeCell: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  endRangeCell: {
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  },
  dateText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13.5,
    color: theme.colors.dark,
  },
  inRangeDateText: {
    color: theme.colors.greenIcon,
  },
  startEndDateText: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.darkEmerald,
  },
});
