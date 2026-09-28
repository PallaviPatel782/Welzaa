import { StyleSheet } from 'react-native';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.cream,
  },
  scrollBody: {
    flex: 1,
    backgroundColor: theme.colors.cream,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 24,
  },
  topHeaderBackground: {
    backgroundColor: theme.colors.cream,
    zIndex: 10,
    elevation: 2,
  },
  topSafeArea: {
    backgroundColor: theme.colors.cream,
  },
  bodyContent: {
    backgroundColor: theme.colors.cream,
  },
});
