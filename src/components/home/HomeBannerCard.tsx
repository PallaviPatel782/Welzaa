import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../config/theme';
import { AppFastImage } from '../common';
import ChevronRightSvg from '../../assets/icons/chevronRight.svg';
import ArrowRightSvg from '../../assets/icons/arrowRight.svg';
import ChatBubbleIconSvg from '../../assets/icons/chatBubbleIcon.svg';
import UserIconSvg from '../../assets/icons/userIcon.svg';
import PlayIconSvg from '../../assets/icons/playIcon.svg';
import ShieldCheckIconSvg from '../../assets/icons/shieldCheckIcon.svg';
import LockIconSvg from '../../assets/icons/lockIcon.svg';

const welzaaBannerImg = require('../../assets/illustrations/welzaaBanner.jpg');
const marketplaceBannerImg = require('../../assets/illustrations/marketplaceBanner.jpg');

interface HomeBannerCardProps {
  activeTab?: 'welzaa' | 'marketplace';
  onGetMatchedPress?: () => void;
}

export const HomeBannerCard: React.FC<HomeBannerCardProps> = ({
  activeTab = 'welzaa',
  onGetMatchedPress,
}) => {
  const isWelzaa = activeTab === 'welzaa';

  const themeColor = isWelzaa ? theme.colors.deepPurple : theme.colors.darkEmerald;
  const stepsCardBg = isWelzaa ? theme.colors.softPurpleLight : theme.colors.greenBg;
  const badgeTextColor = themeColor;

  const bannerImage = isWelzaa ? welzaaBannerImg : marketplaceBannerImg;
  const badgeText = isWelzaa ? 'MOST AFFORDABLE' : 'VERIFIED SPECIALISTS';
  const heading = isWelzaa ? 'Get Matched with a\nWelzaa Expert' : 'Browse & Choose\nMarketplace Experts';
  const subheading = isWelzaa
    ? 'Tell us what you need, and Welzaa will match you with an available expert from our network.'
    : 'Explore top-rated counselors, therapists, and wellness specialists directly from our network.';
  const oldPrice = isWelzaa ? '₹499' : '₹999';
  const newPrice = isWelzaa ? '₹249' : '₹499';
  const priceLabel = isWelzaa ? 'For New Users' : 'Starting From';

  const step1Text = isWelzaa ? 'Tell us what\nyou need' : 'Select your\ncategory';
  const step2Text = isWelzaa ? 'Welzaa finds\na suitable expert' : 'Choose an\nexpert doctor';
  const step3Text = isWelzaa ? 'Start your session\nfrom just ₹249' : 'Book instant\nor scheduled call';
  const buttonText = isWelzaa ? 'Get Matched Now' : 'Explore Marketplace';

  const trustBadge1Text = isWelzaa ? 'Verified\nWelzaa Experts' : 'Verified\nMarket Experts';
  const trustBadge2Text = isWelzaa ? 'Affordable\n& Accessible' : 'Transparent\nRatings & Reviews';
  const trustBadge3Text = isWelzaa ? 'Your Privacy\nOur Priority' : '100% Private\n& Secure';

  const trustBadge1Color = isWelzaa ? theme.colors.brightIndigo : theme.colors.darkEmerald;
  const trustBadge3Color = isWelzaa ? theme.colors.purple : theme.colors.greenIcon;

  return (
    <View style={styles.outerContainer}>

      <View
        style={[
          styles.cardContainer,
          {
            backgroundColor: themeColor,
            borderTopLeftRadius: isWelzaa ? 0 : 28,
            borderTopRightRadius: isWelzaa ? 28 : 0,
            shadowColor: themeColor,
          },
        ]}
      >
        <View style={styles.topContentRow}>

          <View style={styles.leftColumn}>

            <View style={styles.affordableBadge}>
              <Text style={[styles.affordableBadgeText, { color: badgeTextColor }]}>
                {badgeText}
              </Text>
            </View>

            <Text style={styles.heading}>{heading}</Text>

            <Text style={styles.subheading}>{subheading}</Text>

            <View style={styles.pricePill}>
              <Text style={styles.oldPrice}>{oldPrice}</Text>
              <Text style={styles.newPrice}>{newPrice}</Text>
              <View style={styles.priceDivider} />
              <Text style={styles.forNewUsersText}>{priceLabel}</Text>
            </View>
          </View>

          <View style={styles.rightColumn}>
            <View style={styles.illustrationWrapper}>
              <AppFastImage
                source={bannerImage}
                style={styles.bannerImage}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>

        <View style={[styles.stepsCard, { backgroundColor: stepsCardBg }]}>
          <View style={styles.stepsRow}>

            <View style={styles.stepItem}>
              <View style={[styles.stepIconBg, { backgroundColor: themeColor }]}>
                <ChatBubbleIconSvg width={15} height={15} color={theme.colors.white} />
              </View>
              <Text style={styles.stepText}>{step1Text}</Text>
            </View>

            <ChevronRightSvg width={12} height={12} color={theme.colors.slateGray} style={styles.stepChevron} />

            <View style={styles.stepItem}>
              <View style={[styles.stepIconBg, { backgroundColor: themeColor }]}>
                <UserIconSvg width={15} height={15} color={theme.colors.white} />
              </View>
              <Text style={styles.stepText}>{step2Text}</Text>
            </View>

            <ChevronRightSvg width={12} height={12} color={theme.colors.slateGray} style={styles.stepChevron} />

            <View style={styles.stepItem}>
              <View style={[styles.stepIconBg, { backgroundColor: themeColor }]}>
                <PlayIconSvg width={15} height={15} color={theme.colors.white} />
              </View>
              <Text style={styles.stepText}>{step3Text}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={[styles.getMatchedButton, { backgroundColor: themeColor }]}
            activeOpacity={0.85}
            onPress={onGetMatchedPress}
          >
            <Text style={styles.getMatchedButtonText}>{buttonText}</Text>
            <ArrowRightSvg width={16} height={16} color={theme.colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.trustBadgesCard}>
        <View style={styles.trustItem}>
          <View style={[styles.trustIconBg, { backgroundColor: trustBadge1Color }]}>
            <ShieldCheckIconSvg width={14} height={14} color={theme.colors.white} />
          </View>
          <Text style={styles.trustText}>{trustBadge1Text}</Text>
        </View>

        <View style={styles.trustDivider} />

        <View style={styles.trustItem}>
          <Text style={[styles.rupeeIconText, { color: trustBadge3Color }]}>₹</Text>
          <Text style={styles.trustText}>{trustBadge2Text}</Text>
        </View>

        <View style={styles.trustDivider} />

        <View style={styles.trustItem}>
          <View style={[styles.trustIconBg, { backgroundColor: trustBadge3Color }]}>
            <LockIconSvg width={14} height={14} color={theme.colors.white} />
          </View>
          <Text style={styles.trustText}>{trustBadge3Text}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  cardContainer: {
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  topContentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  leftColumn: {
    flex: 1,
    paddingRight: 6,
  },
  affordableBadge: {
    backgroundColor: theme.colors.white,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  affordableBadgeText: {
    fontFamily: theme.fonts.bold,
    fontSize: 10,
    letterSpacing: 0.6,
  },
  heading: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.white,
    lineHeight: 25,
    marginBottom: 6,
  },
  subheading: {
    fontFamily: theme.fonts.regular,
    fontSize: 11,
    color: theme.colors.whiteOverlay,
    lineHeight: 15,
    marginBottom: 12,
  },
  pricePill: {
    backgroundColor: theme.colors.brightYellow,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 14,
    alignSelf: 'flex-start',
    gap: 6,
  },
  oldPrice: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.gray,
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontFamily: theme.fonts.bold,
    fontSize: 20,
    color: theme.colors.pureBlack,
  },
  priceDivider: {
    width: 1,
    height: 16,
    backgroundColor: theme.colors.overlayLight,
  },
  forNewUsersText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: theme.colors.pureBlack,
  },
  rightColumn: {
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  illustrationWrapper: {
    width: 120,
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerImage: {
    width: 120,
    height: 120,
    borderRadius: 16,
  },
  stepsCard: {
    borderRadius: 20,
    padding: 12,
    marginTop: 14,
  },
  stepsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  stepItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 6,
  },
  stepIconBg: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 10,
    color: theme.colors.black,
    lineHeight: 13,
    flexShrink: 1,
  },
  stepChevron: {
    marginHorizontal: 2,
  },
  getMatchedButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 25,
    gap: 8,
  },
  getMatchedButtonText: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.white,
  },
  trustBadgesCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: theme.colors.white,
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginTop: 12,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  trustItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  trustIconBg: {
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rupeeIconText: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
  },
  trustText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 10.5,
    color: theme.colors.black,
    lineHeight: 14,
  },
  trustDivider: {
    width: 1,
    height: 24,
    backgroundColor: theme.colors.lightGray,
  },
});
