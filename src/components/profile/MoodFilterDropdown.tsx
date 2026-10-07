import React, { useState } from 'react';
import { View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import ChevronDownSvg from '../../assets/icons/chevronDown.svg';
import CalendarIconSvg from '../../assets/icons/calendarIcon.svg';

export type FilterOption = 'Last 7 days' | 'Last 30 days' | 'This Month' | 'Last Month' | 'Date Range';

interface MoodFilterDropdownProps {
  selectedFilter: FilterOption;
  onSelectFilter: (filter: FilterOption) => void;
}

const FILTER_OPTIONS: FilterOption[] = [
  'Last 7 days',
  'Last 30 days',
  'This Month',
  'Last Month',
  'Date Range',
];

export const MoodFilterDropdown: React.FC<MoodFilterDropdownProps> = ({
  selectedFilter,
  onSelectFilter,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownPill}
        activeOpacity={0.8}
        onPress={() => setIsOpen(true)}
      >
        <AppText style={styles.dropdownText}>{selectedFilter}</AppText>
        <ChevronDownSvg width={14} height={14} color={theme.colors.dark} />
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.overlay}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View style={styles.menuCard}>
            {FILTER_OPTIONS.map((option) => {
              const isSelected = selectedFilter === option;
              const isDateRange = option === 'Date Range';

              return (
                <TouchableOpacity
                  key={option}
                  style={[styles.menuItem, isSelected && styles.menuItemSelected]}
                  activeOpacity={0.7}
                  onPress={() => {
                    onSelectFilter(option);
                    setIsOpen(false);
                  }}
                >
                  <AppText style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                    {option}
                  </AppText>

                  {isDateRange && (
                    <View style={styles.fromToBadge}>
                      <AppText style={styles.fromToText}>From-To</AppText>
                      <CalendarIconSvg width={14} height={14} color={theme.colors.blueText} />
                    </View>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  dropdownPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  dropdownText: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.dark,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.12)',
    paddingTop: 155,
    paddingRight: 16,
    alignItems: 'flex-end',
  },
  menuCard: {
    width: 200,
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 8,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  menuItemSelected: {
    backgroundColor: theme.colors.bgLight,
  },
  optionText: {
    fontFamily: theme.fonts.medium,
    fontSize: 13.5,
    color: theme.colors.blueText,
  },
  optionTextSelected: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.blueText,
  },
  fromToBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 4,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    backgroundColor: theme.colors.white,
  },
  fromToText: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.gray,
  },
});
