import React, { useState, useEffect } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

import {
  HomeHeader,
  ExpertTabSelector,
  UpcomingSessionCard,
  ExploreCategoriesGrid,
  ArticlesSection,
  DailyQuoteCard,
  MoodCheckInModal,
  MoodToggleBar,
  MoodOption,
  CategoryItem,
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

  const handleMoodLogged = (_mood: MoodOption) => {
    setLastLoggedDate(todayStr);
    setIsMoodModalVisible(false);
  };

  const handleCategorySelect = (_category: CategoryItem) => {
    navigation.navigate('Expert');
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.topHeaderBackground}>
        <SafeAreaView edges={['top']} style={styles.topSafeArea}>
          <HomeHeader
            location="Abhay Niwas - Chinchwad, Pune, Pimpri Chinch..."
            onLocationPress={() => {}}
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

        <ExpertTabSelector />

        <View style={styles.bodyContent}>
          <UpcomingSessionCard onJoinPress={() => {}} />
          <ExploreCategoriesGrid onSelectCategory={handleCategorySelect} />
          <ArticlesSection onArticlePress={() => {}} />
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
