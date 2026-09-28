import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../config/theme';

import CounselingSvg from '../../assets/icons/Counseling.svg';
import RelationshipsSvg from '../../assets/icons/Relationships.svg';
import NutritionSvg from '../../assets/icons/Nutrition.svg';
import FitnessSvg from '../../assets/icons/Fitness.svg';
import EducationSvg from '../../assets/icons/Education.svg';
import CareerSvg from '../../assets/icons/Career.svg';
import LegalSvg from '../../assets/icons/Legal.svg';
import MoreSvg from '../../assets/icons/more.svg';

export interface CategoryItem {
  id: string;
  label: string;
  Icon: React.FC<any>;
  bgColor: string;
}

const CATEGORIES: CategoryItem[] = [
  { id: 'counseling', label: 'Counseling', Icon: CounselingSvg, bgColor: theme.colors.softMint },
  { id: 'relationships', label: 'Relationships', Icon: RelationshipsSvg, bgColor: theme.colors.softRose },
  { id: 'nutrition', label: 'Nutrition', Icon: NutritionSvg, bgColor: theme.colors.softSage },
  { id: 'fitness', label: 'Fitness', Icon: FitnessSvg, bgColor: theme.colors.softPeriwinkle },
  { id: 'education', label: 'Education', Icon: EducationSvg, bgColor: theme.colors.softSkyBlue },
  { id: 'career', label: 'Career', Icon: CareerSvg, bgColor: theme.colors.softLavender },
  { id: 'legal', label: 'Legal', Icon: LegalSvg, bgColor: theme.colors.softWarmYellow },
  { id: 'more', label: 'More', Icon: MoreSvg, bgColor: theme.colors.softAmber },
];

interface ExploreCategoriesGridProps {
  onSelectCategory?: (category: CategoryItem) => void;
}

export const ExploreCategoriesGrid: React.FC<ExploreCategoriesGridProps> = ({
  onSelectCategory,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Explore Categories</Text>

      <View style={styles.grid}>
        {CATEGORIES.map((cat) => {
          const IconComp = cat.Icon;
          return (
            <TouchableOpacity
              key={cat.id}
              style={[styles.card, { backgroundColor: cat.bgColor }]}
              activeOpacity={0.8}
              onPress={() => onSelectCategory && onSelectCategory(cat)}
            >
              <View style={styles.iconWrapper}>
                <IconComp width={32} height={32} />
              </View>
              <Text style={styles.label} numberOfLines={1}>
                {cat.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.black,
    marginBottom: 14,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '23%',
    aspectRatio: 1,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    marginBottom: 12,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  iconWrapper: {
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  label: {
    fontFamily: theme.fonts.semibold,
    fontSize: 11,
    color: theme.colors.black,
    textAlign: 'center',
  },
});
