import { StyleSheet } from 'react-native';
import { theme } from '../../../../config/theme';

export const styles = StyleSheet.create({
  scrollContent: {
    padding: 16,
    gap: 14,
  },
  cardSection: {
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.navy,
  },
  radioOptionRow: {
    flexDirection: 'row',
    gap: 24,
    marginTop: 12,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.purple,
  },
  radioText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 14,
    color: theme.colors.darkText,
  },
  dateHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  monthText: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.gray,
  },
  calendarIconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FAF5FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateStripScroll: {
    gap: 10,
  },
  dateCard: {
    width: 68,
    height: 78,
    borderRadius: 14,
    backgroundColor: theme.colors.cream,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 6,
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
  },
  dateCardDisabled: {
    opacity: 0.5,
  },
  dateCardSelected: {
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.purple,
  },
  dayName: {
    fontFamily: theme.fonts.medium,
    fontSize: 10,
    color: theme.colors.gray,
  },
  dayNum: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: theme.colors.navy,
    marginVertical: 2,
  },
  subText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 9.5,
    color: theme.colors.gray,
  },
  subTextGreen: {
    color: '#10B981',
  },
  textWhite: {
    color: theme.colors.white,
  },
  textGreen: {
    color: '#10B981',
  },
  slotHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  slotHeaderSubtext: {
    fontFamily: theme.fonts.medium,
    fontSize: 11,
    color: theme.colors.gray,
  },
  slotsBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#FAF5FF',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  slotsBadgeText: {
    fontFamily: theme.fonts.bold,
    fontSize: 11,
    color: theme.colors.purple,
  },
  timeGroup: {
    marginBottom: 16,
  },
  timeGroupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 10,
  },
  timeGroupTitle: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13,
    color: theme.colors.navy,
  },
  slotButtonsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  slotPill: {
    flex: 1,
    height: 42,
    borderRadius: 12,
    backgroundColor: theme.colors.cream,
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  slotPillSelected: {
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.purple,
  },
  slotPillDisabled: {
    backgroundColor: '#F3F4F6',
    borderColor: '#E5E7EB',
  },
  fastestTag: {
    position: 'absolute',
    top: -9,
    backgroundColor: '#FEF08A',
    paddingVertical: 1,
    paddingHorizontal: 6,
    borderRadius: 8,
  },
  fastestTagText: {
    fontFamily: theme.fonts.bold,
    fontSize: 8.5,
    color: '#854D0E',
  },
  slotText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12.5,
    color: theme.colors.navy,
  },
  slotTextDisabled: {
    color: '#9CA3AF',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  calendarModalCard: {
    width: '100%',
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 20,
  },
  calendarLegendRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.gray,
  },
  calendarMonthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  calendarMonthTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.navy,
  },
  monthNavButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  monthNavBtn: {
    padding: 4,
  },
  calendarGridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  calendarDayHeader: {
    width: 36,
    textAlign: 'center',
    fontFamily: theme.fonts.medium,
    fontSize: 11,
    color: theme.colors.gray,
  },
  calendarGridDates: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  calendarDateCell: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  calendarDateCellSelected: {
    backgroundColor: theme.colors.purple,
  },
  calendarDateText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13,
    color: theme.colors.darkText,
  },
  bottomFooter: {
    padding: 16,
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderLight,
  },
});
