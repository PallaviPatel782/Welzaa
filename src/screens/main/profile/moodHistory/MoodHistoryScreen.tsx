import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import {
  TodayMoodCard,
  MoodFilterDropdown,
  FilterOption,
  CalendarGrid,
  SelectedRangeCard,
} from '../../../../components/profile';
import NoteIconSvg from '../../../../assets/icons/note.svg';
import { MOCK_MOOD_MONTH_NAMES, MOCK_MOOD_FILTER_CONFIGS } from '../../../../mock';
import { styles } from './styles';

export const MoodHistoryScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [selectedFilter, setSelectedFilter] = useState<FilterOption>('This Month');
  const [showCalendar, setShowCalendar] = useState(false);
  const [monthIndex, setMonthIndex] = useState(1);
  const [selectedRangeStart, setSelectedRangeStart] = useState<number | undefined>(undefined);
  const [selectedRangeEnd, setSelectedRangeEnd] = useState<number | undefined>(undefined);

  const currentConfig = MOCK_MOOD_FILTER_CONFIGS[selectedFilter] || MOCK_MOOD_FILTER_CONFIGS['This Month'];


  const effectiveStart = selectedRangeStart !== undefined ? selectedRangeStart : currentConfig.start;
  const effectiveEnd = selectedRangeEnd !== undefined ? selectedRangeEnd : currentConfig.end;
  const monthTitle = monthIndex === 1 ? currentConfig.monthName : MOCK_MOOD_MONTH_NAMES[monthIndex];

  const handleSelectFilter = (filter: FilterOption) => {
    setSelectedFilter(filter);
    setSelectedRangeStart(undefined);
    setSelectedRangeEnd(undefined);
    if (filter === 'Last Month') {
      setMonthIndex(0);
    } else {
      setMonthIndex(1);
    }
    if (filter === 'Date Range') {
      setShowCalendar(true);
    } else {
      setShowCalendar(false);
    }
  };

  const handlePrevMonth = () => {
    setMonthIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNextMonth = () => {
    setMonthIndex((prev) => (prev < MOCK_MOOD_MONTH_NAMES.length - 1 ? prev + 1 : prev));
  };

  const handleSelectDay = (day: number) => {
    if (selectedRangeStart === undefined || selectedRangeEnd !== undefined) {
      setSelectedRangeStart(day);
      setSelectedRangeEnd(undefined);
    } else if (day >= selectedRangeStart) {
      setSelectedRangeEnd(day);
    } else {
      setSelectedRangeStart(day);
      setSelectedRangeEnd(undefined);
    }
  };

  const displayRangeText =
    selectedRangeStart !== undefined && selectedRangeEnd !== undefined
      ? `${selectedRangeStart}th Dec - ${selectedRangeEnd}th Dec`
      : currentConfig.rangeText;

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader title="Mood History" onBackPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TodayMoodCard moodName="Happy" />

        <View style={styles.sectionHeaderRow}>
          <View style={styles.leftHeader}>
            <NoteIconSvg width={18} height={18} color={theme.colors.dark} />
            <AppText style={styles.sectionTitle}>Mood Trend</AppText>
          </View>
          <MoodFilterDropdown
            selectedFilter={selectedFilter}
            onSelectFilter={handleSelectFilter}
          />
        </View>

        {showCalendar && (
          <CalendarGrid
            monthName={monthTitle}
            selectedRangeStart={effectiveStart}
            selectedRangeEnd={effectiveEnd}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            onSelectDay={handleSelectDay}
          />
        )}

        <SelectedRangeCard
          moodName={currentConfig.mood}
          dateRange={displayRangeText}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};
