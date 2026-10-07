import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { AppText, AppFastImage } from '../common';
import { theme } from '../../config/theme';
import { MOOD_GIFS } from '../../assets/moodtype';

export interface MoodOption {
  id: string;
  name: string;
  gif: any;
  emoji?: string;
}

export const MOOD_OPTIONS: MoodOption[] = [
  { id: 'happy', name: 'Happy', gif: MOOD_GIFS.happy },
  { id: 'excited', name: 'Excited', gif: MOOD_GIFS.excited },
  { id: 'neutral', name: 'Neutral', gif: MOOD_GIFS.neutral },
  { id: 'confused', name: 'Confused', gif: MOOD_GIFS.numb },
  { id: 'sad', name: 'Sad', gif: MOOD_GIFS.sad },
];

interface MoodSelectorProps {
  label?: string;
  selectedMoodId: string;
  onSelectMood: (moodId: string) => void;
}

export const MoodSelector: React.FC<MoodSelectorProps> = ({
  label = 'Mood',
  selectedMoodId,
  onSelectMood,
}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.label}>{label}</AppText>
      <View style={styles.row}>
        {MOOD_OPTIONS.map((item) => {
          const isSelected = selectedMoodId === item.id;
          return (
            <TouchableOpacity
              key={item.id}
              style={[styles.moodItem, isSelected && styles.moodItemSelected]}
              activeOpacity={0.7}
              onPress={() => onSelectMood(item.id)}
            >
              <AppFastImage source={item.gif} style={styles.gifImage} />
              <AppText
                style={[
                  styles.moodName,
                  isSelected && styles.moodNameSelected,
                ]}
              >
                {item.name}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 14,
  },
  label: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.dark,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  moodItem: {
    alignItems: 'center',
    padding: 6,
    borderRadius: 12,
  },
  moodItemSelected: {
    backgroundColor: theme.colors.purpleBg,
  },
  gifImage: {
    width: 32,
    height: 32,
    marginBottom: 4,
  },
  moodName: {
    fontFamily: theme.fonts.medium,
    fontSize: 11,
    color: theme.colors.gray,
  },
  moodNameSelected: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.purple,
  },
});

