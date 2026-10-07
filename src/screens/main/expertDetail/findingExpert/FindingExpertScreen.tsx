import React, { useEffect, useState, useMemo } from 'react';
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, AppGradientBackground } from '../../../../components/common';
import WelzaLoadingSvg from '../../../../assets/illustrations/welzaloading.svg';
import CheckIconSvg from '../../../../assets/icons/checkIcon.svg';
import { styles } from './styles';

export const FindingExpertScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const expert = useMemo(
    () => route.params?.expert || { name: 'Dr. Anjali Sharma' },
    [route.params?.expert]
  );
  const bookingData = useMemo(
    () => route.params?.bookingData || {},
    [route.params?.bookingData]
  );

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setCurrentStep(2);
    }, 1500);

    const timer2 = setTimeout(() => {
      setCurrentStep(3);
    }, 3000);

    const timer3 = setTimeout(() => {
      navigation.navigate('SessionBooked', { expert, bookingData });
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [navigation, expert, bookingData]);

  const handleLetExpertKnow = () => {
    navigation.navigate('GetToKnowYou', { expert, bookingData });
  };

  return (
    <ScreenWrapper
      backgroundColor="transparent"
      edges={['top', 'left', 'right', 'bottom']}
      renderBackground={() => <AppGradientBackground />}
    >
      <AppHeader
        title=""
        onBackPress={() => navigation.navigate('Main')}
        backgroundColor="transparent"
      />

      <View style={styles.container}>
        {/* Top Text Headings */}
        <AppText style={styles.mainTitle}>
          We’re finding{'\n'}the right expert for you
        </AppText>
        <AppText style={styles.mainSubtitle}>
          This may take a few seconds...
        </AppText>

        {/* Center Graphic */}
        <View style={styles.avatarGlowContainer}>
          <WelzaLoadingSvg width={180} height={180} />
        </View>

        {/* Circular Spinner */}
        <View style={styles.spinnerWrapper}>
          <ActivityIndicator size="large" color="#16A34A" />
        </View>

        {/* Waiting Status Text */}
        <AppText style={styles.waitingStatusText}>
          Waiting for Expert Confirmation...
        </AppText>

        {/* Let Expert Know Button */}
        <TouchableOpacity
          style={styles.letExpertKnowBtn}
          activeOpacity={0.85}
          onPress={handleLetExpertKnow}
        >
          <AppText style={styles.letExpertKnowText}>
            let Expert know about you  ≫
          </AppText>
        </TouchableOpacity>

        {/* Bottom Stepper Timeline */}
        <View style={styles.stepperContainer}>
          <View style={styles.stepperRow}>
            {/* Step 1 */}
            <View style={styles.stepItem}>
              <View style={[styles.stepCircle, styles.stepCircleCompleted]}>
                <View style={styles.stepCircleInnerWhite}>
                  <CheckIconSvg width={11} height={11} stroke="#22C55E" strokeWidth={3.5} />
                </View>
              </View>
              <AppText style={styles.stepLabelCompleted}>
                Request{'\n'}Sent ✅
              </AppText>
            </View>

            {/* Line 1-2 */}
            <View style={[styles.stepLine, currentStep >= 2 ? styles.stepLineActive : styles.stepLineInactive]} />

            {/* Step 2 */}
            <View style={styles.stepItem}>
              {currentStep >= 2 ? (
                <View style={[styles.stepCircle, styles.stepCircleCompleted]}>
                  <View style={styles.stepCircleInnerWhite}>
                    <CheckIconSvg width={11} height={11} stroke="#22C55E" strokeWidth={3.5} />
                  </View>
                </View>
              ) : (
                <View style={[styles.stepCircle, styles.stepCircleInactive]}>
                  <AppText style={styles.stepNumberInactive}>2</AppText>
                </View>
              )}
              <AppText style={currentStep >= 2 ? styles.stepLabelCompleted : styles.stepLabelInactive}>
                Expert{'\n'}Reviewing
              </AppText>
            </View>

            {/* Line 2-3 */}
            <View style={[styles.stepLine, currentStep >= 3 ? styles.stepLineActive : styles.stepLineInactive]} />

            {/* Step 3 */}
            <View style={styles.stepItem}>
              {currentStep >= 3 ? (
                <View style={[styles.stepCircle, styles.stepCircleCompleted]}>
                  <View style={styles.stepCircleInnerWhite}>
                    <CheckIconSvg width={11} height={11} stroke="#22C55E" strokeWidth={3.5} />
                  </View>
                </View>
              ) : (
                <View style={[styles.stepCircle, styles.stepCircleInactive]}>
                  <AppText style={styles.stepNumberInactive}>3</AppText>
                </View>
              )}
              <AppText style={currentStep >= 3 ? styles.stepLabelCompleted : styles.stepLabelInactive}>
                Awaiting{'\n'}Confirmation
              </AppText>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};
