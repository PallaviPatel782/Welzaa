import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, AppFastImage } from '../common';
import { theme } from '../../config/theme';
import { getMoodGif } from '../../assets/moodtype';

interface TodayMoodCardProps {
  emoji?: string;
  moodName?: string;
  gif?: any;
}

export const TodayMoodCard: React.FC<TodayMoodCardProps> = ({
  moodName = 'Happy',
  gif,
}) => {
  const moodGif = gif || getMoodGif(moodName);

  return (
    <View style={styles.cardContainer}>
      <AppFastImage source={moodGif} style={styles.gifImage} />
      <View style={styles.textCol}>
        <AppText style={styles.subtitle}>Today's Mood</AppText>
        <AppText style={styles.moodTitle}>{moodName}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.lavenderSectionBg,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    gap: 14,
  },
  gifImage: {
    width: 40,
    height: 40,
  },
  textCol: {
    justifyContent: 'center',
  },
  subtitle: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.gray,
    marginBottom: 2,
  },
  moodTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 17,
    color: theme.colors.dark,
  },
});

