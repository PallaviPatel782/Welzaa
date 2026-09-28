import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, BottomWave } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import { styles } from './styles';
import { MOCK_TRANSACTIONS, DEFAULT_WALLET_BALANCE } from '../../../../mock/walletMockData';

import WalletBannerSvg from '../../../../assets/images/walletbanner.svg';
import WalletIconSvg from '../../../../assets/icons/wallet.svg';
import DocumentIconSvg from '../../../../assets/icons/documentIcon.svg';
import ArrowDownLeftSvg from '../../../../assets/icons/arrowDownLeft.svg';
import ArrowUpRightSvg from '../../../../assets/icons/arrowUpRight.svg';

export const WalletScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [activeFilter, setActiveFilter] = useState<'all' | 'refunds' | 'wallet'>('all');

  const filteredTransactions = MOCK_TRANSACTIONS.filter((tx) => {
    if (activeFilter === 'refunds') return tx.type === 'refund';
    if (activeFilter === 'wallet') return tx.type === 'add';
    return true;
  });

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right']}
      renderBackground={() => <BottomWave />}
    >
      <AppHeader title="Wallet" backgroundColor={theme.colors.white} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.bannerContainer}>
          <WalletBannerSvg style={styles.bannerSvgBackground} width="100%" height="100%" preserveAspectRatio="none" />

          <View style={styles.bannerContent}>
            <View style={styles.bannerTopRow}>
              <View style={styles.walletIconCircle}>
                <WalletIconSvg width={20} height={20} />
              </View>

              <View>
                <AppText style={styles.bannerLabel}>Wallet Balance</AppText>
                <AppText style={styles.bannerBalance}>{DEFAULT_WALLET_BALANCE}</AppText>
              </View>
            </View>

            <TouchableOpacity
              style={styles.addMoneyBannerButton}
              activeOpacity={0.85}
              onPress={() => navigation.navigate('AddMoney')}
            >
              <AppText style={styles.addMoneyBannerButtonText}>Add Money</AppText>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.infoCalloutBox}>
          <DocumentIconSvg width={18} height={18} color={theme.colors.greenIcon} />
          <AppText style={styles.infoCalloutText}>
            Wallet balance can be used for eligible bookings and refunds. Withdrawals are not available.
          </AppText>
        </View>

        <AppText style={styles.sectionTitle}>Recent Activity</AppText>

        <View style={styles.filterRow}>
          <TouchableOpacity
            style={[styles.filterPill, activeFilter === 'all' && styles.filterPillActive]}
            onPress={() => setActiveFilter('all')}
          >
            <AppText style={[styles.filterPillText, activeFilter === 'all' && styles.filterPillTextActive]}>
              All
            </AppText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterPill, activeFilter === 'refunds' && styles.filterPillActive]}
            onPress={() => setActiveFilter('refunds')}
          >
            <AppText style={[styles.filterPillText, activeFilter === 'refunds' && styles.filterPillTextActive]}>
              Refunds
            </AppText>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.filterPill, activeFilter === 'wallet' && styles.filterPillActive]}
            onPress={() => setActiveFilter('wallet')}
          >
            <AppText style={[styles.filterPillText, activeFilter === 'wallet' && styles.filterPillTextActive]}>
              Wallet
            </AppText>
          </TouchableOpacity>
        </View>

        <AppText style={styles.dateGroupHeader}>Today, 16 Sep 2026</AppText>

        <View style={styles.transactionCardGroup}>
          {filteredTransactions.map((tx, idx) => (
            <React.Fragment key={tx.id}>
              {idx > 0 && <View style={styles.divider} />}
              <TouchableOpacity
                style={styles.transactionItem}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('TransactionDetails', { transaction: tx })}
              >
                <View style={styles.transactionItemLeft}>
                  <View style={styles.transactionIconBox}>
                    {tx.isPositive ? (
                      <ArrowDownLeftSvg width={15} height={15} />
                    ) : (
                      <ArrowUpRightSvg width={15} height={15} />
                    )}
                  </View>

                  <View style={styles.transactionDetailsCol}>
                    <AppText style={styles.transactionTitle}>{tx.title}</AppText>
                    <AppText style={styles.transactionSubtitle}>{tx.subtitle}</AppText>
                    <AppText style={styles.transactionDate}>{tx.date}</AppText>
                  </View>
                </View>

                <AppText style={tx.isPositive ? styles.transactionAmountGreen : styles.transactionAmountRed}>
                  {tx.amount}
                </AppText>
              </TouchableOpacity>
            </React.Fragment>
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
