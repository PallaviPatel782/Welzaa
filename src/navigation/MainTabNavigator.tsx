import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Keyboard, Platform } from 'react-native';
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MainTabParamList } from './types';
import {
  HomeScreen,
  ExpertScreen,
  AIScreen,
  SessionScreen,
  ProfileScreen,
} from '../screens/main';
import { theme } from '../config/theme';

import HomeSvg from '../assets/icons/home.svg';
import CounselorSvg from '../assets/icons/Counselor.svg';
import AISvg from '../assets/icons/AI.svg';
import SessionSvg from '../assets/icons/session.svg';
import ProfileSvg from '../assets/icons/userIcon.svg';

export type NavTabId = 'home' | 'expert' | 'ai' | 'session' | 'profile';

export interface NavTabItem {
  id: NavTabId;
  label: string;
}

const NAV_TABS: NavTabItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'expert', label: 'Expert' },
  { id: 'ai', label: 'AI' },
  { id: 'session', label: 'Session' },
  { id: 'profile', label: 'Profile' },
];

const RenderTabIcon = ({ id, isActive }: { id: NavTabId; isActive: boolean }) => {
  const activeColor = theme.colors.purple;
  const inactiveColor = theme.colors.dark;
  const color = isActive ? activeColor : inactiveColor;

  if (id === 'home') {
    return <HomeSvg width={24} height={24} color={color} fill={color} />;
  }

  if (id === 'expert') {
    return <CounselorSvg width={24} height={24} color={color} stroke={color} fill={isActive ? activeColor : 'none'} />;
  }

  if (id === 'ai') {
    return <AISvg width={26} height={26} />;
  }

  if (id === 'session') {
    return (
      <SessionSvg
        width={25}
        height={25}
        color={isActive ? theme.colors.white : color}
        fill={isActive ? activeColor : 'none'}
      />
    );
  }

  if (id === 'profile') {
    return <ProfileSvg width={24} height={24} color={color} stroke={color} fill={isActive ? activeColor : 'none'} />;
  }

  return null;
};

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, navigation }) => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const currentRouteName = state.routes[state.index].name.toLowerCase() as NavTabId;

  useEffect(() => {
    const showSub = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      () => setIsKeyboardVisible(true)
    );
    const hideSub = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => setIsKeyboardVisible(false)
    );
    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  if (isKeyboardVisible) {
    return null;
  }

  const handleTabPress = (tabId: NavTabId) => {
    const routeName =
      tabId === 'home'
        ? 'Home'
        : tabId === 'expert'
          ? 'Expert'
          : tabId === 'ai'
            ? 'AI'
            : tabId === 'session'
              ? 'Session'
              : 'Profile';

    navigation.navigate(routeName as any);
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.bottomNavSafeArea}>
      <View style={styles.container}>
        {NAV_TABS.map((tab) => {
          const isActive = currentRouteName === tab.id;
          const activeColor = theme.colors.purple;
          const inactiveColor = theme.colors.dark;

          return (
            <TouchableOpacity
              key={tab.id}
              style={styles.tabItem}
              activeOpacity={0.7}
              onPress={() => handleTabPress(tab.id)}
            >
              {isActive && <View style={styles.activeIndicator} />}

              <View style={styles.iconWrapper}>
                <RenderTabIcon id={tab.id} isActive={isActive} />
              </View>

              <Text
                style={[
                  styles.tabLabel,
                  { color: isActive ? activeColor : inactiveColor },
                  isActive && styles.activeTabLabel,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Expert" component={ExpertScreen} />
      <Tab.Screen name="AI" component={AIScreen} />
      <Tab.Screen name="Session" component={SessionScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomNavSafeArea: {
    backgroundColor: theme.colors.white,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.white,
    paddingTop: 0,
    paddingBottom: 6,
    paddingHorizontal: 6,
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderLight,
    elevation: 8,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 4,
    position: 'relative',
  },
  activeIndicator: {
    position: 'absolute',
    top: 0,
    width: 54,
    height: 6,
    backgroundColor: theme.colors.purple,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  iconWrapper: {
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  tabLabel: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
  },
  activeTabLabel: {
    fontFamily: theme.fonts.bold,
  },
});
