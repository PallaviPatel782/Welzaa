import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';

export interface ReferralItem {
  id: string;
  phone: string;
  amount: string;
  avatar: string;
}

interface ReferralListProps {
  items: ReferralItem[];
}

export const ReferralList: React.FC<ReferralListProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.headerTitle}>Total Refer Count</AppText>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <View key={item.id}>
            <View style={styles.row}>
              <View style={styles.leftRow}>
                <Image source={{ uri: item.avatar }} style={styles.avatarImage} />
                <AppText style={styles.phoneText}>{item.phone}</AppText>
              </View>
              <AppText style={styles.amountText}>₹{item.amount}</AppText>
            </View>

            {!isLast && <View style={styles.divider} />}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.dark,
    borderRadius: 16,
    padding: 16,
    backgroundColor: theme.colors.white,
  },
  headerTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: theme.colors.dark,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  avatarImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: theme.colors.softMint,
  },
  phoneText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 15,
    color: theme.colors.darkText,
  },
  amountText: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.dark,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.dark,
  },
});
