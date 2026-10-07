import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import ChevronLeftSvg from '../../assets/icons/chevronLeft.svg';
import ChevronRightSvg from '../../assets/icons/chevronRight.svg';
import CalendarIconSvg from '../../assets/icons/calendarIcon.svg';
import { theme } from '../../config/theme';

export interface FutureDatePickerModalProps {
  visible: boolean;
  onClose: () => void;
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  minDate?: Date;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const FutureDatePickerModal: React.FC<FutureDatePickerModalProps> = ({
  visible,
  onClose,
  selectedDate,
  onDateSelect,
  minDate = new Date(),
}) => {
  const [viewDate, setViewDate] = useState<Date>(selectedDate || new Date());
  const [tempSelectedDate, setTempSelectedDate] = useState<Date>(selectedDate || new Date());

  useEffect(() => {
    if (visible) {
      const initial = selectedDate || new Date();
      setViewDate(initial);
      setTempSelectedDate(initial);
    }
  }, [visible, selectedDate]);

  const handlePrevMonth = () => {
    const prev = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
    const todayMonth = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
    if (prev >= todayMonth) {
      setViewDate(prev);
    }
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const isPastDate = (year: number, month: number, day: number) => {
    const target = new Date(year, month, day);
    const today = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
    return target < today;
  };

  const isSameDay = (d1: Date, year: number, month: number, day: number) => {
    return (
      d1.getDate() === day &&
      d1.getMonth() === month &&
      d1.getFullYear() === year
    );
  };

  const handleSelectDay = (day: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    if (isPastDate(year, month, day)) return;

    const newDate = new Date(year, month, day);
    setTempSelectedDate(newDate);
  };

  const handleConfirm = () => {
    onDateSelect(tempSelectedDate);
    onClose();
  };

  const getDaysGrid = () => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();

    const firstDayIndex = (new Date(year, month, 1).getDay() + 6) % 7;
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();

    const grid = [];

    for (let i = firstDayIndex - 1; i >= 0; i--) {
      grid.push({ day: prevMonthDays - i, isCurrentMonth: false });
    }

    for (let d = 1; d <= totalDaysInMonth; d++) {
      grid.push({ day: d, isCurrentMonth: true });
    }

    const remainingSlots = (7 - (grid.length % 7)) % 7;
    for (let n = 1; n <= remainingSlots; n++) {
      grid.push({ day: n, isCurrentMonth: false });
    }

    return grid;
  };

  const isPrevDisabled = () => {
    const prev = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1);
    const todayMonth = new Date(minDate.getFullYear(), minDate.getMonth(), 1);
    return prev < todayMonth;
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Header */}
          <View style={styles.calendarHeader}>
            <View style={styles.monthYearBox}>
              <CalendarIconSvg width={18} height={18} color={theme.colors.purple} />
              <Text style={styles.monthYearText}>
                {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
              </Text>
            </View>

            <View style={styles.navButtons}>
              <TouchableOpacity
                style={[styles.navButton, isPrevDisabled() && styles.disabledNavButton]}
                disabled={isPrevDisabled()}
                onPress={handlePrevMonth}
              >
                <ChevronLeftSvg width={14} height={14} color={isPrevDisabled() ? theme.colors.lightGray : theme.colors.dark} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.navButton} onPress={handleNextMonth}>
                <ChevronRightSvg width={14} height={14} color={theme.colors.dark} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Weekdays Row */}
          <View style={styles.weekDaysRow}>
            {WEEKDAYS.map((w) => (
              <Text key={w} style={styles.weekDayText}>
                {w}
              </Text>
            ))}
          </View>

          {/* Days Grid */}
          <View style={styles.daysGrid}>
            {getDaysGrid().map((item, index) => {
              const year = viewDate.getFullYear();
              const month = viewDate.getMonth();
              const disabled = !item.isCurrentMonth || isPastDate(year, month, item.day);
              const selected = item.isCurrentMonth && isSameDay(tempSelectedDate, year, month, item.day);

              return (
                <View key={index} style={styles.dayCellContainer}>
                  <TouchableOpacity
                    disabled={disabled}
                    style={[
                      styles.dayCell,
                      selected && styles.selectedDayCell,
                      disabled && styles.disabledDayCell,
                    ]}
                    onPress={() => handleSelectDay(item.day, item.isCurrentMonth)}
                  >
                    <Text
                      style={[
                        styles.dayText,
                        disabled && styles.disabledDayText,
                        selected && styles.selectedDayText,
                      ]}
                    >
                      {item.day}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          {/* Modal Footer */}
          <View style={styles.modalFooter}>
            <TouchableOpacity style={[styles.modalButton, styles.cancelButton]} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.modalButton, styles.confirmButton]} onPress={handleConfirm}>
              <Text style={styles.confirmButtonText}>Select Date</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: theme.colors.white,
    borderRadius: 24,
    width: '100%',
    padding: 20,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  monthYearBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  monthYearText: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.dark,
  },
  navButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  navButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: theme.colors.bgLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledNavButton: {
    opacity: 0.4,
  },
  weekDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderLight,
    paddingBottom: 8,
  },
  weekDayText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: theme.colors.gray,
    width: 36,
    textAlign: 'center',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  dayCellContainer: {
    width: '14.28%',
    alignItems: 'center',
    marginVertical: 4,
  },
  dayCell: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.bgLight,
  },
  selectedDayCell: {
    backgroundColor: theme.colors.purple,
  },
  disabledDayCell: {
    backgroundColor: 'transparent',
    opacity: 0.35,
  },
  dayText: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.dark,
  },
  selectedDayText: {
    color: theme.colors.white,
  },
  disabledDayText: {
    color: theme.colors.lightGray,
  },
  modalFooter: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButton: {
    backgroundColor: theme.colors.bgLight,
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
  },
  cancelButtonText: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.darkText,
  },
  confirmButton: {
    backgroundColor: theme.colors.purple,
  },
  confirmButtonText: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.white,
  },
});
