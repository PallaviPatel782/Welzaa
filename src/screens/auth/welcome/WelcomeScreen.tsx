import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { HeaderLogo, PrimaryButton, PaginationDots, BottomWave, AppFastImage } from '../../../components/common';
import { ScreenWrapper } from '../../../components/layout';
import { styles } from './styles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const ILLUSTRATION_SIZE = Math.min(SCREEN_WIDTH * 0.75, 250);

interface WelcomeScreenProps {
  onComplete?: () => void;
}

const ONBOARDING_DATA = [
  {
    id: '1',
    image: require('../../../assets/illustrations/welcome1.png'),
    title: 'Your Well-being\nMatters',
    description:
      'Welzaa is a safe for you to connect, express and take care of your mental well-being.',
  },
  {
    id: '2',
    image: require('../../../assets/illustrations/welcome2.png'),
    title: 'Find the Right\nExpert for you',
    description:
      'Explore verified experts, read profiles and choose an expert who understands your needs.',
  },
  {
    id: '3',
    image: require('../../../assets/illustrations/welcome3.png'),
    title: 'Private. Secure.\nAlways Here for You.',
    description:
      'Book sessions easily, chat confidentially and get the support you deserve - anytime, anywhere.',
  },
];

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef<any>(null);

  const handleNext = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      scrollViewRef.current?.scrollTo({
        x: nextIndex * SCREEN_WIDTH,
        animated: true,
      });
    } else {
      if (onComplete) {
        onComplete();
      }
    }
  };

  const handleSkip = () => {
    if (onComplete) {
      onComplete();
    }
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / SCREEN_WIDTH);
    if (index !== currentIndex && index >= 0 && index < ONBOARDING_DATA.length) {
      setCurrentIndex(index);
    }
  };

  return (
    <ScreenWrapper renderBackground={() => <BottomWave />}>
      <HeaderLogo style={styles.header} />

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {ONBOARDING_DATA.map((item) => (
          <View key={item.id} style={styles.slide}>
            <View style={styles.illustrationWrapper}>
              <AppFastImage
                source={item.image}
                style={{ width: ILLUSTRATION_SIZE, height: ILLUSTRATION_SIZE }}
              />
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <PaginationDots total={ONBOARDING_DATA.length} currentIndex={currentIndex} />

        <PrimaryButton
          title={currentIndex === ONBOARDING_DATA.length - 1 ? 'GET STARTED' : 'NEXT'}
          onPress={handleNext}
        />

        <View style={styles.skipContainer}>
          {currentIndex < ONBOARDING_DATA.length - 1 ? (
            <TouchableOpacity
              onPress={handleSkip}
              activeOpacity={0.7}
              hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
            >
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.skipPlaceholder} />
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
};
