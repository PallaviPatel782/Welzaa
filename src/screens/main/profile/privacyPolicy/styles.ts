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
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.dark,
    marginBottom: 6,
  },
  paragraph: {
    fontFamily: theme.fonts.regular,
    fontSize: 13.5,
    color: theme.colors.darkText,
    lineHeight: 20,
    marginBottom: 6,
  },
  bulletList: {
    paddingLeft: 6,
    gap: 4,
    marginTop: 4,
  },
  bulletItem: {
    fontFamily: theme.fonts.regular,
    fontSize: 13,
    color: theme.colors.black,
    lineHeight: 19,
  },
  contactContainer: {
    marginTop: 10,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: theme.colors.dividerBorder,
  },
  contactTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.dark,
    marginBottom: 6,
  },
  contactSubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 13.5,
    color: theme.colors.darkText,
    lineHeight: 19,
    marginBottom: 12,
  },
  contactCompany: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.dark,
    marginBottom: 10,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  contactItem: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.darkText,
  },
  contactFooter: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.gray,
    marginTop: 12,
    lineHeight: 17,
  },
});
