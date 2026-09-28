import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  ScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import ChevronLeftSvg from '../../../assets/icons/chevronLeft.svg';
import ChevronRightSvg from '../../../assets/icons/chevronRight.svg';
import CalendarIconSvg from '../../../assets/icons/calendarIcon.svg';
import { theme } from '../../../config/theme';
import { styles } from './styles';

export interface CustomDatePickerProps {
  label?: string;
  placeholder?: string;
  value?: Date | null;
  onDateSelect: (date: Date, formattedDate: string) => void;
  error?: string;
  style?: StyleProp<ViewStyle>;
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

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let y = currentYear; y >= 1940; y--) {
    years.push(y);
  }
  return years;
};

const YEARS = generateYears();

export const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label = 'Date of Birth',
  placeholder = 'DD / MM / YYYY',
  value,
  onDateSelect,
  error,
  style,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [viewMode, setViewMode] = useState<'calendar' | 'picker'>('calendar');

  const initialDate = value || new Date(2000, 11, 15);
  const [viewDate, setViewDate] = useState<Date>(initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);

  useEffect(() => {
    if (value) {
      setSelectedDate(value);
      setViewDate(value);
    }
  }, [value]);

  const formatDisplayDate = (d: Date | null) => {
    if (!d) return '';
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day} / ${month} / ${year}`;
  };

  const handleOpen = () => {
    const initial = selectedDate || value || new Date(2000, 11, 15);
    setViewDate(initial);
    setViewMode('calendar');
    setModalVisible(true);
  };

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleSelectDay = (day: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth) return;
    const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
    setSelectedDate(newDate);
  };

  const handleSelectMonth = (monthIdx: number) => {
    const currentYear = viewDate.getFullYear();
    const currentDay = selectedDate ? selectedDate.getDate() : viewDate.getDate();
    const maxDays = new Date(currentYear, monthIdx + 1, 0).getDate();
    const validDay = Math.min(currentDay, maxDays);

    const updatedDate = new Date(currentYear, monthIdx, validDay);
    setViewDate(updatedDate);
    setSelectedDate(updatedDate);
    setViewMode('calendar');
  };

  const handleSelectYear = (year: number) => {
    const currentMonth = viewDate.getMonth();
    const currentDay = selectedDate ? selectedDate.getDate() : viewDate.getDate();
    const maxDays = new Date(year, currentMonth + 1, 0).getDate();
    const validDay = Math.min(currentDay, maxDays);

    const updatedDate = new Date(year, currentMonth, validDay);
    setViewDate(updatedDate);
    setSelectedDate(updatedDate);
    setViewMode('calendar');
  };

  const handleConfirm = () => {
    const finalDate = selectedDate || viewDate;
    onDateSelect(finalDate, formatDisplayDate(finalDate));
    setSelectedDate(finalDate);
    setModalVisible(false);
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

  const isDaySelected = (day: number, isCurrentMonth: boolean) => {
    if (!isCurrentMonth || !selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === viewDate.getMonth() &&
      selectedDate.getFullYear() === viewDate.getFullYear()
    );
  };

  return (
    <View style={[styles.fieldContainer, style]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity
        style={[styles.inputBox, error ? styles.inputBoxError : null]}
        activeOpacity={0.8}
        onPress={handleOpen}
      >
        <CalendarIconSvg width={20} height={20} color={theme.colors.gray} style={styles.calendarIcon} />

        <Text style={[styles.inputText, !selectedDate && styles.placeholderText]}>
          {selectedDate ? formatDisplayDate(selectedDate) : placeholder}
        </Text>
      </TouchableOpacity>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.calendarHeader}>
              <TouchableOpacity
                style={styles.monthYearSelector}
                onPress={() => setViewMode(viewMode === 'calendar' ? 'picker' : 'calendar')}
              >
                <Text style={styles.monthYearText}>
                  {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
                </Text>
                {viewMode === 'calendar' ? (
                  <ChevronRightSvg width={16} height={16} style={{ marginLeft: 4 }} />
                ) : (
                  <ChevronLeftSvg width={16} height={16} style={{ marginLeft: 4 }} />
                )}
              </TouchableOpacity>

              {viewMode === 'calendar' && (
                <View style={styles.navButtons}>
                  <TouchableOpacity style={styles.navButton} onPress={handlePrevMonth}>
                    <ChevronLeftSvg width={16} height={16} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.navButton} onPress={handleNextMonth}>
                    <ChevronRightSvg width={16} height={16} />
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {viewMode === 'calendar' ? (
              <>
                <View style={styles.weekDaysRow}>
                  {WEEKDAYS.map((w) => (
                    <Text key={w} style={styles.weekDayText}>
                      {w}
                    </Text>
                  ))}
                </View>

                <View style={styles.daysGrid}>
                  {getDaysGrid().map((item, index) => {
                    const selected = isDaySelected(item.day, item.isCurrentMonth);
                    return (
                      <View key={index} style={styles.dayCellContainer}>
                        <TouchableOpacity
                          disabled={!item.isCurrentMonth}
                          style={[styles.dayCell, selected && styles.selectedDayCell]}
                          onPress={() => handleSelectDay(item.day, item.isCurrentMonth)}
                        >
                          <Text
                            style={[
                              styles.dayText,
                              !item.isCurrentMonth && styles.mutedDayText,
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
              </>
            ) : (
              <View style={styles.pickerContainer}>
                <View style={styles.pickerColumn}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {MONTHS.map((m, idx) => {
                      const isSelected = viewDate.getMonth() === idx;
                      return (
                        <TouchableOpacity
                          key={m}
                          style={[styles.pickerItem, isSelected && styles.selectedPickerItem]}
                          onPress={() => handleSelectMonth(idx)}
                        >
                          <Text
                            style={[
                              styles.pickerItemText,
                              isSelected && styles.selectedPickerItemText,
                            ]}
                          >
                            {m}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>

                <View style={styles.pickerColumn}>
                  <ScrollView showsVerticalScrollIndicator={false}>
                    {YEARS.map((y) => {
                      const isSelected = viewDate.getFullYear() === y;
                      return (
                        <TouchableOpacity
                          key={y}
                          style={[styles.pickerItem, isSelected && styles.selectedPickerItem]}
                          onPress={() => handleSelectYear(y)}
                        >
                          <Text
                            style={[
                              styles.pickerItemText,
                              isSelected && styles.selectedPickerItemText,
                            ]}
                          >
                            {y}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
            )}

            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.confirmButton]}
                onPress={handleConfirm}
              >
                <Text style={styles.confirmButtonText}>Select</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
