import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { CategoryOption } from '../../types';
import { theme } from '../../config/theme';

interface CategoryTileProps {
  category: CategoryOption;
  isSelected?: boolean;
  onPress?: (category: CategoryOption) => void;
  style?: StyleProp<ViewStyle>;
  iconSize?: number;
}

export const CategoryTile: React.FC<CategoryTileProps> = ({
  category,
  isSelected = false,
  onPress,
  style,
  iconSize = 30,
}) => {
  const IconComponent = category.IconComp;

  return (
    <TouchableOpacity
      style={[
        styles.tileCard,
        { backgroundColor: category.bgColor },
        isSelected && styles.tileCardSelected,
        style,
      ]}
      activeOpacity={0.75}
      onPress={() => onPress && onPress(category)}
    >
      <View style={styles.iconWrapper}>
        <IconComponent width={iconSize} height={iconSize} />
      </View>
      <Text style={styles.tileLabel} numberOfLines={1}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tileCard: {
    width: '23%',
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    borderWidth: 2,
    borderColor: 'transparent',
    marginBottom: 12,
  },
  tileCardSelected: {
    borderColor: theme.colors.blueText,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  tileLabel: {
    fontFamily: theme.fonts.bold,
    fontSize: 10,
    color: theme.colors.dark,
    textAlign: 'center',
  },
});
