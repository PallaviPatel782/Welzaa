import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FilterCriteria } from '../../types';
import { theme } from '../../config/theme';
import CloseIconSvg from '../../assets/icons/closeIcon.svg';

interface ActiveFilterChipsProps {
  filters: FilterCriteria | null;
  onRemoveFilter: (updatedFilters: FilterCriteria | null) => void;
  onClearAll: () => void;
  containerStyle?: object;
}

export const ActiveFilterChips: React.FC<ActiveFilterChipsProps> = ({
  filters,
  onRemoveFilter,
  onClearAll,
  containerStyle,
}) => {
  if (!filters) return null;

  const chips: { key: string; label: string; onRemove: () => void }[] = [];

  if (filters.specializations && filters.specializations.length > 0) {
    filters.specializations.forEach((spec) => {
      chips.push({
        key: `spec-${spec}`,
        label: spec,
        onRemove: () => {
          const updatedSpec = filters.specializations?.filter((s) => s !== spec) || [];
          const next = { ...filters, specializations: updatedSpec };
          checkEmptyAndEmit(next);
        },
      });
    });
  }

  if (filters.mode && filters.mode !== 'Both') {
    chips.push({
      key: 'mode',
      label: `Mode: ${filters.mode}`,
      onRemove: () => {
        const next = { ...filters, mode: 'Both' as const };
        checkEmptyAndEmit(next);
      },
    });
  }

  if (filters.priceMax && filters.priceMax < 5000) {
    chips.push({
      key: 'price',
      label: `≤ ₹${filters.priceMax}`,
      onRemove: () => {
        const next = { ...filters, priceMax: 5000 };
        checkEmptyAndEmit(next);
      },
    });
  }

  if (filters.ratingMin && filters.ratingMin > 0) {
    chips.push({
      key: 'rating',
      label: `★ ${filters.ratingMin.toFixed(1)}+`,
      onRemove: () => {
        const next = { ...filters, ratingMin: 0 };
        checkEmptyAndEmit(next);
      },
    });
  }

  if (filters.languages && filters.languages.length > 0) {
    filters.languages.forEach((lang) => {
      chips.push({
        key: `lang-${lang}`,
        label: lang,
        onRemove: () => {
          const updatedLang = filters.languages?.filter((l) => l !== lang) || [];
          const next = { ...filters, languages: updatedLang };
          checkEmptyAndEmit(next);
        },
      });
    });
  }

  function checkEmptyAndEmit(nextFilters: FilterCriteria) {
    const hasSpec = nextFilters.specializations && nextFilters.specializations.length > 0;
    const hasMode = nextFilters.mode && nextFilters.mode !== 'Both';
    const hasPrice = nextFilters.priceMax && nextFilters.priceMax < 5000;
    const hasRating = nextFilters.ratingMin && nextFilters.ratingMin > 0;
    const hasLang = nextFilters.languages && nextFilters.languages.length > 0;

    if (!hasSpec && !hasMode && !hasPrice && !hasRating && !hasLang) {
      onClearAll();
    } else {
      onRemoveFilter(nextFilters);
    }
  }

  if (chips.length === 0) return null;

  return (
    <View style={[styles.container, containerStyle]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {chips.map((chip) => (
          <View key={chip.key} style={styles.chip}>
            <Text style={styles.chipText}>{chip.label}</Text>
            <TouchableOpacity
              onPress={chip.onRemove}
              activeOpacity={0.7}
              hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
              style={styles.removeBtn}
            >
              <CloseIconSvg width={10} height={10} />
            </TouchableOpacity>
          </View>
        ))}

        <TouchableOpacity
          onPress={onClearAll}
          activeOpacity={0.75}
          style={styles.clearAllBtn}
        >
          <Text style={styles.clearAllText}>Clear All</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
  },
  scrollContent: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.purpleBg,
    borderColor: theme.colors.purple,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    gap: 6,
  },
  chipText: {
    fontFamily: theme.fonts.medium,
    fontSize: 11,
    color: theme.colors.purple,
  },
  removeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearAllBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 16,
    backgroundColor: theme.colors.bgLight,
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
  },
  clearAllText: {
    fontFamily: theme.fonts.bold,
    fontSize: 11,
    color: theme.colors.slateGray,
  },
});
