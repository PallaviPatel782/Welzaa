import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { ScreenWrapper } from '../../../components/layout';
import { PrimaryButton, BottomWave, AppHeader } from '../../../components/common';
import { theme } from '../../../config/theme';
import { styles } from './styles';

import ChevronRightSvg from '../../../assets/icons/chevronRight.svg';
import CounselingSvg from '../../../assets/icons/Counseling.svg';
import RelationshipsSvg from '../../../assets/icons/Relationships.svg';
import NutritionSvg from '../../../assets/icons/Nutrition.svg';
import FitnessSvg from '../../../assets/icons/Fitness.svg';
import EducationSvg from '../../../assets/icons/Education.svg';
import CareerSvg from '../../../assets/icons/Career.svg';
import LegalSvg from '../../../assets/icons/Legal.svg';
import FinanceSvg from '../../../assets/icons/Finance.svg';
import SleepRestSvg from '../../../assets/icons/SleepRest.svg';
import ParentingSvg from '../../../assets/icons/Parenting.svg';
import StressSvg from '../../../assets/icons/Stress.svg';
import MindfulSvg from '../../../assets/icons/Mindful.svg';
import RecoverySvg from '../../../assets/icons/Recovery.svg';
import GriefSvg from '../../../assets/icons/Grief.svg';
import LGBTQSvg from '../../../assets/icons/LGBTQ.svg';
import GrowthSvg from '../../../assets/icons/Growth.svg';
import AnxietySvg from '../../../assets/icons/Anxiety.svg';
import SelfEsteemSvg from '../../../assets/icons/Self-Esteem.svg';
import TraumaSvg from '../../../assets/icons/Trauma.svg';
import BurnoutSvg from '../../../assets/icons/Burnout.svg';
import AddictionSvg from '../../../assets/icons/Addiction.svg';
import AngerSvg from '../../../assets/icons/Anger.svg';
import PhobiasSvg from '../../../assets/icons/Phobias.svg';
import ADHDSvg from '../../../assets/icons/ADHD.svg';

export interface ConcernItem {
  id: string;
  label: string;
  IconComponent: React.FC<any>;
}

const CONCERNS: ConcernItem[] = [
  { id: 'counseling', label: 'Counseling', IconComponent: CounselingSvg },
  { id: 'relationships', label: 'Relationships', IconComponent: RelationshipsSvg },
  { id: 'nutrition', label: 'Nutrition', IconComponent: NutritionSvg },
  { id: 'fitness', label: 'Fitness', IconComponent: FitnessSvg },
  { id: 'education', label: 'Education', IconComponent: EducationSvg },
  { id: 'career', label: 'Career', IconComponent: CareerSvg },
  { id: 'legal', label: 'Legal', IconComponent: LegalSvg },
  { id: 'finance', label: 'Finance', IconComponent: FinanceSvg },
  { id: 'sleepRest', label: 'Sleep & Rest', IconComponent: SleepRestSvg },
  { id: 'parenting', label: 'Parenting', IconComponent: ParentingSvg },
  { id: 'stress', label: 'Stress', IconComponent: StressSvg },
  { id: 'mindful', label: 'Mindful', IconComponent: MindfulSvg },
  { id: 'recovery', label: 'Recovery', IconComponent: RecoverySvg },
  { id: 'grief', label: 'Grief', IconComponent: GriefSvg },
  { id: 'lgbtq', label: 'LGBTQ+', IconComponent: LGBTQSvg },
  { id: 'growth', label: 'Growth', IconComponent: GrowthSvg },
  { id: 'anxiety', label: 'Anxiety', IconComponent: AnxietySvg },
  { id: 'selfEsteem', label: 'Self-Esteem', IconComponent: SelfEsteemSvg },
  { id: 'trauma', label: 'Trauma', IconComponent: TraumaSvg },
  { id: 'burnout', label: 'Burnout', IconComponent: BurnoutSvg },
  { id: 'addiction', label: 'Addiction', IconComponent: AddictionSvg },
  { id: 'anger', label: 'Anger', IconComponent: AngerSvg },
  { id: 'phobias', label: 'Phobias', IconComponent: PhobiasSvg },
  { id: 'adhd', label: 'ADHD', IconComponent: ADHDSvg },
];

interface YourConcernsScreenProps {
  onContinue?: (selectedConcerns: string[]) => void;
  onExploreLater?: () => void;
  onBack?: () => void;
}

export const YourConcernsScreen: React.FC<YourConcernsScreenProps> = ({
  onContinue,
  onExploreLater,
  onBack,
}) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleConcern = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    if (onContinue) {
      onContinue(selectedIds);
    }
  };

  const isFormValid = selectedIds.length > 0;

  return (
    <ScreenWrapper backgroundColor={theme.colors.headerCream} renderBackground={() => <BottomWave />}>
      <View style={styles.container}>
        <AppHeader
          title="Your Concerns"
          showBack={Boolean(onBack)}
          onBackPress={onBack}
          backgroundColor="transparent"
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.welcomeBox}>
            <Text style={styles.welcomeTitle}>What Would You Like Support With?</Text>
            <Text style={styles.welcomeSubtitle}>
              Select the areas you’d like help with.{'\n'}You can choose more than one.
            </Text>
          </View>

          <View style={styles.gridContainer}>
            {CONCERNS.map((item) => {
              const isSelected = selectedIds.includes(item.id);
              const IconComp = item.IconComponent;
              return (
                <View key={item.id} style={styles.gridCell}>
                  <TouchableOpacity
                    style={[styles.cardItem, isSelected && styles.cardItemSelected]}
                    activeOpacity={0.8}
                    onPress={() => toggleConcern(item.id)}
                  >
                    <View style={styles.iconContainer}>
                      <IconComp width={36} height={36} />
                    </View>
                    <Text style={[styles.cardLabel, isSelected && styles.cardLabelSelected]} numberOfLines={1}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>

          <TouchableOpacity
            style={styles.exploreLaterRow}
            activeOpacity={0.7}
            onPress={onExploreLater || handleContinue}
          >
            <Text style={styles.exploreLaterText}>I’ll explore later</Text>
            <ChevronRightSvg width={14} height={14} color={theme.colors.purple} style={{ marginLeft: 4 }} />
          </TouchableOpacity>

          <PrimaryButton
            title="CONTINUE"
            onPress={handleContinue}
            disabled={!isFormValid}
            style={styles.continueButton}
          />
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};
