import React from 'react';
import { View, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import HeartIconSvg from '../../../../assets/icons/heartIcon.svg';
import { styles } from './styles';

export const AboutUsScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader title="About US" onBackPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../../assets/logos/logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.contentContainer}>
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Your Well-being Matters</AppText>
            <AppText style={styles.paragraph}>
              Welzaa is a safe and supportive space designed to help you
              connect, express yourself, and take care of your mental
              well-being.
            </AppText>
          </View>

          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>What We Do</AppText>
            <AppText style={styles.paragraph}>
              We make it easier to find the right Expert, book sessions,
              explore wellness resources, and build healthy habits at your own
              pace.
            </AppText>
          </View>

          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Our Purpose</AppText>
            <AppText style={styles.paragraph}>
              We believe everyone deserves a safe place to talk, be heard, and
              work toward a healthier and happier life.
            </AppText>
          </View>

          <View style={styles.section}>
            <AppText style={styles.paragraph}>
              Your well-being, privacy, and comfort are important to us. We are
              here to support you throughout your journey.
            </AppText>
          </View>

          <View style={styles.taglineRow}>
            <AppText style={styles.taglineText}>
              Welzaa — Support for a better you..
            </AppText>
            <HeartIconSvg width={16} height={16} color={theme.colors.blueWave} />
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
