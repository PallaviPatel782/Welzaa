import React from 'react';
import { View, TouchableOpacity, StyleSheet, Share, Image } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import ShareIconSvg from '../../assets/icons/shareIcon.svg';

const referBannerImg = require('../../assets/images/ReferBanner.png');

interface ReferralCodeCardProps {
  referralCode?: string;
}

export const ReferralCodeCard: React.FC<ReferralCodeCardProps> = ({
  referralCode = 'Welzaa123',
}) => {
  const handleShare = async () => {
    try {
      await Share.share({
        message: `Use my referral code ${referralCode} to sign up on Welzaa and earn rewards!`,
      });
    } catch {
      // ignore
    }
  };

  return (
    <View style={styles.cardContainer}>
      <Image
        source={referBannerImg}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
      />
      <View style={styles.textColumn}>
        <AppText style={styles.cardTitle}>Refer A Friend</AppText>
        <AppText style={styles.cardSubtitle}>
          Each referral increases your wallet{'\n'}Count ➔
        </AppText>
        <AppText style={styles.codeText}>{referralCode}</AppText>
      </View>

      <TouchableOpacity activeOpacity={0.85} onPress={handleShare} style={styles.shareCircle}>
        <ShareIconSvg width={44} height={44} color={theme.colors.dark} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    borderRadius: 16,
    backgroundColor: theme.colors.cardCream,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: theme.colors.softAmber,
    overflow: 'hidden',
  },
  textColumn: {
    flex: 1,
    zIndex: 2,
  },
  cardTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.dark,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.gray,
    lineHeight: 16,
    marginBottom: 10,
  },
  codeText: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.blueText,
  },
  shareCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
