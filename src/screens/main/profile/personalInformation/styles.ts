import { StyleSheet } from 'react-native';
import { theme } from '../../../../config/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 24,
  },
  introText: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.subtextSlate,
    marginBottom: 16,
  },
  bottomButtonContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderLight,
  },
});
