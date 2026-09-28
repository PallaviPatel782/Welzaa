import React from 'react';
import { View, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, BottomWave } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import { styles } from './styles';
import { DEFAULT_TRANSACTION_DETAILS } from '../../../../mock/walletMockData';

import DrNikitaDharmaSvg from '../../../../assets/images/DrNikitaDharma.svg';
import CalendarIconSvg from '../../../../assets/icons/calendarIcon.svg';
import ClockIconSvg from '../../../../assets/icons/clockIcon.svg';
import VideoIconSvg from '../../../../assets/icons/videoIcon.svg';
import BanknoteIconSvg from '../../../../assets/icons/banknoteIcon.svg';
import DocumentIconSvg from '../../../../assets/icons/documentIcon.svg';
import TicketJournalIconSvg from '../../../../assets/icons/ticketJournalIcon.svg';

export const TransactionDetailsScreen: React.FC = () => {
  const route = useRoute<any>();
  const tx = route.params?.transaction || DEFAULT_TRANSACTION_DETAILS;

  const formattedDateTime = (() => {
    if (!tx.date) return '';
    if (!tx.time || tx.date.includes(tx.time)) return tx.date;
    return `${tx.date}, ${tx.time}`;
  })();

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right']}
      renderBackground={() => <BottomWave />}
    >
      <AppHeader title="Transaction Details" backgroundColor={theme.colors.white} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.detailCard}>
          <View style={styles.detailProfileRow}>
            <View style={styles.detailProfileLeft}>
              <View style={styles.detailAvatarImageContainer}>
                <DrNikitaDharmaSvg width={56} height={56} />
              </View>

              <View style={styles.transactionDetailsCol}>
                <AppText style={styles.detailTitle}>{tx.title}</AppText>
                <AppText style={styles.detailSubtitle}>
                  {tx.doctorName || tx.subtitle}
                </AppText>
                {tx.category && (
                  <AppText style={styles.detailSubtitle}>{tx.category}</AppText>
                )}
              </View>
            </View>

            <View style={styles.statusBadgeGreen}>
              <AppText style={styles.statusBadgeTextGreen}>Successful</AppText>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.detailRow}>
            <View style={styles.detailRowLeft}>
              <CalendarIconSvg width={16} height={16} color={theme.colors.dark} />
              <AppText style={styles.detailRowLabel}>Date & Time</AppText>
            </View>
            <AppText style={styles.detailRowValue}>{formattedDateTime}</AppText>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.detailRowLeft}>
              <ClockIconSvg width={16} height={16} color={theme.colors.dark} />
              <AppText style={styles.detailRowLabel}>Duration</AppText>
            </View>
            <AppText style={styles.detailRowValue}>{tx.duration || '45 Minutes'}</AppText>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.detailRowLeft}>
              <VideoIconSvg width={16} height={16} color={theme.colors.dark} />
              <AppText style={styles.detailRowLabel}>Mode</AppText>
            </View>
            <AppText style={styles.detailRowValue}>{tx.mode || 'Online Session'}</AppText>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.detailRowLeft}>
              <BanknoteIconSvg width={16} height={16} color={theme.colors.dark} />
              <AppText style={styles.detailRowLabel}>Amount Paid</AppText>
            </View>
            <AppText style={styles.detailRowValue}>{tx.amount.replace('-', '').replace('+', '')}</AppText>
          </View>

          <View style={styles.detailRow}>
            <View style={styles.detailRowLeft}>
              <TicketJournalIconSvg width={16} height={16} color={theme.colors.dark} />
              <AppText style={styles.detailRowLabel}>Booking ID</AppText>
            </View>
            <AppText style={styles.detailRowValue}>{tx.bookingId || 'WZ123'}</AppText>
          </View>

          <View style={styles.detailInfoCalloutBox}>
            <DocumentIconSvg width={18} height={18} color={theme.colors.darkText} />
            <AppText style={styles.infoCalloutText}>
              Amount has been deducted from your wallet/selected payment method.
            </AppText>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
