import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import { MOCK_TERMS_CONDITIONS } from '../../../../mock';
import { styles } from './styles';

export const TermsConditionsScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader
        title="Terms & Conditions"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <AppText style={styles.pageTitle}>Terms & Conditions</AppText>
        <AppText style={styles.lastUpdated}>Last Updated: June 2026</AppText>
        <AppText style={styles.introParagraph}>
          Welcome to Welzaa. By using the Welzaa app, you agree to these Terms &
          Conditions.
        </AppText>

        {MOCK_TERMS_CONDITIONS.map((item) => (
          <View key={item.id} style={styles.section}>
            <AppText style={styles.sectionTitle}>{item.title}</AppText>
            <AppText style={styles.paragraph}>{item.content}</AppText>
          </View>
        ))}

        <AppText style={styles.footerNote}>
          We may update these terms when necessary. Updated terms will be made
          available through the app.
        </AppText>
      </ScrollView>
    </ScreenWrapper>
  );
};
