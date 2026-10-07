import { StyleSheet } from 'react-native';
import { theme } from '../../../../config/theme';

export const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },
  heroBannerContainer: {
    height: 230,
    backgroundColor: theme.colors.heroBeige,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  articleTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 21,
    color: theme.colors.dark,
    lineHeight: 27,
    marginBottom: 6,
  },
  articleSubtitle: {
    fontFamily: theme.fonts.medium,
    fontSize: 13.5,
    color: theme.colors.gray,
    lineHeight: 18,
    marginBottom: 14,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 18,
  },
  readTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  readTimeText: {
    fontFamily: theme.fonts.medium,
    fontSize: 12.5,
    color: theme.colors.darkText,
  },
  categoryBadge: {
    backgroundColor: theme.colors.badgeGreen,
    paddingVertical: 5,
    paddingHorizontal: 14,
    borderRadius: 16,
  },
  categoryBadgeText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: theme.colors.badgeGreenText,
  },
  introText: {
    fontFamily: theme.fonts.regular,
    fontSize: 13.5,
    color: theme.colors.darkText,
    lineHeight: 20,
    marginBottom: 16,
  },
  dashedDivider: {
    height: 1,
    borderWidth: 1,
    borderColor: theme.colors.dividerBorder,
    borderStyle: 'dashed',
    marginVertical: 16,
  },
  sectionItem: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 14.5,
    color: theme.colors.dark,
    marginBottom: 4,
  },
  sectionContent: {
    fontFamily: theme.fonts.regular,
    fontSize: 13,
    color: theme.colors.darkText,
    lineHeight: 19,
  },
});
