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
  offerBannerContainer: {
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 8,
    borderRadius: 18,
    overflow: 'hidden',
    position: 'relative',
    height: 110,
    elevation: 3,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  offerBannerImage: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
  offerBannerJoinButton: {
    position: 'absolute',
    bottom: 12,
    right: 14,
    backgroundColor: theme.colors.white,
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 20,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  offerBannerJoinText: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: '#D93829',
  },
});
