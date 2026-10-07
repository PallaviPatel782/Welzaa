import { StyleSheet } from 'react-native';
import { theme } from '../../../../config/theme';

export const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  expertRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 12,
  },
  avatarBox: {
    width: 54,
    height: 54,
    borderRadius: 27,
    overflow: 'hidden',
    backgroundColor: theme.colors.softPurpleBg,
  },
  badgeOverlay: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
  },
  expertTextCol: {
    flex: 1,
  },
  expertTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.dark,
    marginBottom: 2,
  },
  doctorName: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.gray,
    marginBottom: 1,
  },
  specialty: {
    fontFamily: theme.fonts.regular,
    fontSize: 11.5,
    color: theme.colors.gray,
  },
  
  // Download Invoice Button
  downloadInvoiceBtn: {
    backgroundColor: '#95DB00',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1.5,
    borderColor: '#0F172A',
    borderBottomWidth: 3.5,
    borderBottomColor: '#0F172A',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  downloadInvoiceText: {
    fontFamily: theme.fonts.bold,
    fontSize: 11.5,
    color: '#000000',
  },

  statusBadge: {
    backgroundColor: '#95DB00',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderWidth: 1.5,
    borderColor: '#0F172A',
    borderBottomWidth: 3.5,
    borderBottomColor: '#0F172A',
    alignSelf: 'flex-start',
  },
  statusText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: '#000000',
  },

  divider: {
    height: 1,
    backgroundColor: theme.colors.borderLight,
    marginVertical: 16,
  },

  // 3-Column Grid Layout for Date/Time, Duration, Mode
  gridContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.colors.borderLight,
    marginTop: 16,
    marginBottom: 16,
  },
  gridCol: {
    flex: 1,
    alignItems: 'flex-start',
  },
  gridColCenter: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 12,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: theme.colors.borderLight,
  },
  gridColRight: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 12,
  },
  gridLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4,
  },
  gridLabel: {
    fontFamily: theme.fonts.medium,
    fontSize: 11.5,
    color: theme.colors.gray,
  },
  gridValue: {
    fontFamily: theme.fonts.semibold,
    fontSize: 11,
    color: theme.colors.dark,
  },

  // Existing Details List for Upcoming
  detailsList: {
    gap: 14,
    marginBottom: 16,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftLabelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  detailLabel: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.gray,
  },
  detailValue: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13,
    color: theme.colors.dark,
  },

  // Note Box for Upcoming
  noteBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.softCream,
    borderRadius: 12,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: theme.colors.amberStar,
    gap: 8,
  },
  noteIcon: {
    marginTop: 2,
  },
  noteText: {
    flex: 1,
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.darkText,
    lineHeight: 17,
  },

  // Completed Session Summary Box
  summaryBox: {
    backgroundColor: theme.colors.softCream,
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: theme.colors.amberStar,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
  },
  summaryContent: {
    flex: 1,
  },
  summaryTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.dark,
    marginBottom: 4,
  },
  summaryText: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.darkText,
    lineHeight: 17,
  },

  // Goals & Action Plan Section
  goalsSection: {
    marginTop: 8,
  },
  goalsHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  goalsTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.dark,
  },
  goalItem: {
    paddingVertical: 10,
  },
  goalDivider: {
    height: 1,
    backgroundColor: theme.colors.borderLight,
  },
  goalItemTitle: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.dark,
    marginBottom: 2,
  },
  goalItemSubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 11.5,
    color: theme.colors.gray,
  },

  // Red Cancelled Alert Box
  cancelledAlertBox: {
    backgroundColor: '#FEF2F2',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#FECDD3',
  },
  cancelledAlertTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: '#DC2626',
    marginBottom: 2,
  },
  cancelledAlertSubtext: {
    fontFamily: theme.fonts.regular,
    fontSize: 11.5,
    color: '#991B1B',
  },

  // Reason for Cancellation Header
  reasonHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginBottom: 10,
  },
  reasonHeaderTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 13.5,
    color: theme.colors.dark,
  },
  reasonHeaderSubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 11.5,
    color: theme.colors.gray,
    marginTop: 1,
  },
  reasonCardBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 14,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  reasonIconBox: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#F8FAFC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  reasonTextCol: {
    flex: 1,
  },
  reasonTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.dark,
  },
  reasonSubtext: {
    fontFamily: theme.fonts.regular,
    fontSize: 11,
    color: theme.colors.gray,
    marginTop: 1,
  },

  // Additional Note Container
  noteDisplayContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    padding: 12,
    minHeight: 100,
    justifyContent: 'space-between',
  },
  noteDisplayText: {
    fontFamily: theme.fonts.regular,
    fontSize: 12.5,
    color: theme.colors.dark,
    lineHeight: 17,
  },
  noteCounterText: {
    alignSelf: 'flex-end',
    fontFamily: theme.fonts.regular,
    fontSize: 11,
    color: theme.colors.gray,
  },

  // Action Buttons Row
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  joinButton: {
    flex: 1.2,
    backgroundColor: '#95DB00',
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: '#0F172A',
    borderBottomWidth: 3.5,
    borderBottomColor: '#0F172A',
  },
  joinButtonText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12.5,
    color: '#000000',
  },
  outlinedButton: {
    flex: 1,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.slateGray,
  },
  outlinedButtonText: {
    fontFamily: theme.fonts.medium,
    fontSize: 11.5,
    color: theme.colors.dark,
  },
});
