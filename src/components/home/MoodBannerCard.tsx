import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../config/theme';
import BannerSvg from '../../assets/illustrations/banner.svg';
import ArrowRightSvg from '../../assets/icons/arrowRight.svg';

interface MoodBannerCardProps {
  onLogMoodPress?: () => void;
}

export const MoodBannerCard: React.FC<MoodBannerCardProps> = ({ onLogMoodPress }) => {
  return (
    <View style={styles.crimsonContainer}>
      <View style={styles.whiteCard}>
        <View style={styles.leftColumn}>
          <Text style={styles.title}>Log your mood{'\n'}for today</Text>
          <Text style={styles.subtitle}>
            It’s a small step towards a better you.
          </Text>

          <TouchableOpacity
            style={styles.logButton}
            activeOpacity={0.85}
            onPress={onLogMoodPress}
          >
            <Text style={styles.logButtonText}>Log Mood</Text>
            <ArrowRightSvg width={15} height={15} color={theme.colors.white} />
          </TouchableOpacity>
        </View>

        <View style={styles.rightIllustration}>
          <BannerSvg width={135} height={115} />
        </View>
      </View>

      <Text style={styles.supportHeading}>How can we Support you?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  crimsonContainer: {
    backgroundColor: theme.colors.badgePink,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  whiteCard: {
    backgroundColor: theme.colors.white,
    borderRadius: 22,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 10,
    elevation: 4,
  },
  leftColumn: {
    flex: 1,
    paddingRight: 6,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: theme.colors.black,
    lineHeight: 23,
    marginBottom: 6,
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 12.5,
    color: theme.colors.subtextSlate,
    marginBottom: 16,
    lineHeight: 17,
  },
  logButton: {
    backgroundColor: theme.colors.purple,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
    alignSelf: 'flex-start',
    gap: 8,
  },
  logButtonText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13.5,
    color: theme.colors.white,
  },
  rightIllustration: {
    width: 135,
    height: 115,
    justifyContent: 'center',
    alignItems: 'center',
  },
  supportHeading: {
    fontFamily: theme.fonts.bold,
    fontSize: 16.5,
    color: theme.colors.white,
    textAlign: 'center',
    marginTop: 18,
  },
});
