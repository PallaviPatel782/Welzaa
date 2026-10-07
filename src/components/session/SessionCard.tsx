import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import { SessionData } from '../../types/session';
import VerifiedBadgeSvg from '../../assets/icons/verifiedBadge.svg';
import CalendarIconSvg from '../../assets/icons/calendarIcon.svg';
import VideoIconSvg from '../../assets/icons/videoIcon.svg';

interface SessionCardProps {
  session: SessionData;
  onPress: (session: SessionData) => void;
}

export const SessionCard: React.FC<SessionCardProps> = ({ session, onPress }) => {
  const AvatarComp = session.AvatarComponent;

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() => onPress(session)}
    >
      <View style={styles.cardRow}>
        <View style={styles.avatarWrapper}>
          <View style={styles.doctorAvatarBox}>
            <AvatarComp width={64} height={64} />
          </View>
          <View style={styles.badgeOverlay}>
            <VerifiedBadgeSvg width={16} height={16} />
          </View>
        </View>

        <View style={styles.cardContent}>
          <View style={styles.doctorNameRow}>
            <AppText style={styles.doctorName}>{session.doctorName}</AppText>
            <VerifiedBadgeSvg width={14} height={14} />
          </View>

          <AppText style={styles.specialty}>{session.specialty}</AppText>

          <View style={styles.infoRow}>
            <CalendarIconSvg width={13} height={13} color={theme.colors.navy} />
            <AppText style={styles.infoText}>
              {session.date} {session.time}
            </AppText>
          </View>

          <View style={styles.infoRow}>
            <VideoIconSvg width={13} height={13} color={theme.colors.navy} />
            <AppText style={styles.infoText}>{session.sessionType}</AppText>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <AppText style={styles.priceText}>{session.price}</AppText>
          <AppText style={styles.durationText}>/ {session.duration}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 12,
  },
  doctorAvatarBox: {
    width: 64,
    height: 64,
    borderRadius: 32,
    overflow: 'hidden',
    backgroundColor: theme.colors.softPurpleBg,
  },
  badgeOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: theme.colors.white,
    borderRadius: 8,
  },
  cardContent: {
    flex: 1,
  },
  doctorNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 2,
  },
  doctorName: {
    fontFamily: theme.fonts.bold,
    fontSize: 14.5,
    color: theme.colors.dark,
  },
  specialty: {
    fontFamily: theme.fonts.medium,
    fontSize: 11,
    color: theme.colors.gray,
    letterSpacing: 0.2,
    marginBottom: 6,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  infoText: {
    fontFamily: theme.fonts.regular,
    fontSize: 11.5,
    color: theme.colors.subtextSlate,
  },
  priceContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingLeft: 8,
  },
  priceText: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.dark,
  },
  durationText: {
    fontFamily: theme.fonts.regular,
    fontSize: 11,
    color: theme.colors.gray,
    marginTop: 1,
  },
});
