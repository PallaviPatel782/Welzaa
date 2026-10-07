import { StyleSheet, Dimensions } from 'react-native';
import { theme } from '../../../config/theme';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const styles = StyleSheet.create({
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13,
    color: theme.colors.black,
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 46,
    backgroundColor: theme.colors.white,
  },
  inputBoxError: {
    borderColor: theme.colors.red,
  },
  calendarIcon: {
    marginRight: 12,
  },
  inputText: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.black,
    flex: 1,
  },
  placeholderText: {
    color: theme.colors.gray,
  },
  errorText: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.red,
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: theme.colors.overlayDark,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  modalContent: {
    width: Math.min(SCREEN_WIDTH - 32, 360),
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 20,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  calendarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  monthYearSelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  monthYearText: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: theme.colors.black,
    marginRight: 6,
  },
  navButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navButton: {
    padding: 8,
    marginHorizontal: 2,
  },
  weekDaysRow: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderGray,
    paddingBottom: 8,
  },
  weekDayText: {
    width: '14.28%',
    textAlign: 'center',
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.gray,
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCellContainer: {
    width: '14.28%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 2,
  },
  dayCell: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
  },
  selectedDayCell: {
    backgroundColor: theme.colors.purple,
  },
  dayText: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.black,
  },
  mutedDayText: {
    color: theme.colors.lightGray,
  },
  selectedDayText: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
  },
  pickerContainer: {
    flexDirection: 'row',
    height: 260,
    marginTop: 8,
  },
  pickerColumn: {
    flex: 1,
    paddingHorizontal: 4,
  },
  pickerItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 2,
  },
  selectedPickerItem: {
    backgroundColor: theme.colors.purple,
  },
  pickerItemText: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.black,
  },
  selectedPickerItemText: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderGray,
  },
  modalButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginLeft: 8,
  },
  cancelButton: {
    backgroundColor: theme.colors.borderGray,
  },
  confirmButton: {
    backgroundColor: theme.colors.purple,
  },
  cancelButtonText: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.gray,
  },
  confirmButtonText: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.white,
  },
});
