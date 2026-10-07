import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import { MOCK_PRIVACY_SECTIONS } from '../../../../mock';
import HeadsetIconSvg from '../../../../assets/icons/headsetIcon.svg';
import PhoneCallIconSvg from '../../../../assets/icons/phoneCallIcon.svg';
import LocationPinIconSvg from '../../../../assets/icons/locationPinIcon.svg';
import { styles } from './styles';

export const PrivacyPolicyScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader title="Privacy Policy" onBackPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <AppText style={styles.pageTitle}>Privacy Policy</AppText>
        <AppText style={styles.lastUpdated}>Last Updated: June 2026</AppText>
        <AppText style={styles.introParagraph}>
          Your privacy matters to us. This Privacy Policy explains how Welzaa
          handles information when you use our services.
        </AppText>

        {MOCK_PRIVACY_SECTIONS.map((section) => (
          <View key={section.id} style={styles.section}>
            <AppText style={styles.sectionTitle}>{section.title}</AppText>
            <AppText style={styles.paragraph}>{section.content}</AppText>
            {section.bullets && (
              <View style={styles.bulletList}>
                {section.bullets.map((bullet, idx) => (
                  <AppText key={idx} style={styles.bulletItem}>
                    • {bullet}
                  </AppText>
                ))}
              </View>
            )}
          </View>
        ))}

        <View style={styles.contactContainer}>
          <AppText style={styles.contactTitle}>Contact Us</AppText>
          <AppText style={styles.contactSubtitle}>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy, please contact us:
          </AppText>

          <AppText style={styles.contactCompany}>Welzaa Support</AppText>

          <View style={styles.contactRow}>
            <HeadsetIconSvg width={16} height={16} color={theme.colors.darkText} />
            <AppText style={styles.contactItem}>Email: support@welzaa.com</AppText>
          </View>

          <View style={styles.contactRow}>
            <PhoneCallIconSvg width={16} height={16} color={theme.colors.darkText} />
            <AppText style={styles.contactItem}>Phone: +91 XXXXX XXXXX</AppText>
          </View>

          <View style={styles.contactRow}>
            <LocationPinIconSvg width={16} height={16} color={theme.colors.darkText} />
            <AppText style={styles.contactItem}>Address: [Company Address]</AppText>
          </View>

          <AppText style={styles.contactFooter}>
            If you have questions about your privacy or personal information,
            please contact Welzaa Support.
          </AppText>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
