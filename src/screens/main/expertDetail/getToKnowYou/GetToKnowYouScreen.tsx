import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, AppGradientBackground } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import ArrowLeftSvg from '../../../../assets/icons/backArrow.svg';
import HeartIconSvg from '../../../../assets/icons/heart.svg';
import HeartbreakIconSvg from '../../../../assets/icons/heartbreak.svg';
import FamilyIconSvg from '../../../../assets/icons/family.svg';
import CompassIconSvg from '../../../../assets/icons/compass.svg';
import ChatIconSvg from '../../../../assets/icons/chat.svg';
import InfoboxIconSvg from '../../../../assets/icons/infobox.svg';
import EmojiIconSvg from '../../../../assets/icons/emoji.svg';
import FamilyLoveIconSvg from '../../../../assets/icons/familylove.svg';
import CheckIconSvg from '../../../../assets/icons/checkIcon.svg';
import DrNikitaDharmaSvg from '../../../../assets/images/DrNikitaDharma.svg';
import { styles } from './styles';

export interface QuestionData {
  id: number;
  question: string;
  subtitle?: string;
  isMultiSelect?: boolean;
  options: {
    id: string;
    IconComponent: React.FC<any>;
    title: string;
    subtitle?: string;
  }[];
}

const QUESTIONS: QuestionData[] = [
  {
    id: 1,
    question: "What best describes your current relationship status?",
    subtitle: "Helps customize our clinical perspective and pacing",
    options: [
      { id: '1_1', IconComponent: HeartIconSvg, title: 'In a committed relationship / Dating' },
      { id: '1_2', IconComponent: FamilyIconSvg, title: 'Married / Civil Partnership' },
      { id: '1_3', IconComponent: HeartbreakIconSvg, title: 'Navigating a breakup or separation' },
      { id: '1_4', IconComponent: CompassIconSvg, title: 'Single & exploring dating patterns' },
    ],
  },
  {
    id: 2,
    question: "What is the primary area you would like to explore?",
    options: [
      {
        id: '2_1',
        IconComponent: ChatIconSvg,
        title: 'Communication breakdowns',
        subtitle: 'Recurring arguments, feeling misunderstood or talked past',
      },
      {
        id: '2_2',
        IconComponent: InfoboxIconSvg,
        title: 'Trust rebuilding & emotional betrayal',
        subtitle: 'Infidelity, secretive behaviors, or recovering from broken promises',
      },
      {
        id: '2_3',
        IconComponent: EmojiIconSvg,
        title: 'Intimacy & emotional disconnect',
        subtitle: 'Lack of physical affection, spark fading, or feeling like roommates',
      },
      {
        id: '2_4',
        IconComponent: FamilyLoveIconSvg,
        title: 'Life transition & family boundaries',
        subtitle: 'In-laws, parenting styles, relocation, or career imbalances',
      },
    ],
  },
  {
    id: 3,
    question: "How often do you experience disagreements or conflicts?",
    options: [
      { id: '3_1', IconComponent: HeartIconSvg, title: 'Rarely' },
      { id: '3_2', IconComponent: FamilyIconSvg, title: 'Sometimes' },
      { id: '3_3', IconComponent: HeartbreakIconSvg, title: 'Often' },
      { id: '3_4', IconComponent: CompassIconSvg, title: 'Almost every day' },
    ],
  },
  {
    id: 4,
    question: "What usually triggers your conflicts?",
    options: [
      { id: '4_1', IconComponent: HeartIconSvg, title: 'Communication' },
      { id: '4_2', IconComponent: FamilyIconSvg, title: 'Trust' },
      { id: '4_3', IconComponent: HeartbreakIconSvg, title: 'Jealousy' },
      { id: '4_4', IconComponent: CompassIconSvg, title: 'Family' },
    ],
  },
  {
    id: 5,
    question: "Have you tried anything before to improve the relationship?",
    options: [
      { id: '5_1', IconComponent: HeartIconSvg, title: 'Talking with each other' },
      { id: '5_2', IconComponent: FamilyIconSvg, title: 'Counselling/therapy' },
      { id: '5_3', IconComponent: HeartbreakIconSvg, title: 'Reading/watching relationship resources' },
      { id: '5_4', IconComponent: CompassIconSvg, title: 'Nothing yet' },
    ],
  },
];

export const GetToKnowYouScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const expert = route.params?.expert || { name: 'Dr. Anjali Sharma' };
  const bookingData = route.params?.bookingData || {};
  const isViewMode = route.params?.isViewMode || route.params?.isQuestionnaireCompleted || false;

  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string[]>>({
    1: ['1_1'],
    2: ['2_1'],
    3: ['3_1'],
    4: ['4_1'],
    5: ['5_1'],
  });
  const [isConfirmationModalVisible, setIsConfirmationModalVisible] = useState(false);

  const currentQuestion = QUESTIONS[currentStepIndex];
  const totalQuestions = QUESTIONS.length;
  const progressPercent = Math.round(((currentStepIndex + 1) / totalQuestions) * 100);

  const handleOptionSelect = (optionId: string) => {
    if (isViewMode) return;

    const qId = currentQuestion.id;
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: [optionId],
    }));

    if (currentStepIndex < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentStepIndex((prev) => prev + 1);
      }, 200);
    } else {
      setTimeout(() => {
        handleNextOrSubmit();
      }, 250);
    }
  };

  const handlePrevious = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    } else {
      navigation.goBack();
    }
  };

  const handleNextOrSubmit = () => {
    if (currentStepIndex < totalQuestions - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      if (isViewMode) {
        navigation.navigate('SessionBooked', {
          expert,
          bookingData,
          isQuestionnaireCompleted: true,
        });
      } else {
        handleSubmit();
      }
    }
  };

  const handleSubmit = () => {
    setIsConfirmationModalVisible(true);
    setTimeout(() => {
      handleCloseModal();
    }, 2500);
  };

  const handleCloseModal = () => {
    setIsConfirmationModalVisible(false);
    navigation.navigate('SessionBooked', {
      expert,
      bookingData,
      isQuestionnaireCompleted: true,
    });
  };

  const currentSelectedIds = selectedAnswers[currentQuestion.id] || [];

  return (
    <ScreenWrapper
      backgroundColor="transparent"
      edges={['top', 'left', 'right', 'bottom']}
      renderBackground={() => <AppGradientBackground />}
    >
      <AppHeader
        title="Get to Know You"
        onBackPress={handlePrevious}
        backgroundColor="transparent"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Progress Card */}
        <View style={styles.progressCard}>
          <View style={styles.progressHeaderRow}>
            <AppText style={styles.progressLabel}>Progress</AppText>
            <AppText style={styles.progressStepText}>
              Question {currentStepIndex + 1} of {totalQuestions} ({progressPercent}%)
            </AppText>
          </View>
          <View style={styles.progressBarTrack}>
            <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
          </View>
        </View>

        {/* Question Title & Subtitle */}
        <View style={styles.questionHeader}>
          <AppText style={styles.questionTitle}>{currentQuestion.question}</AppText>
          {currentQuestion.subtitle && (
            <AppText style={styles.questionSubtitle}>{currentQuestion.subtitle}</AppText>
          )}
        </View>

        {/* Options List */}
        <View style={styles.optionsList}>
          {currentQuestion.options.map((option) => {
            const isSelected = currentSelectedIds.includes(option.id);
            const IconComp = option.IconComponent;
            return (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionCard,
                  isSelected && (isViewMode ? styles.optionCardSelectedViewMode : styles.optionCardSelected),
                ]}
                activeOpacity={isViewMode ? 1 : 0.85}
                disabled={isViewMode}
                onPress={() => handleOptionSelect(option.id)}
              >
                <View style={styles.optionContentRow}>
                  <View style={styles.iconWrapper}>
                    <IconComp width={18} height={18} color={theme.colors.navy} />
                  </View>
                  <View style={styles.optionTextCol}>
                    <AppText
                      style={[
                        styles.optionTitle,
                        isSelected && styles.optionTitleSelected,
                      ]}
                    >
                      {option.title}
                    </AppText>
                    {option.subtitle && (
                      <AppText style={styles.optionSubtitle}>{option.subtitle}</AppText>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Bottom Controls */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.previousBtn}
          activeOpacity={0.7}
          onPress={handlePrevious}
        >
          <ArrowLeftSvg width={14} height={14} color={theme.colors.navy} />
          <AppText style={styles.previousBtnText}>PREVIOUS</AppText>
        </TouchableOpacity>

        {isViewMode ? (
          <TouchableOpacity
            style={styles.nextTextBtn}
            activeOpacity={0.7}
            onPress={handleNextOrSubmit}
          >
            <AppText style={styles.nextTextBtnText}>
              {currentStepIndex === totalQuestions - 1 ? 'GO BACK' : 'NEXT'}
            </AppText>
            <View style={{ transform: [{ rotate: '180deg' }] }}>
              <ArrowLeftSvg width={14} height={14} color={theme.colors.navy} />
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.submitBtn}
            activeOpacity={0.85}
            onPress={handleNextOrSubmit}
          >
            <AppText style={styles.submitBtnText}>
              {currentStepIndex === totalQuestions - 1 ? 'Submit' : 'Next'}
            </AppText>
          </TouchableOpacity>
        )}
      </View>

      {/* Confirmation Modal: ANSWER MARKED! */}
      <Modal
        visible={isConfirmationModalVisible}
        transparent
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.confirmationCard}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={handleCloseModal}
            >
              <AppText style={styles.closeBtnText}>✕</AppText>
            </TouchableOpacity>

            <View style={styles.greenStarBadge}>
              <CheckIconSvg width={24} height={24} stroke={theme.colors.white} strokeWidth={3} />
            </View>

            <AppText style={styles.confirmationTitle}>ANSWER MARKED!</AppText>
            <AppText style={styles.confirmationSubtitle}>
              The answers has been marked Successfully.
            </AppText>

            <View style={styles.modalDivider} />

            <View style={styles.modalDoctorRow}>
              <View style={styles.modalAvatarWrapper}>
                <DrNikitaDharmaSvg width={46} height={46} />
                <View style={styles.verifiedDot}>
                  <CheckIconSvg width={8} height={8} stroke={theme.colors.white} strokeWidth={3} />
                </View>
              </View>

              <View style={styles.modalDoctorMeta}>
                <AppText style={styles.modalDoctorHeader}>Expert Session</AppText>
                <AppText style={styles.modalDoctorName}>{expert.name || 'Dr. Anjali Sharma'}</AppText>
                <AppText style={styles.modalDoctorSub}>{expert.categoryTag || 'Relationship counseling'}</AppText>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
};
