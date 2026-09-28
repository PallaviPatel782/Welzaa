import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from '../../../components/layout';
import { BottomWave, AppHeader, AppText } from '../../../components/common';
import { theme } from '../../../config/theme';
import { styles } from './styles';
import ClockIconSvg from '../../../assets/icons/clockIcon.svg';
import ShieldCheckIconSvg from '../../../assets/icons/shieldCheckIcon.svg';
import BookOpenIconSvg from '../../../assets/icons/bookOpenIcon.svg';
import AppUpdateIconSvg from '../../../assets/icons/appUpdateIcon.svg';

export interface NotificationItemData {
  id: string;
  title: string;
  message: string;
  time: string;
  iconType: 'clock' | 'completed' | 'article' | 'journal' | 'update';
  section: 'Today' | 'Yesterday';
}

const NOTIFICATIONS: NotificationItemData[] = [
  {
    id: '1',
    title: 'Upcoming Session Reminder',
    message: 'Your session with Dr. Anjali Sharma is tomorrow at 6:00 PM. 🎉',
    time: '2 min ago',
    iconType: 'clock',
    section: 'Today',
  },
  {
    id: '2',
    title: 'Session Completed',
    message: 'Your session has been completed. How did it go?',
    time: '1 hour ago',
    iconType: 'completed',
    section: 'Today',
  },
  {
    id: '3',
    title: 'New Article for You',
    message: 'Check out "5 Simple Ways to Manage Anxiety" in Wellness Articles.',
    time: '3 hour ago',
    iconType: 'article',
    section: 'Today',
  },
  {
    id: '4',
    title: 'Journal Update',
    message: 'Your journal entry has been saved successfully.',
    time: '2 min ago',
    iconType: 'journal',
    section: 'Yesterday',
  },
  {
    id: '5',
    title: 'App Update',
    message: 'We’ve added new wellness articles and activities for you. Explore now!',
    time: '1 hour ago',
    iconType: 'update',
    section: 'Yesterday',
  },
];

interface NotificationScreenProps {
  onBack?: () => void;
  onNotificationPress?: (item: NotificationItemData) => void;
}

export const NotificationScreen: React.FC<NotificationScreenProps> = ({
  onBack,
  onNotificationPress,
}) => {
  const todayItems = NOTIFICATIONS.filter((n) => n.section === 'Today');
  const yesterdayItems = NOTIFICATIONS.filter((n) => n.section === 'Yesterday');

  const renderNotificationIcon = (type: NotificationItemData['iconType']) => {
    switch (type) {
      case 'clock':
        return (
          <View style={[styles.iconBadge, { backgroundColor: theme.colors.greenBg }]}>
            <ClockIconSvg width={20} height={20} color={theme.colors.greenIcon} />
          </View>
        );
      case 'completed':
        return (
          <View style={[styles.iconBadge, { backgroundColor: theme.colors.lightBlue }]}>
            <ShieldCheckIconSvg width={20} height={20} color={theme.colors.blueText} />
          </View>
        );
      case 'article':
        return (
          <View style={[styles.iconBadge, { backgroundColor: theme.colors.purpleBg }]}>
            <BookOpenIconSvg width={20} height={20} color={theme.colors.purpleIcon} />
          </View>
        );
      case 'journal':
        return (
          <View style={[styles.iconBadge, { backgroundColor: theme.colors.greenBg }]}>
            <BookOpenIconSvg width={20} height={20} color={theme.colors.greenIcon} />
          </View>
        );
      case 'update':
        return (
          <View style={[styles.iconBadge, { backgroundColor: theme.colors.yellowBg }]}>
            <AppUpdateIconSvg width={20} height={20} color={theme.colors.yellowIcon} />
          </View>
        );
    }
  };

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      renderBackground={() => <BottomWave />}
    >
      <View style={styles.container}>
        <AppHeader
          title="Notification"
          onBackPress={onBack}
          backgroundColor={theme.colors.white}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <AppText variant="subtitle" style={styles.sectionTitle}>Today</AppText>
          {todayItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <TouchableOpacity
                style={styles.notificationItem}
                activeOpacity={0.75}
                onPress={() => onNotificationPress && onNotificationPress(item)}
              >
                {renderNotificationIcon(item.iconType)}
                <View style={styles.contentColumn}>
                  <AppText style={styles.itemTitle}>{item.title}</AppText>
                  <AppText style={styles.itemMessage}>{item.message}</AppText>
                  <AppText style={styles.itemTime}>{item.time}</AppText>
                </View>
              </TouchableOpacity>
              {index < todayItems.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
          ))}

          <AppText variant="subtitle" style={[styles.sectionTitle, { marginTop: 24 }]}>Yesterday</AppText>
          {yesterdayItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <TouchableOpacity
                style={styles.notificationItem}
                activeOpacity={0.75}
                onPress={() => onNotificationPress && onNotificationPress(item)}
              >
                {renderNotificationIcon(item.iconType)}
                <View style={styles.contentColumn}>
                  <AppText style={styles.itemTitle}>{item.title}</AppText>
                  <AppText style={styles.itemMessage}>{item.message}</AppText>
                  <AppText style={styles.itemTime}>{item.time}</AppText>
                </View>
              </TouchableOpacity>
              {index < yesterdayItems.length - 1 && <View style={styles.divider} />}
            </React.Fragment>
          ))}
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};
