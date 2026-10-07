import { StyleSheet } from 'react-native';
import { theme } from '../../../../config/theme';

export const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  pageTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 22,
    color: theme.colors.dark,
    marginBottom: 4,
  },
  lastUpdated: {
    fontFamily: theme.fonts.semibold,
    fontSize: 12.5,
    color: theme.colors.gray,
    marginBottom: 14,
  },
  introParagraph: {
    fontFamily: theme.fonts.regular,
    fontSize: 13.5,
    color: theme.colors.darkText,
    lineHeight: 20,
    marginBottom: 20,
  },
  section: {
    marginBottom: 18,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.dark,
    marginBottom: 4,
  },
  paragraph: {
    fontFamily: theme.fonts.regular,
    fontSize: 13.5,
    color: theme.colors.darkText,
    lineHeight: 20,
  },
  footerNote: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.slateGray,
    marginTop: 20,
    lineHeight: 19,
  },
});
