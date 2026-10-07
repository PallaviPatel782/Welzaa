import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import { MOCK_REFUND_POLICY_SECTIONS } from '../../../../mock';
import { styles } from './styles';

export const RefundPolicyScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader
        title="Refund Policy"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <AppText style={styles.pageTitle}>Refund Policy</AppText>
        <AppText style={styles.lastUpdated}>Last Updated: June 2026</AppText>
        <AppText style={styles.introParagraph}>
          At Welzaa, we aim to ensure a transparent and fair refund policy for
          all our users when booking Expert sessions and wellness services.
        </AppText>

        {MOCK_REFUND_POLICY_SECTIONS.map((section) => (
          <View key={section.id} style={styles.section}>
            <AppText style={styles.sectionTitle}>{section.title}</AppText>
            <AppText style={styles.paragraph}>{section.content}</AppText>
          </View>
        ))}
      </ScrollView>
    </ScreenWrapper>
  );
};
