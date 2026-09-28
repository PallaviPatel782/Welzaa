import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AppFastImage, RawFastImage } from '../common';
import { theme } from '../../config/theme';

import Articles3Svg from '../../assets/illustrations/articles3.svg';

const articles1Img = require('../../assets/illustrations/articles1.png');
const articles2Img = require('../../assets/illustrations/articles2.png');

export interface ArticleItem {
  id: string;
  title: string;
  category: string;
  bannerType: 'anxiety' | 'relationships' | 'growth';
}

const ARTICLES: ArticleItem[] = [
  {
    id: '1',
    title: '5 Simple Ways to Manage Anxiety',
    category: 'Mental Health',
    bannerType: 'anxiety',
  },
  {
    id: '2',
    title: 'Building Healthier Relationships',
    category: 'Relationships',
    bannerType: 'relationships',
  },
  {
    id: '3',
    title: 'Smash Your Day: Daily Routine Tips',
    category: 'Personal Growth',
    bannerType: 'growth',
  },
];

const RenderArticleBanner = ({ type }: { type: 'anxiety' | 'relationships' | 'growth' }) => {
  if (type === 'anxiety') {
    return (
      <View style={styles.bannerContainer}>
        <AppFastImage source={articles1Img} style={styles.bannerImage} resizeMode={RawFastImage.resizeMode.cover} />
      </View>
    );
  }
  if (type === 'relationships') {
    return (
      <View style={styles.bannerContainer}>
        <AppFastImage source={articles2Img} style={styles.bannerImage} resizeMode={RawFastImage.resizeMode.cover} />
      </View>
    );
  }
  return (
    <View style={styles.bannerContainer}>
      <Articles3Svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
    </View>
  );
};

interface ArticlesSectionProps {
  onArticlePress?: (article: ArticleItem) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onArticlePress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Articles for you</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {ARTICLES.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => onArticlePress && onArticlePress(item)}
          >
            <RenderArticleBanner type={item.bannerType} />

            <View style={styles.cardContent}>
              <Text style={styles.articleTitle} numberOfLines={2}>
                {item.title}
              </Text>

              <View style={styles.tagPill}>
                <Text style={styles.tagText}>{item.category}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.black,
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 14,
  },
  card: {
    width: 200,
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  bannerContainer: {
    height: 105,
    width: '100%',
    backgroundColor: theme.colors.borderLight,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  cardContent: {
    padding: 12,
    justifyContent: 'space-between',
    minHeight: 85,
  },
  articleTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.black,
    lineHeight: 18,
    marginBottom: 8,
  },
  tagPill: {
    backgroundColor: theme.colors.purpleBg,
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  tagText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 11,
    color: theme.colors.purple,
  },
});
