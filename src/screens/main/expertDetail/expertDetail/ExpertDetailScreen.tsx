import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { theme } from '../../../../config/theme';
import { MOCK_EXPERTS } from '../../../../mock/expertMockData';
import { ExpertData } from '../../../../types';
import { VerifiedBadge, AppHeader, AppText, AppButton } from '../../../../components/common';
import ChevronDownSvg from '../../../../assets/icons/chevronDown.svg';
import CalendarIconSvg from '../../../../assets/icons/calendarIcon.svg';
import UserIconSvg from '../../../../assets/icons/userIcon.svg';
import CheckIconSvg from '../../../../assets/icons/checkIcon.svg';
import StarIconSvg from '../../../../assets/icons/starIcon.svg';
import TranslateIconSvg from '../../../../assets/icons/translateIcon.svg';
import RelationshipsSvg from '../../../../assets/icons/Relationships.svg';
import MindfulSvg from '../../../../assets/icons/Mindful.svg';
import HeartIconSvg from '../../../../assets/icons/heartIcon.svg';
import DrNikitaDharmaSvg from '../../../../assets/images/DrNikitaDharma.svg';
import { styles } from './styles';

export const ExpertDetailScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const expert: ExpertData = route.params?.expert || MOCK_EXPERTS[0];
  const [isQualificationsExpanded, setIsQualificationsExpanded] = useState(true);

  const AvatarComponent = expert.AvatarSvg || DrNikitaDharmaSvg;
  const qualifications = expert.qualifications || [];
  const specialties = expert.specialties || [];

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <StatusBar barStyle="dark-content" />

      <AppHeader
        showBack
        onBackPress={() => navigation.goBack()}
        backgroundColor={theme.colors.white}
      />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topWhiteSection}>
          <View style={styles.profileHeaderRow}>
            <View style={styles.avatarWrapper}>
              <View style={styles.avatarImageContainer}>
                <AvatarComponent width={110} height={118} />
              </View>
              <View style={styles.verifiedBadgePosition}>
                <VerifiedBadge size={22} />
              </View>
            </View>

            <View style={styles.profileMeta}>
              <AppText variant="subtitle" style={styles.doctorName}>{expert.name}</AppText>
              <AppText variant="caption" style={styles.doctorTitle}>{expert.title.toUpperCase()}</AppText>

              <View style={styles.statusRow}>
                <UserIconSvg width={13} height={13} color={theme.colors.gray} />
                <AppText style={styles.statusText}>
                  {expert.mode}{' '}
                  <AppText style={styles.availableTodayText}>• Available Today</AppText>
                </AppText>
              </View>

              <View style={styles.tagRatingRow}>
                <View style={styles.categoryPill}>
                  <AppText style={styles.categoryPillText}>
                    {expert.categoryTag.toUpperCase()}
                  </AppText>
                </View>

                <View style={styles.ratingBadge}>
                  <StarIconSvg width={14} height={14} style={{ marginRight: 4 }} />
                  <AppText style={styles.ratingScore}>{expert.rating}</AppText>
                </View>
              </View>
            </View>
          </View>

          {specialties.length > 0 && (
            <View style={styles.specialtiesRow}>
              {specialties.map((spec, index) => {
                const SpecialtyIcon =
                  index === 0
                    ? RelationshipsSvg
                    : index === 1
                      ? MindfulSvg
                      : HeartIconSvg;
                return (
                  <View key={index} style={styles.specialtyPill}>
                    <SpecialtyIcon width={16} height={16} style={{ marginRight: 6 }} />
                    <AppText style={styles.specialtyLabel}>{spec.label}</AppText>
                  </View>
                );
              })}
            </View>
          )}

          <AppText variant="subtitle" style={styles.aboutHeader}>About Me</AppText>
          <AppText variant="body" style={styles.aboutParagraph}>
            {expert.aboutMe ||
              'Dr. Ananya Sharma is a compassionate and experienced Clinical Psychologist dedicated to helping individuals better understand their emotions, overcome personal challenges, and build healthier coping strategies.'}
          </AppText>
        </View>

        <View style={styles.middleLavenderSection}>
          <View style={styles.infoBoxCard}>
            <View style={styles.infoColumn}>
              <CalendarIconSvg width={18} height={18} color={theme.colors.dark} />
              <AppText style={styles.infoLabel}>Mode of Consultation</AppText>
              <AppText style={styles.infoValue}>
                {expert.consultationModes || 'Video / Audio / Chat'}
              </AppText>
            </View>

            <View style={styles.infoColumnDivider} />

            <View style={styles.infoColumn}>
              <TranslateIconSvg width={18} height={18} color={theme.colors.dark} />
              <AppText style={styles.infoLabel}>Languages</AppText>
              <AppText style={styles.infoValue}>
                {expert.languages ? expert.languages.join(', ') : 'English, Hindi, Marathi'}
              </AppText>
            </View>

            <View style={styles.infoColumnDivider} />

            <View style={styles.infoColumn}>
              <UserIconSvg width={18} height={18} color={theme.colors.dark} />
              <AppText style={styles.infoLabel}>Age Groups</AppText>
              <AppText style={styles.infoValue}>{expert.ageGroups || '18+ Adults'}</AppText>
            </View>
          </View>

          <View style={styles.accordionBox}>
            <TouchableOpacity
              style={styles.accordionHeader}
              activeOpacity={0.8}
              onPress={() => setIsQualificationsExpanded(!isQualificationsExpanded)}
            >
              <View style={styles.accordionTitleGroup}>
                <View style={styles.greenBadgeCircle}>
                  <CheckIconSvg width={12} height={12} stroke={theme.colors.white} strokeWidth={3} />
                </View>
                <AppText style={styles.accordionTitle}>Education & Qualifications</AppText>
              </View>

              <View
                style={[
                  styles.chevronRotation,
                  !isQualificationsExpanded && styles.chevronRotated,
                ]}
              >
                <ChevronDownSvg width={18} height={18} color={theme.colors.dark} />
              </View>
            </TouchableOpacity>

            {isQualificationsExpanded && (
              <View style={styles.accordionBody}>
                {qualifications.map((item, idx) => (
                  <View key={idx} style={styles.qualificationItem}>
                    <AppText style={styles.qualificationDegree}>• {item.degree}</AppText>
                    <AppText style={styles.qualificationInstitute}>{item.institute}</AppText>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>

        <View style={styles.slotBannerStrip}>
          <CalendarIconSvg width={18} height={18} color={theme.colors.purple} />
          <AppText style={styles.slotBannerText}>
            Next available slot:{' '}
            <AppText style={styles.slotBannerTimeText}>
              {expert.nextSlot || 'Tommorow, 10:00 AM'}
            </AppText>
          </AppText>
        </View>
      </ScrollView>

      <View style={styles.bottomFooterSafeArea}>
        <View style={styles.footerContainer}>
          <View style={styles.priceContainer}>
            <AppText style={styles.footerPrice}>
              ₹ {expert.price}{' '}
              <AppText style={styles.footerSessionText}>/session</AppText>
            </AppText>
            <AppText style={styles.footerSubtext}>
              {expert.sessionDuration || 'for 45 mins consultation'}
            </AppText>
          </View>

          <AppButton
            title="Book Session"
            onPress={() => navigation.navigate('BookSessionMarketplace', { expert })}
            size="large"
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};
