import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import UserIconSvg from '../../assets/icons/userIcon.svg';

export const MinorAlertBanner: React.FC = () => {
  return (
    <View style={styles.banner}>
      <View style={styles.iconCircle}>
        <UserIconSvg width={14} height={14} color={theme.colors.white} />
      </View>
      <AppText style={styles.bannerText}>
        You need to join this session with your parents or guardian as it is mandatory for members below 18 years old.
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: theme.colors.red,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 12,
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    flex: 1,
    fontFamily: theme.fonts.semibold,
    fontSize: 12,
    color: theme.colors.white,
    lineHeight: 16,
  },
});
