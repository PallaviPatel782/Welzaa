import { StyleSheet } from 'react-native';
import { theme } from '../../../../config/theme';

export const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 60,
  },
  detailCard: {
    backgroundColor: theme.colors.softPurpleBg,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
  },
  detailHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  detailTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.dark,
    marginBottom: 2,
  },
  detailDate: {
    fontFamily: theme.fonts.medium,
    fontSize: 11,
    color: theme.colors.gray,
  },
  actionIconsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  actionIconBtn: {
    padding: 4,
  },
  detailBodyText: {
    fontFamily: theme.fonts.regular,
    fontSize: 13.5,
    color: theme.colors.darkText,
    lineHeight: 20,
    marginTop: 8,
  },
  sectionLabel: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.dark,
    marginBottom: 8,
    marginTop: 12,
  },
  moodDisplayRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  selectedGifImage: {
    width: 32,
    height: 32,
  },
  selectedMoodName: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13.5,
    color: theme.colors.dark,
  },
  tagPillGreen: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.accentLime,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagTextGreen: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: theme.colors.white,
  },
});
