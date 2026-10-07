import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import {
  JournalHeaderBanner,
  JournalCard,
  JournalEntry,
} from '../../../../components/profile';
import {
  MOCK_JOURNAL_ENTRIES,
  MOCK_WELLNESS_ARTICLES,
  WellnessArticle,
} from '../../../../mock';
import PlusIconSvg from '../../../../assets/icons/plusIcon.svg';
import SearchIconSvg from '../../../../assets/icons/searchIcon.svg';
import { styles } from './styles';

const CATEGORIES = ['All', 'Mental Health', 'Self Care', 'Mindfulness'];

export const JournalEntriesScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const initialTab = route.params?.initialTab || 'myJournal';
  const [activeTab, setActiveTab] = useState<'myJournal' | 'articles'>(initialTab);
  const [entries] = useState<JournalEntry[]>(MOCK_JOURNAL_ENTRIES);

  // Wellness Articles State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = MOCK_WELLNESS_ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader title="Journal Entries" onBackPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <JournalHeaderBanner />

        <View style={styles.tabRow}>
          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'myJournal' && styles.tabBtnActive]}
            activeOpacity={0.8}
            onPress={() => setActiveTab('myJournal')}
          >
            <AppText style={[styles.tabText, activeTab === 'myJournal' && styles.tabTextActive]}>
              My Journal
            </AppText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabBtn, activeTab === 'articles' && styles.tabBtnActive]}
            activeOpacity={0.8}
            onPress={() => setActiveTab('articles')}
          >
            <AppText style={[styles.tabText, activeTab === 'articles' && styles.tabTextActive]}>
              Wellness Articles
            </AppText>
          </TouchableOpacity>
        </View>

        {activeTab === 'myJournal' ? (
          entries.map((entry) => (
            <JournalCard
              key={entry.id}
              entry={entry}
              onPress={() => navigation.navigate('JournalDetail', { entry })}
            />
          ))
        ) : (
          <View>
            <View style={styles.searchBarContainer}>
              <SearchIconSvg width={18} height={18} color={theme.colors.gray} style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search articles.."
                placeholderTextColor={theme.colors.gray}
                value={searchQuery}
                onChangeText={setSearchQuery}
              />
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.categoriesScroll}
            >
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <TouchableOpacity
                    key={cat}
                    style={[styles.chipBtn, isActive && styles.chipBtnActive]}
                    activeOpacity={0.8}
                    onPress={() => setSelectedCategory(cat)}
                  >
                    <AppText style={[styles.chipText, isActive && styles.chipTextActive]}>
                      {cat}
                    </AppText>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>

            <View style={styles.articlesList}>
              {filteredArticles.map((article: WellnessArticle) => (
                <TouchableOpacity
                  key={article.id}
                  style={styles.articleCard}
                  activeOpacity={0.85}
                  onPress={() =>
                    navigation.navigate('WellnessArticleDetail', { article })
                  }
                >
                  <Image
                    source={article.image}
                    style={styles.articleImage}
                    resizeMode="cover"
                  />
                  <View style={styles.articleTextContainer}>
                    <AppText style={styles.articleTitle} numberOfLines={2}>
                      {article.title}
                    </AppText>
                    <AppText style={styles.articleSubtitle} numberOfLines={1}>
                      {article.subtitle}
                    </AppText>
                    <AppText style={styles.articleDate}>
                      {article.date}
                    </AppText>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </ScrollView>

      {activeTab === 'myJournal' && (
        <TouchableOpacity
          style={styles.fabButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate('NewJournalEntry')}
        >
          <PlusIconSvg width={24} height={24} color={theme.colors.white} />
        </TouchableOpacity>
      )}
    </ScreenWrapper>
  );
};
