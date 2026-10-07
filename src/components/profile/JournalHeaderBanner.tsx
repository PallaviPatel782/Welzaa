import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import JournalEntriesSvg from '../../assets/illustrations/JournalEntries.svg';

export const JournalHeaderBanner: React.FC = () => {
  return (
    <View style={styles.bannerContainer}>
      <View style={styles.textCol}>
        <AppText style={styles.bannerTitle}>Your Journal</AppText>
        <AppText style={styles.bannerSubtitle}>
          A safe space for your thoughts, feeling and growth.
        </AppText>
      </View>
      <View style={styles.illustrationCol}>
        <JournalEntriesSvg width={90} height={70} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.softPinkBanner,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 16,
  },
  textCol: {
    flex: 1,
    marginRight: 10,
  },
  bannerTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: theme.colors.dark,
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.gray,
    lineHeight: 16,
  },
  illustrationCol: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
