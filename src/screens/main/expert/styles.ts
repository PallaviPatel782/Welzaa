import { StyleSheet } from 'react-native';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.bgLight,
  },
  topSection: {
    backgroundColor: theme.colors.headerBlue,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    elevation: 3,
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  listContainer: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 32,
    marginTop: 15,
  },
  activeFilterHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  activeFilterTitle: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.dark,
    flex: 1,
  },
  activeFilterHighlight: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.purple,
  },
  clearCategoryBtn: {
    backgroundColor: theme.colors.lightBlue,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginLeft: 8,
  },
  clearCategoryText: {
    fontFamily: theme.fonts.bold,
    fontSize: 11,
    color: theme.colors.blueText,
  },
  emptyContainer: {
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.dark,
    marginBottom: 6,
  },
  emptySubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.gray,
    textAlign: 'center',
  },
});
