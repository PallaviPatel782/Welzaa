import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import ChevronRightSvg from '../../assets/icons/chevronRight.svg';

export interface JournalEntry {
  id: string;
  title: string;
  date: string;
  time: string;
  content: string;
  tag: string;
  mood?: string;
  gif?: any;
  emoji?: string;
}

interface JournalCardProps {
  entry: JournalEntry;
  onPress: () => void;
}

export const JournalCard: React.FC<JournalCardProps> = ({ entry, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.topRow}>
        <View style={styles.titleCol}>
          <AppText style={styles.titleText}>{entry.title}</AppText>
          <AppText style={styles.dateText}>
            {entry.date} • {entry.time}
          </AppText>
        </View>
        <ChevronRightSvg width={18} height={18} color={theme.colors.gray} />
      </View>

      <AppText style={styles.contentText} numberOfLines={2}>
        {entry.content}
      </AppText>

      <View style={styles.tagPill}>
        <AppText style={styles.tagText}>{entry.tag}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: theme.colors.bgLight,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  titleCol: {
    flex: 1,
    marginRight: 8,
  },
  titleText: {
    fontFamily: theme.fonts.bold,
    fontSize: 14.5,
    color: theme.colors.dark,
    marginBottom: 2,
  },
  dateText: {
    fontFamily: theme.fonts.medium,
    fontSize: 11,
    color: theme.colors.gray,
  },
  contentText: {
    fontFamily: theme.fonts.regular,
    fontSize: 12.5,
    color: theme.colors.darkText,
    lineHeight: 18,
    marginBottom: 12,
  },
  tagPill: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.accentLime,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagText: {
    fontFamily: theme.fonts.bold,
    fontSize: 11,
    color: theme.colors.white,
  },
});
