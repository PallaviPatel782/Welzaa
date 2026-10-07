import { StyleSheet } from 'react-native';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlayDark,
    justifyContent: 'flex-end',
  },
  sheetCard: {
    width: '100%',
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 12,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 10,
  },
  safeArea: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 16,
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  illustrationWrapper: {
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.black,
    textAlign: 'center',
    marginBottom: 12,
  },
  description1: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.gray,
    textAlign: 'center',
    lineHeight: 20,
  },
  description2: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.gray,
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 8,
    marginBottom: 24,
  },
  button: {
    width: '100%',
  },
});
