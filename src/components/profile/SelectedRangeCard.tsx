import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText, AppFastImage } from '../common';
import { theme } from '../../config/theme';
import { getMoodGif } from '../../assets/moodtype';

interface SelectedRangeCardProps {
  emoji?: string;
  moodName?: string;
  dateRange?: string;
  gif?: any;
}

export const SelectedRangeCard: React.FC<SelectedRangeCardProps> = ({
  moodName = 'Happy',
  dateRange = '6th Dec - 15th Dec',
  gif,
}) => {
  const moodGif = gif || getMoodGif(moodName);

  return (
    <View style={styles.cardContainer}>
      <AppFastImage source={moodGif} style={styles.gifImage} />
      <View style={styles.textCol}>
        <AppText style={styles.moodName}>{moodName}</AppText>
        <AppText style={styles.rangeText}>{dateRange}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.slateGray,
    borderRadius: 28,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: theme.colors.white,
    marginTop: 20,
    gap: 12,
  },
  gifImage: {
    width: 32,
    height: 32,
  },
  textCol: {
    justifyContent: 'center',
  },
  moodName: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.dark,
  },
  rangeText: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.gray,
  },
});

