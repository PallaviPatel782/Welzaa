import { StyleSheet } from 'react-native';
import { theme } from '../../../../config/theme';

export const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 40,
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 28,
  },
  logoImage: {
    width: 200,
    height: 70,
  },
  contentContainer: {
    marginTop: 4,
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
  },
  taglineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
  },
  taglineText: {
    fontFamily: theme.fonts.bold,
    fontSize: 14.5,
    color: theme.colors.dark,
    lineHeight: 22,
  },
});
