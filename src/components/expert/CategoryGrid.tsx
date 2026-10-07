import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ALL_CATEGORIES } from '../../mock/expertMockData';
import { CategoryOption, FilterCriteria } from '../../types';
import { theme } from '../../config/theme';
import { CategoryTile } from './CategoryTile';
import { AppText } from '../common';

interface CategoryGridProps {
  onSelectCategory?: (category: CategoryOption) => void;
  filterQuery?: string;
  activeFilters?: FilterCriteria | null;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  onSelectCategory,
  filterQuery,
  activeFilters,
}) => {
  const filteredCategories = useMemo(() => {
    let result = ALL_CATEGORIES;

    if (filterQuery && filterQuery.trim()) {
      const query = filterQuery.toLowerCase().trim();
      result = result.filter((cat) =>
        cat.name.toLowerCase().includes(query)
      );
    }

    if (activeFilters?.specializations && activeFilters.specializations.length > 0) {
      const specs = activeFilters.specializations.map((s) => s.toLowerCase());
      result = result.filter((cat) =>
        specs.some((s) => s.includes(cat.name.toLowerCase()) || cat.name.toLowerCase().includes(s))
      );
    }

    return result;
  }, [filterQuery, activeFilters]);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Category</Text>

      {filteredCategories.length > 0 ? (
        <View style={styles.gridContainer}>
          {filteredCategories.map((cat) => (
            <CategoryTile
              key={cat.id}
              category={cat}
              onPress={onSelectCategory}
            />
          ))}
        </View>
      ) : (
        <View style={styles.emptyContainer}>
          <AppText style={styles.emptyText}>No categories found</AppText>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 6,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.dark,
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    columnGap: 8,
    rowGap: 12,
  },
  emptyContainer: {
    paddingVertical: 30,
    alignItems: 'center',
  },
  emptyText: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.gray,
  },
});
