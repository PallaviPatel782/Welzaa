import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../config/theme';
import SearchIconSvg from '../../assets/icons/searchIcon.svg';
import FilterIconSvg from '../../assets/icons/filterIcon.svg';

interface ExpertSearchBarProps {
  searchText: string;
  onChangeText: (text: string) => void;
  onFilterPress: () => void;
}

export const ExpertSearchBar: React.FC<ExpertSearchBarProps> = ({
  searchText,
  onChangeText,
  onFilterPress,
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
        />
      </View>

      <TouchableOpacity
        style={styles.filterButton}
        activeOpacity={0.8}
        onPress={onFilterPress}
      >
        <FilterIconSvg width={20} height={20} color={theme.colors.dark} />
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
    height: 40,
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
    width: 40,
    height: 40,
    borderRadius: 20,
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
