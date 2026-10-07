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
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.dark,
  },
  sectionSubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.gray,
  },
  inputTitle: {
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.dark,
    backgroundColor: theme.colors.white,
    marginBottom: 12,
  },
  textAreaContainer: {
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    borderRadius: 14,
    padding: 14,
    backgroundColor: theme.colors.white,
    marginBottom: 16,
    minHeight: 140,
    justifyContent: 'space-between',
  },
  textArea: {
    fontFamily: theme.fonts.regular,
    fontSize: 13.5,
    color: theme.colors.dark,
    textAlignVertical: 'top',
    flex: 1,
    minHeight: 100,
  },
  charCount: {
    fontFamily: theme.fonts.medium,
    fontSize: 11,
    color: theme.colors.gray,
    alignSelf: 'flex-end',
  },
  bottomButtonContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
    backgroundColor: 'transparent',
  },
});
