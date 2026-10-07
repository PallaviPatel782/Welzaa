import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppText, AppHeader } from '../../../../components/common';
import { SessionCard } from '../../../../components/session';
import { theme } from '../../../../config/theme';
import { SessionTab, SessionData } from '../../../../types';
import {
  UPCOMING_SESSIONS,
  COMPLETED_SESSIONS,
  CANCELLED_SESSIONS,
} from '../../../../mock';
import { styles } from './styles';

interface SessionScreenProps {
  onBack?: () => void;
}

export const SessionScreen: React.FC<SessionScreenProps> = ({ onBack }) => {
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<SessionTab>('upcoming');

  const getSessionsForActiveTab = (): SessionData[] => {
    if (activeTab === 'upcoming') return UPCOMING_SESSIONS;
    if (activeTab === 'completed') return COMPLETED_SESSIONS;
    return CANCELLED_SESSIONS;
  };

  const currentSessions = getSessionsForActiveTab();

  const handleSessionPress = (session: SessionData) => {
    navigation.navigate('SessionDetails', { session });
  };

  return (
    <ScreenWrapper backgroundColor={theme.colors.bgLight} edges={['top', 'left', 'right']}>
      <AppHeader
        title="Session"
        onBackPress={onBack}
        backgroundColor={theme.colors.bgLight}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'upcoming' && styles.activeTabButton]}
            activeOpacity={0.8}
            onPress={() => setActiveTab('upcoming')}
          >
            <AppText style={[styles.tabText, activeTab === 'upcoming' && styles.activeTabText]}>
              Upcoming
            </AppText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'completed' && styles.activeTabButton]}
            activeOpacity={0.8}
            onPress={() => setActiveTab('completed')}
          >
            <AppText style={[styles.tabText, activeTab === 'completed' && styles.activeTabText]}>
              Completed
            </AppText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.tabButton, activeTab === 'cancelled' && styles.activeTabButton]}
            activeOpacity={0.8}
            onPress={() => setActiveTab('cancelled')}
          >
            <AppText style={[styles.tabText, activeTab === 'cancelled' && styles.activeTabText]}>
              Cancelled
            </AppText>
          </TouchableOpacity>
        </View>

        <AppText style={styles.sectionTitle}>
          {activeTab === 'upcoming'
            ? 'Upcoming Session'
            : activeTab === 'completed'
              ? 'Completed Session'
              : 'Cancelled Session'}
        </AppText>

        {currentSessions.length === 0 ? (
          <View style={styles.emptyContainer}>
            <AppText style={styles.emptyText}>
              No {activeTab} sessions found.
            </AppText>
          </View>
        ) : (
          currentSessions.map((session) => (
            <SessionCard
              key={session.id}
              session={session}
              onPress={handleSessionPress}
            />
          ))
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};
