import React, { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { AppText } from '../../../components/common';

import {
  HomeHeader,
  ExpertTabSelector,
  UpcomingSessionCard,
  ExploreCategoriesGrid,
  ArticlesSection,
  DailyQuoteCard,
  MoodCheckInModal,
  MoodToggleBar,
  MoodLogData,
  CategoryItem,
  ArticleItem,
} from '../../../components/home';

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [isMoodModalVisible, setIsMoodModalVisible] = useState<boolean>(false);
  const [lastLoggedDate, setLastLoggedDate] = useState<string>('');
  const [isToggleDismissed, setIsToggleDismissed] = useState<boolean>(false);

  const todayStr = new Date().toISOString().split('T')[0];
  const hasLoggedToday = lastLoggedDate === todayStr;

  useEffect(() => {
    if (!hasLoggedToday) {
      const timer = setTimeout(() => {
        setIsMoodModalVisible(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [hasLoggedToday]);

  const handleMoodLogged = (_data: MoodLogData) => {
    setLastLoggedDate(todayStr);
    setIsMoodModalVisible(false);
  };

  const handleCategorySelect = (_category: CategoryItem) => {
    navigation.navigate('Expert');
  };

  const handleArticlePress = (article: ArticleItem) => {
    navigation.navigate('WellnessArticleDetail', { article });
  };

  const handleJoinSession = () => {
    navigation.navigate('JoinSession');
  };

  const handleGetMatchedPress = (tab: 'welzaa' | 'marketplace') => {
    navigation.navigate('Expert', { initialType: tab });
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.topHeaderBackground}>
        <SafeAreaView edges={['top']} style={styles.topSafeArea}>
          <HomeHeader
            location="Abhay Niwas - Chinchwad, Pune, Pimpri Chinch..."
            onLocationPress={() => { }}
            onWalletPress={() => navigation.navigate('Wallet')}
            onNotificationPress={() => navigation.navigate('Notification')}
            onSOSPress={() => navigation.navigate('Sos')}
          />
        </SafeAreaView>
      </View>

      <ScrollView
        style={styles.scrollBody}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={true}
      >
        {!hasLoggedToday && !isToggleDismissed && (
          <MoodToggleBar
            onPress={() => setIsMoodModalVisible(true)}
            onClose={() => setIsToggleDismissed(true)}
          />
        )}

        <ExpertTabSelector onGetMatchedPress={handleGetMatchedPress} />

        <View style={styles.bodyContent}>
          <UpcomingSessionCard onJoinPress={handleJoinSession} />

          {/* Offer Banner Container */}
          <TouchableOpacity
            style={styles.offerBannerContainer}
            activeOpacity={0.9}
            onPress={handleJoinSession}
          >
            <Image
              source={require('../../../assets/images/homeofferbanner.png')}
              style={styles.offerBannerImage}
              resizeMode="cover"
            />
            <TouchableOpacity
              style={styles.offerBannerJoinButton}
              activeOpacity={0.85}
              onPress={handleJoinSession}
            >
              <AppText style={styles.offerBannerJoinText}>Join Session</AppText>
            </TouchableOpacity>
          </TouchableOpacity>

          <ExploreCategoriesGrid onSelectCategory={handleCategorySelect} />

          <ArticlesSection onArticlePress={handleArticlePress} />

          <DailyQuoteCard quote="Don’t give up good things take time." />
        </View>
      </ScrollView>

      <MoodCheckInModal
        visible={isMoodModalVisible}
        onClose={() => setIsMoodModalVisible(false)}
        onMoodLogged={handleMoodLogged}
      />
    </View>
  );
};
