import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import VerifiedBadgeSvg from '../../assets/icons/verifiedBadge.svg';
import DrNikitaDharmaSvg from '../../assets/images/DrNikitaDharma.svg';

interface DoctorSummaryCardProps {
  doctorName: string;
  specialty: string;
  AvatarComponent?: React.FC<any>;
  rightElement?: React.ReactNode;
}

export const DoctorSummaryCard: React.FC<DoctorSummaryCardProps> = ({
  doctorName,
  specialty,
  AvatarComponent,
  rightElement,
}) => {
  const AvatarComp = AvatarComponent || DrNikitaDharmaSvg;

  return (
    <View style={styles.expertRow}>
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarBox}>
          <AvatarComp width={54} height={54} />
        </View>
        <View style={styles.badgeOverlay}>
          <VerifiedBadgeSvg width={14} height={14} />
        </View>
      </View>

      <View style={styles.expertTextCol}>
        <AppText style={styles.expertTitle}>Expert Session</AppText>
        <AppText style={styles.doctorName}>{doctorName}</AppText>
        <AppText style={styles.specialty}>{specialty}</AppText>
      </View>

      {rightElement}
    </View>
  );
};

const styles = StyleSheet.create({
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
});
