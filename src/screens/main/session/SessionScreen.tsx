import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { ScreenWrapper } from '../../../components/layout';
import { AppText, AppHeader } from '../../../components/common';
import { theme } from '../../../config/theme';
import { styles } from './styles';

import VerifiedBadgeSvg from '../../../assets/icons/verifiedBadge.svg';
import CalendarIconSvg from '../../../assets/icons/calendarIcon.svg';
import VideoIconSvg from '../../../assets/icons/videoIcon.svg';

import DrNikitaDharmaSvg from '../../../assets/images/DrNikitaDharma.svg';
import DrRahulMehtaSvg from '../../../assets/images/Dr.RahulMehta.svg';
import DrPriyaSinghSvg from '../../../assets/images/Dr.PriyaSingh.svg';

export type SessionTab = 'upcoming' | 'completed' | 'cancelled';

export interface SessionData {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  sessionType: string;
  price: string;
  duration: string;
  AvatarComponent: React.FC<any>;
  isInstant?: boolean;
}

const UPCOMING_SESSIONS: SessionData[] = [
  {
    id: '1',
    doctorName: 'Dr. Nikita Dharma',
    specialty: 'CLINICAL PSYCOLOGIST',
    date: 'Instant',
    time: '06:00 PM',
    sessionType: 'Online Session',
    price: '₹2000',
    duration: '45 min',
    AvatarComponent: DrNikitaDharmaSvg,
    isInstant: true,
  },
  {
    id: '2',
    doctorName: 'Dr. Rahul Mehta',
    specialty: 'COUNSELING PSYCHOLOGIST',
    date: '16 Sep 2026',
    time: '06:00 PM',
    sessionType: 'Online Session',
    price: '₹2000',
    duration: '45 min',
    AvatarComponent: DrRahulMehtaSvg,
  },
];

const COMPLETED_SESSIONS: SessionData[] = [
  {
    id: '3',
    doctorName: 'Dr. Priya Singh',
    specialty: 'CLINICAL PSYCOLOGIST',
    date: '10 Aug 2026',
    time: '04:00 PM',
    sessionType: 'Online Session',
    price: '₹1500',
    duration: '45 min',
    AvatarComponent: DrPriyaSinghSvg,
  },
];

const CANCELLED_SESSIONS: SessionData[] = [];

interface SessionScreenProps {
  onBack?: () => void;
}

export const SessionScreen: React.FC<SessionScreenProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<SessionTab>('upcoming');

  const getSessionsForActiveTab = (): SessionData[] => {
    if (activeTab === 'upcoming') return UPCOMING_SESSIONS;
    if (activeTab === 'completed') return COMPLETED_SESSIONS;
    return CANCELLED_SESSIONS;
  };

  const currentSessions = getSessionsForActiveTab();

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
          currentSessions.map((session) => {
            const AvatarComp = session.AvatarComponent;
            return (
              <TouchableOpacity key={session.id} style={styles.card} activeOpacity={0.9}>
                <View style={styles.cardRow}>
                  <View style={styles.avatarWrapper}>
                    <View style={styles.doctorAvatarBox}>
                      <AvatarComp width={64} height={64} />
                    </View>
                    <View style={styles.badgeOverlay}>
                      <VerifiedBadgeSvg width={16} height={16} />
                    </View>
                  </View>

                  <View style={styles.cardContent}>
                    <View style={styles.doctorNameRow}>
                      <AppText style={styles.doctorName}>{session.doctorName}</AppText>
                      <VerifiedBadgeSvg width={14} height={14} />
                    </View>

                    <AppText style={styles.specialty}>{session.specialty}</AppText>

                    <View style={styles.infoRow}>
                      <CalendarIconSvg width={13} height={13} color={theme.colors.navy} />
                      <AppText style={styles.infoText}>
                        {session.date}  {session.time}
                      </AppText>
                    </View>

                    <View style={styles.infoRow}>
                      <VideoIconSvg width={13} height={13} color={theme.colors.navy} />
                      <AppText style={styles.infoText}>{session.sessionType}</AppText>
                    </View>
                  </View>

                  <View style={styles.priceContainer}>
                    <AppText style={styles.priceText}>{session.price}</AppText>
                    <AppText style={styles.durationText}>/ {session.duration}</AppText>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};
