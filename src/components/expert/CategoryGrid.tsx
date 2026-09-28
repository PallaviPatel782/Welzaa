import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ALL_CATEGORIES } from '../../mock/expertMockData';
import { CategoryOption } from '../../types';
import { theme } from '../../config/theme';
import { CategoryTile } from './CategoryTile';

interface CategoryGridProps {
  onSelectCategory?: (category: CategoryOption) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Category</Text>

      <View style={styles.gridContainer}>
        {ALL_CATEGORIES.map((cat) => (
          <CategoryTile
            key={cat.id}
            category={cat}
            onPress={onSelectCategory}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.dark,
    marginBottom: 16,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
