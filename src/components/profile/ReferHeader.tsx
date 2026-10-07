import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import TrophyIconSvg from '../../assets/icons/trophyIcon.svg';

export const ReferHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <TrophyIconSvg width={22} height={22} color={theme.colors.goldStar} />
        <AppText style={styles.title}>Refer a Friend</AppText>
      </View>
      <View style={styles.underline} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.dark,
  },
  underline: {
    width: '85%',
    height: 1.5,
    backgroundColor: theme.colors.badgeYellow,
  },
});
