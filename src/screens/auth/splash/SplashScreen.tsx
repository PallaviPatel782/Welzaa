import React, { useEffect, useRef } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { HeaderLogo } from '../../../components/common';
import { ScreenWrapper } from '../../../components/layout';
import { styles } from './styles';

interface SplashScreenProps {
  onFinish?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const onFinishRef = useRef(onFinish);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onFinishRef.current) {
        onFinishRef.current();
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScreenWrapper>
      <TouchableWithoutFeedback onPress={() => onFinishRef.current && onFinishRef.current()}>
        <View style={styles.content}>
          <HeaderLogo imageStyle={styles.logo} />
        </View>
      </TouchableWithoutFeedback>
    </ScreenWrapper>
  );
};

