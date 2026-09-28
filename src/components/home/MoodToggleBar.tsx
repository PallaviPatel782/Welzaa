import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppFastImage } from '../common';
import { theme } from '../../config/theme';
import ArrowRightSvg from '../../assets/icons/arrowRight.svg';

const happyGif = require('../../assets/moodtype/Happy.gif');

interface MoodToggleBarProps {
  onPress: () => void;
  onClose?: () => void;
}

export const MoodToggleBar: React.FC<MoodToggleBarProps> = ({ onPress, onClose }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <View style={styles.leftGroup}>
        <View style={styles.emojiBadge}>
          <AppFastImage
            source={happyGif}
            style={styles.gifBadge}
          />
        </View>

        <View style={styles.textGroup}>
          <Text style={styles.title}>Daily Mood Check-in</Text>

          <Text style={styles.subtitle}>How are you feeling today?</Text>
        </View>
      </View>

      <View style={styles.rightGroup}>
        <View style={styles.logButton}>
          <Text style={styles.logButtonText}>Log</Text>

          <ArrowRightSvg width={12} height={12} color={theme.colors.white} />
        </View>

        {onClose && (
          <TouchableOpacity
            style={styles.closeTouch}
            onPress={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.softCream,
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 4,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: theme.colors.amberStar,
    shadowColor: theme.colors.goldStar,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  emojiBadge: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  gifBadge: {
    width: 32,
    height: 32,
  },
  textGroup: {
    flex: 1,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.black,
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 11.5,
    color: theme.colors.gray,
  },
  rightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logButton: {
    backgroundColor: theme.colors.purple,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    gap: 4,
  },
  logButtonText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: theme.colors.white,
  },
  closeTouch: {
    padding: 4,
  },
  closeText: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.gray,
  },
});
