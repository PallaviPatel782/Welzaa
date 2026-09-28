import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import { theme } from '../../config/theme';
import SearchIconSvg from '../../assets/icons/searchIcon.svg';

interface ExpertSearchBarProps {
  searchText: string;
  onChangeText: (text: string) => void;
  onFilterPress: () => void;
  onCategorySearchPress?: () => void;
}

export const ExpertSearchBar: React.FC<ExpertSearchBarProps> = ({
  searchText,
  onChangeText,
  onFilterPress,
  onCategorySearchPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBox}>
        <SearchIconSvg width={18} height={18} color={theme.colors.gray} />
        <TextInput
          style={styles.input}
          placeholder="Search by Categories"
          placeholderTextColor={theme.colors.slateGray}
          value={searchText}
          onChangeText={onChangeText}
          onFocus={onCategorySearchPress}
        />
      </View>

      <TouchableOpacity
        style={styles.filterButton}
        activeOpacity={0.8}
        onPress={onFilterPress}
      >
        <Svg width={20} height={20} viewBox="0 0 24 24" fill="none">
          <Path
            d="M4 6H20M4 12H20M4 18H20"
            stroke={theme.colors.dark}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <Circle cx="8" cy="6" r="2.5" fill={theme.colors.accentLime} stroke={theme.colors.dark} strokeWidth="2" />
          <Circle cx="16" cy="12" r="2.5" fill={theme.colors.accentLime} stroke={theme.colors.dark} strokeWidth="2" />
          <Circle cx="10" cy="18" r="2.5" fill={theme.colors.accentLime} stroke={theme.colors.dark} strokeWidth="2" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 46,
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    elevation: 2,
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.dark,
    paddingVertical: 0,
  },
  filterButton: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: theme.colors.accentLime,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
  },
});
