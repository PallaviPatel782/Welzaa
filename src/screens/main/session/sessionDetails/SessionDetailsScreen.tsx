import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import {
  DoctorSummaryCard,
  SessionGridDetails,
  SessionGoalsSection,
} from '../../../../components/session';
import { theme } from '../../../../config/theme';

import CalendarIconSvg from '../../../../assets/icons/calendarIcon.svg';
import ClockIconSvg from '../../../../assets/icons/clockIcon.svg';
import VideoIconSvg from '../../../../assets/icons/videoIcon.svg';
import CreditCardIconSvg from '../../../../assets/icons/creditCardIcon.svg';
import DocumentIconSvg from '../../../../assets/icons/documentIcon.svg';
import EditIconSvg from '../../../../assets/icons/Edit.svg';
import DownloadIconSvg from '../../../../assets/icons/downloadIcon.svg';
import CancelSvg from '../../../../assets/icons/cancel.svg';
import NoteSvg from '../../../../assets/icons/note.svg';

import DrNikitaDharmaSvg from '../../../../assets/images/DrNikitaDharma.svg';
import { styles } from './styles';

export const SessionDetailsScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const session = route.params?.session || {
    id: '1',
    doctorName: 'Dr. Anjali Sharma',
    specialty: 'Relationship Expert',
    dateTime: '16 Sep 2026, 06:00 PM',
    duration: '45 Minutes',
    mode: 'Online Session',
    amountPaid: '₹500',
    bookingId: 'WZ123',
    status: 'upcoming',
    AvatarComponent: DrNikitaDharmaSvg,
  };

  const status = (session.status || 'upcoming').toLowerCase();

  const handleJoinSession = () => {
    navigation.navigate('JoinSession', { session });
  };

  const handleDownloadInvoice = () => {
    Alert.alert('Invoice Download', 'Invoice download started successfully.');
  };

  return (
    <ScreenWrapper backgroundColor={theme.colors.bgLight} edges={['top', 'left', 'right', 'bottom']}>
      <AppHeader
        title="Session"
        onBackPress={() => navigation.goBack()}
        backgroundColor={theme.colors.bgLight}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.card}>
          <DoctorSummaryCard
            doctorName={session.doctorName}
            specialty={session.specialty}
            AvatarComponent={session.AvatarComponent}
            rightElement={
              status === 'completed' ? (
                <TouchableOpacity
                  style={styles.downloadInvoiceBtn}
                  activeOpacity={0.8}
                  onPress={handleDownloadInvoice}
                >
                  <AppText style={styles.downloadInvoiceText}>Download Invoice</AppText>
                  <DownloadIconSvg width={12} height={12} color={theme.colors.black} />
                </TouchableOpacity>
              ) : status === 'upcoming' ? (
                <View style={styles.statusBadge}>
                  <AppText style={styles.statusText}>Upcoming</AppText>
                </View>
              ) : null
            }
          />

          {status === 'completed' ? (
            <>
              <SessionGridDetails
                dateTime={session.dateTime}
                duration={session.duration}
                mode={session.sessionType || session.mode}
              />

              <View style={styles.summaryBox}>
                <EditIconSvg width={18} height={18} color="#B7791F" style={styles.noteIcon} />
                <View style={styles.summaryContent}>
                  <AppText style={styles.summaryTitle}>Session Summary</AppText>
                  <AppText style={styles.summaryText}>
                    {session.summary ||
                      'Discussed Current Challenges, Explored coping strategies and worked on goals.'}
                  </AppText>
                </View>
              </View>

              <SessionGoalsSection goals={session.goals} />
            </>
          ) : status === 'cancelled' ? (
            <>
              <SessionGridDetails
                dateTime={session.dateTime}
                duration={session.duration}
                mode={session.sessionType || session.mode}
              />

              <View style={styles.cancelledAlertBox}>
                <AppText style={styles.cancelledAlertTitle}>Session Cancelled</AppText>
                <AppText style={styles.cancelledAlertSubtext}>
                  {session.cancelledDate
                    ? `This session was cancelled on ${session.cancelledDate}`
                    : 'This session was cancelled on 12 Sep 2026 at 10:24 AM.'}
                </AppText>
              </View>

              <View style={styles.reasonHeaderRow}>
                <CancelSvg width={18} height={18} style={{ marginTop: 2 }} />
                <View>
                  <AppText style={styles.reasonHeaderTitle}>Reason for Cancellation</AppText>
                  <AppText style={styles.reasonHeaderSubtitle}>Selected reason for canceling session.</AppText>
                </View>
              </View>

              <View style={styles.reasonCardBox}>
                <View style={styles.reasonIconBox}>
                  <CalendarIconSvg width={18} height={18} />
                </View>
                <View style={styles.reasonTextCol}>
                  <AppText style={styles.reasonTitle}>
                    {session.cancelReason || 'Schedule Conflict'}
                  </AppText>
                  <AppText style={styles.reasonSubtext}>
                    {session.cancelReasonSubtext || "I'm not available at this time."}
                  </AppText>
                </View>
              </View>

              <View style={styles.reasonHeaderRow}>
                <NoteSvg width={18} height={18} style={{ marginTop: 2 }} />
                <View>
                  <AppText style={styles.reasonHeaderTitle}>Additional Note (Optional)</AppText>
                  <AppText style={styles.reasonHeaderSubtitle}>You can add a brief message for your counselor.</AppText>
                </View>
              </View>

              <View style={styles.noteDisplayContainer}>
                <AppText style={styles.noteDisplayText}>
                  {session.additionalNote || "e.g I'm not feeling well.will reschedule soon..."}
                </AppText>
                <AppText style={styles.noteCounterText}>0/100</AppText>
              </View>
            </>
          ) : (
            <>
              <View style={styles.divider} />

              <View style={styles.detailsList}>
                <View style={styles.detailRow}>
                  <View style={styles.leftLabelGroup}>
                    <CalendarIconSvg width={16} height={16} color={theme.colors.navy} />
                    <AppText style={styles.detailLabel}>Date & Time</AppText>
                  </View>
                  <AppText style={styles.detailValue}>{session.dateTime || '16 Sep 2026 06:00 PM'}</AppText>
                </View>

                <View style={styles.detailRow}>
                  <View style={styles.leftLabelGroup}>
                    <ClockIconSvg width={16} height={16} color={theme.colors.navy} />
                    <AppText style={styles.detailLabel}>Duration</AppText>
                  </View>
                  <AppText style={styles.detailValue}>{session.duration || '45 Minutes'}</AppText>
                </View>

                <View style={styles.detailRow}>
                  <View style={styles.leftLabelGroup}>
                    <VideoIconSvg width={16} height={16} color={theme.colors.navy} />
                    <AppText style={styles.detailLabel}>Mode</AppText>
                  </View>
                  <AppText style={styles.detailValue}>{session.mode || 'Online Session'}</AppText>
                </View>

                <View style={styles.detailRow}>
                  <View style={styles.leftLabelGroup}>
                    <CreditCardIconSvg width={16} height={16} color={theme.colors.navy} />
                    <AppText style={styles.detailLabel}>Amount Paid</AppText>
                  </View>
                  <AppText style={styles.detailValue}>{session.amountPaid || '₹500'}</AppText>
                </View>

                <View style={styles.detailRow}>
                  <View style={styles.leftLabelGroup}>
                    <DocumentIconSvg width={16} height={16} color={theme.colors.navy} />
                    <AppText style={styles.detailLabel}>Booking ID</AppText>
                  </View>
                  <AppText style={styles.detailValue}>{session.bookingId || 'WZ123'}</AppText>
                </View>
              </View>

              <View style={styles.noteBox}>
                <EditIconSvg width={16} height={16} color={theme.colors.dark} style={styles.noteIcon} />
                <AppText style={styles.noteText}>
                  Amount has been deducted from your wallet/selected payment method.
                </AppText>
              </View>

              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.joinButton}
                  activeOpacity={0.85}
                  onPress={handleJoinSession}
                >
                  <AppText style={styles.joinButtonText}>Join Session</AppText>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.outlinedButton}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('RescheduleSession', { session })}
                >
                  <AppText style={styles.outlinedButtonText}>Reschedule</AppText>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.outlinedButton}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate('CancelSession', { session, isEligible: true })}
                >
                  <AppText style={styles.outlinedButtonText}>Cancel Session</AppText>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
