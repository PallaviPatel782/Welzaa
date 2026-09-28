import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../config/theme';
import DrNikitaDharmaSvg from '../../assets/images/DrNikitaDharma.svg';
import VerifiedBadgeSvg from '../../assets/icons/verifiedBadge.svg';
import CalendarIconSvg from '../../assets/icons/calendarIcon.svg';
import ClockIconSvg from '../../assets/icons/clockIcon.svg';

interface UpcomingSessionCardProps {
  onJoinPress?: () => void;
}

export const UpcomingSessionCard: React.FC<UpcomingSessionCardProps> = ({ onJoinPress }) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Upcoming sessions</Text>

      <View style={styles.card}>
        <View style={styles.topRow}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatarWrapper}>
              <DrNikitaDharmaSvg width={76} height={84} />
            </View>

            <View style={styles.verifiedBadge}>
              <VerifiedBadgeSvg width={18} height={18} />
            </View>
          </View>

          <View style={styles.infoWrapper}>
            <View style={styles.nameRow}>
              <Text style={styles.doctorName}>Dr. Nikita Dharma</Text>

              <TouchableOpacity
                style={styles.joinButton}
                activeOpacity={0.85}
                onPress={onJoinPress}
              >
                <Text style={styles.joinButtonText}>Join Session</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.specialty}>CLINICAL PSYCOLOGIST</Text>

            <View style={styles.tagPill}>
              <Text style={styles.tagText}>RELATIONSHIP</Text>
            </View>

            <View style={styles.metaRow}>
              <View style={styles.metaItem}>
                <CalendarIconSvg width={14} height={14} color={theme.colors.dark} style={{ marginRight: 4 }} />
                <Text style={styles.metaText}>24 may 2025</Text>
              </View>

              <View style={styles.metaItem}>
                <ClockIconSvg width={14} height={14} color={theme.colors.dark} style={{ marginRight: 4 }} />
                <Text style={styles.metaText}>4:00 PM</Text>
              </View>
            </View>

            <Text style={styles.durationText}>
              Duration: <Text style={styles.durationValue}>45 mins</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 16,
    marginTop: 22,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 17,
    color: theme.colors.dark,
    marginBottom: 10,
  },
  card: {
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 14,
    borderWidth: 1.2,
    borderColor: theme.colors.borderGray,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 12,
  },
  avatarWrapper: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  verifiedBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: 1,
  },
  infoWrapper: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  doctorName: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.dark,
    flex: 1,
    paddingRight: 6,
  },
  specialty: {
    fontFamily: theme.fonts.bold,
    fontSize: 10,
    color: theme.colors.gray,
    letterSpacing: 0.6,
    marginTop: 2,
  },
  tagPill: {
    backgroundColor: theme.colors.lightBlue,
    alignSelf: 'flex-start',
    paddingVertical: 3.5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 6,
    marginBottom: 8,
  },
  tagText: {
    fontFamily: theme.fonts.bold,
    fontSize: 9.5,
    color: theme.colors.darkText,
    letterSpacing: 0.5,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 4,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.darkText,
  },
  durationText: {
    fontFamily: theme.fonts.medium,
    fontSize: 12.5,
    color: theme.colors.darkText,
    marginTop: 2,
  },
  durationValue: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.dark,
  },
  joinButton: {
    backgroundColor: theme.colors.lime,
    paddingVertical: 7,
    paddingHorizontal: 16,
    borderRadius: 22,
    borderWidth: 1.2,
    borderColor: theme.colors.pureBlack,
    borderBottomWidth: 3.2,
    borderRightWidth: 2,
  },
  joinButtonText: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.pureBlack,
  },
});
