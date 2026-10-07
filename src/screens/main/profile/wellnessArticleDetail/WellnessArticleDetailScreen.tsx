import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import { WellnessArticle, MOCK_WELLNESS_ARTICLES } from '../../../../mock';
import ClockIconSvg from '../../../../assets/icons/clockIcon.svg';
import WellnessArticlesSvg from '../../../../assets/illustrations/WellnessArticles.svg';
import { styles } from './styles';

export const WellnessArticleDetailScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const article: WellnessArticle =
    route.params?.article || MOCK_WELLNESS_ARTICLES[0];

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader
        title="Wellness Articles"
        onBackPress={() => navigation.goBack()}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.heroBannerContainer}>
          <WellnessArticlesSvg width="100%" height={200} preserveAspectRatio="xMidYMid contain" />
        </View>

        <View style={styles.contentContainer}>
          <AppText style={styles.articleTitle}>{article.title}</AppText>
          <AppText style={styles.articleSubtitle}>{article.subtitle}</AppText>

          <View style={styles.metaRow}>
            <View style={styles.readTimeRow}>
              <ClockIconSvg width={15} height={15} color={theme.colors.darkText} />
              <AppText style={styles.readTimeText}>{article.readTime}</AppText>
            </View>

            <View style={styles.categoryBadge}>
              <AppText style={styles.categoryBadgeText}>
                {article.category}
              </AppText>
            </View>
          </View>

          <AppText style={styles.introText}>{article.intro}</AppText>

          <View style={styles.dashedDivider} />

          {article.sections?.map((section, idx) => (
            <View key={idx} style={styles.sectionItem}>
              <AppText style={styles.sectionTitle}>
                {section.number}. {section.title}
              </AppText>
              <AppText style={styles.sectionContent}>
                {section.content}
              </AppText>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
