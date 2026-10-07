import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import CalendarIconSvg from '../../assets/icons/calendarIcon.svg';
import ClockIconSvg from '../../assets/icons/clockIcon.svg';
import VideoIconSvg from '../../assets/icons/videoIcon.svg';

interface SessionGridDetailsProps {
  dateTime?: string;
  duration?: string;
  mode?: string;
}

export const SessionGridDetails: React.FC<SessionGridDetailsProps> = ({
  dateTime = '16 Sep 2026, 06:00 PM',
  duration = '45 Minutes',
  mode = 'Online Session',
}) => {
  return (
    <View style={styles.gridContainer}>
      <View style={styles.gridCol}>
        <View style={styles.gridLabelRow}>
          <CalendarIconSvg width={14} height={14} color={theme.colors.purple} />
          <AppText style={styles.gridLabel}>Date & Time</AppText>
        </View>
        <AppText style={styles.gridValue}>{dateTime}</AppText>
      </View>

      <View style={styles.gridColCenter}>
        <View style={styles.gridLabelRow}>
          <ClockIconSvg width={14} height={14} color={theme.colors.purple} />
          <AppText style={styles.gridLabel}>Duration</AppText>
        </View>
        <AppText style={styles.gridValue}>{duration}</AppText>
      </View>

      <View style={styles.gridColRight}>
        <View style={styles.gridLabelRow}>
          <VideoIconSvg width={14} height={14} color={theme.colors.purple} />
          <AppText style={styles.gridLabel}>Mode</AppText>
        </View>
        <AppText style={styles.gridValue}>{mode}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});
