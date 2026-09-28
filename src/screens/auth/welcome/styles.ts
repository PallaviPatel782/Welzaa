import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.sm,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
  },
  slide: {
    width: SCREEN_WIDTH,
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    justifyContent: 'center',
  },
  illustrationWrapper: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 24,
    color: theme.colors.black,
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 12,
  },
  description: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.gray,
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 16,
  },
  footer: {
    paddingHorizontal: theme.spacing.xl,
    paddingBottom: 80,
    alignItems: 'center',
    zIndex: 10,
  },
  skipContainer: {
    marginTop: 12,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  skipText: {
    fontFamily: theme.fonts.semibold,
    color: theme.colors.purple,
    fontSize: 14,
  },
  skipPlaceholder: {
    height: 24,
  },
});
