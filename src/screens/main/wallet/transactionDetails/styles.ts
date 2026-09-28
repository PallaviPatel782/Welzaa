import { StyleSheet } from 'react-native';
import { theme } from '../../../../config/theme';

export const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 40,
  },
  detailCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 16,
  },
  detailProfileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  detailProfileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  detailAvatarImageContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
    backgroundColor: theme.colors.softMint,
  },
  transactionDetailsCol: {
    flex: 1,
  },
  detailTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.navy,
    marginBottom: 2,
  },
  detailSubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.gray,
  },
  statusBadgeGreen: {
    backgroundColor: theme.colors.greenBg,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
  },
  statusBadgeTextGreen: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: theme.colors.greenIcon,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.borderLight,
    marginBottom: 6,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  detailRowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailRowLabel: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.gray,
  },
  detailRowValue: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13,
    color: theme.colors.navy,
  },
  detailInfoCalloutBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.cardCream,
    borderRadius: 12,
    padding: 12,
    marginTop: 14,
    marginBottom: 0,
    gap: 10,
    borderWidth: 1,
    borderColor: theme.colors.softAmber,
  },
  infoCalloutText: {
    flex: 1,
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.darkText,
    lineHeight: 16,
  },
});
