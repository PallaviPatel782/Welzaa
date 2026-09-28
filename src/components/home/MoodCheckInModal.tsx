import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import { AppFastImage } from '../common';
import { theme } from '../../config/theme';

const happyGif = require('../../assets/moodtype/Happy.gif');
const excitedGif = require('../../assets/moodtype/Excited.gif');
const confidentGif = require('../../assets/moodtype/Confident.gif');
const neutralGif = require('../../assets/moodtype/Neutral.gif');
const tiredGif = require('../../assets/moodtype/Tired.gif');
const stressedGif = require('../../assets/moodtype/Stressed.gif');
const sadGif = require('../../assets/moodtype/Sad.gif');
const angryGif = require('../../assets/moodtype/Angry.gif');

export interface MoodOption {
  id: string;
  label: string;
  gif: any;
}

const MOODS: MoodOption[] = [
  { id: 'happy', label: 'Happy', gif: happyGif },
  { id: 'excited', label: 'Excited', gif: excitedGif },
  { id: 'confident', label: 'Confident', gif: confidentGif },
  { id: 'neutral', label: 'Neutral', gif: neutralGif },
  { id: 'tired', label: 'Tired', gif: tiredGif },
  { id: 'stressed', label: 'Stressed', gif: stressedGif },
  { id: 'sad', label: 'Sad', gif: sadGif },
  { id: 'angry', label: 'Angry', gif: angryGif },
];

const { width } = Dimensions.get('window');
const CIRCLE_RADIUS = Math.min((width - 100) / 2, 130);

interface MoodCheckInModalProps {
  visible: boolean;
  onClose: () => void;
  onMoodLogged?: (mood: MoodOption) => void;
}

export const MoodCheckInModal: React.FC<MoodCheckInModalProps> = ({
  visible,
  onClose,
  onMoodLogged,
}) => {
  const [selectedMood, setSelectedMood] = useState<MoodOption>(MOODS[0]);
  const [isLogged, setIsLogged] = useState<boolean>(false);

  const handleLogPress = () => {
    setIsLogged(true);
    if (onMoodLogged) {
      onMoodLogged(selectedMood);
    }
  };

  const handleModalClose = () => {
    setIsLogged(false);
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleModalClose}
    >
      <TouchableWithoutFeedback onPress={handleModalClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.cardContainer}>
              {!isLogged ? (
                <View style={styles.contentWrapper}>
                  <Text style={styles.title}>Mood Check-in</Text>
                  <Text style={styles.subtitle}>How are you feeling today?</Text>

                  <View style={styles.radialContainer}>
                    {MOODS.map((mood, index) => {
                      const angle = (index * 2 * Math.PI) / MOODS.length - Math.PI / 2;
                      const x = CIRCLE_RADIUS * Math.cos(angle);
                      const y = CIRCLE_RADIUS * Math.sin(angle);
                      const isSelected = selectedMood.id === mood.id;

                      return (
                        <TouchableOpacity
                          key={mood.id}
                          style={[
                            styles.emojiTouch,
                            {
                              transform: [
                                { translateX: x },
                                { translateY: y },
                              ],
                            },
                          ]}
                          activeOpacity={0.8}
                          onPress={() => setSelectedMood(mood)}
                        >
                          <AppFastImage
                            source={mood.gif}
                            style={[
                              styles.gifImage,
                              isSelected && styles.selectedGifImage,
                            ]}
                          />
                        </TouchableOpacity>
                      );
                    })}

                    <View style={styles.centerLabelWrapper}>
                      <Text style={styles.centerLabelText}>{selectedMood.label}</Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.actionButton}
                    activeOpacity={0.8}
                    onPress={handleLogPress}
                  >
                    <Text style={styles.actionButtonText}>Log</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View style={styles.contentWrapper}>
                  <View style={styles.loggedEmojiWrapper}>
                    <AppFastImage
                      source={selectedMood.gif}
                      style={styles.loggedGifImage}
                    />
                  </View>

                  <Text style={styles.loggedMoodTitle}>{selectedMood.label}</Text>

                  <Text style={styles.loggedSuccessHeading}>Mood Logged!</Text>

                  <Text style={styles.loggedSuccessDesc}>
                    Mood saved! You’re showing up for yourself. Check in again tomorrow to continue your journey.
                  </Text>

                  <TouchableOpacity
                    style={[styles.actionButton, styles.okayButton]}
                    activeOpacity={0.8}
                    onPress={handleModalClose}
                  >
                    <Text style={styles.actionButtonText}>Okay</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlayDark,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  cardContainer: {
    width: '100%',
    maxWidth: 370,
    backgroundColor: theme.colors.softCream,
    borderRadius: 28,
    paddingVertical: 32,
    paddingHorizontal: 20,
    alignItems: 'center',
    position: 'relative',
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 16,
    elevation: 8,
  },
  contentWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 22,
    color: theme.colors.black,
    marginBottom: 4,
  },
  subtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.gray,
    marginBottom: 20,
  },
  radialContainer: {
    width: CIRCLE_RADIUS * 2 + 70,
    height: CIRCLE_RADIUS * 2 + 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  emojiTouch: {
    position: 'absolute',
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifImage: {
    width: 56,
    height: 56,
  },
  selectedGifImage: {
    width: 68,
    height: 68,
  },
  centerLabelWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerLabelText: {
    fontFamily: theme.fonts.bold,
    fontSize: 17,
    color: theme.colors.black,
  },
  actionButton: {
    backgroundColor: theme.colors.purple,
    width: '85%',
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: theme.colors.purple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  okayButton: {
    width: '75%',
    marginTop: 28,
  },
  actionButtonText: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.white,
  },
  loggedEmojiWrapper: {
    width: 90,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  loggedGifImage: {
    width: 86,
    height: 86,
  },
  loggedMoodTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.black,
    marginBottom: 16,
  },
  loggedSuccessHeading: {
    fontFamily: theme.fonts.bold,
    fontSize: 22,
    color: theme.colors.black,
    marginBottom: 8,
  },
  loggedSuccessDesc: {
    fontFamily: theme.fonts.regular,
    fontSize: 13.5,
    color: theme.colors.gray,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: 12,
  },
});
