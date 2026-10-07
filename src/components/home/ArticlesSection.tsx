import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../config/theme';
import { MOCK_WELLNESS_ARTICLES, WellnessArticle } from '../../mock';

export type ArticleItem = WellnessArticle;

interface ArticlesSectionProps {
  onArticlePress?: (article: WellnessArticle) => void;
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
        {MOCK_WELLNESS_ARTICLES.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            activeOpacity={0.85}
            onPress={() => onArticlePress && onArticlePress(item)}
          >
            <View style={styles.bannerContainer}>
              <Image source={item.image} style={styles.bannerImage} resizeMode="cover" />
            </View>

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
    marginTop: 0,
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
