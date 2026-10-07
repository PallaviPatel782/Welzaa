import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../config/theme';
import ChevronRightSvg from '../../assets/icons/chevronRight.svg';
import ArrowRightSvg from '../../assets/icons/arrowRight.svg';
import ChatBubbleIconSvg from '../../assets/icons/chatBubbleIcon.svg';
import UserIconSvg from '../../assets/icons/userIcon.svg';
import PlayIconSvg from '../../assets/icons/playIcon.svg';
import BookOpenIconSvg from '../../assets/icons/bookOpenIcon.svg';
import WellnessArticleIconSvg from '../../assets/icons/WellnessArticle.svg';
import MoodHistoryIconSvg from '../../assets/icons/MoodHistory.svg';
import WelzaaBannerSvg from '../../assets/illustrations/welzaaBanner.svg';
import MarketplaceBannerSvg from '../../assets/illustrations/marketplaceBanner.svg';

interface HomeBannerCardProps {
  activeTab?: 'welzaa' | 'marketplace';
  onGetMatchedPress?: () => void;
}

export const HomeBannerCard: React.FC<HomeBannerCardProps> = ({
  activeTab = 'welzaa',
  onGetMatchedPress,
}) => {
  const navigation = useNavigation<any>();
  const isWelzaa = activeTab === 'welzaa';

  const themeColor = isWelzaa ? theme.colors.deepPurple : theme.colors.darkEmerald;
  const stepsCardBg = isWelzaa ? theme.colors.softPurpleLight : theme.colors.greenBg;
  const badgeTextColor = themeColor;

  const badgeText = isWelzaa ? 'MOST AFFORDABLE' : 'VERIFIED SPECIALISTS';
  const heading = isWelzaa ? 'Get Matched with a\nWelzaa Expert' : 'Browse & Choose\nMarketplace Experts';
  const oldPrice = isWelzaa ? '₹499' : '₹999';
  const newPrice = isWelzaa ? '₹249' : '₹499';
  const priceLabel = isWelzaa ? 'For New Users' : 'Starting Price';

  const step1Text = isWelzaa ? 'Tell us what\nyou need' : 'Select your\ncategory';
  const step2Text = isWelzaa ? 'Welzaa finds\na suitable expert' : 'Choose an\nexpert doctor';
  const step3Text = isWelzaa ? 'Start your session\nfrom just ₹249' : 'Book instant\nor scheduled call';
  const buttonText = isWelzaa ? 'Get Matched Now' : 'Explore Marketplace';

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
        {/* Quick Navigation Sub-Tabs Bar */}
        <View style={styles.quickTabsRow}>
          <TouchableOpacity
            style={styles.quickTabItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('JournalEntries', { initialTab: 'myJournal' })}
          >
            <BookOpenIconSvg width={20} height={20} color={theme.colors.white} />
            <Text style={styles.quickTabText}>My Journal</Text>
            <View style={styles.quickTabActiveLine} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickTabItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('JournalEntries', { initialTab: 'articles' })}
          >
            <MoodHistoryIconSvg width={20} height={20} />
            <Text style={styles.quickTabText}>Wellness Article</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickTabItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('MoodHistory')}
          >
            <WellnessArticleIconSvg width={20} height={20} />
            <Text style={styles.quickTabText}>Mood History</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickTabItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ReferAFriend')}
          >
            <UserIconSvg width={20} height={20} color={theme.colors.white} />
            <Text style={styles.quickTabText}>Refer a Friend</Text>
          </TouchableOpacity>
        </View>

        {/* Main Content Row */}
        <View style={styles.topContentRow}>
          <View style={styles.leftColumn}>
            <View style={styles.affordableBadge}>
              <Text style={[styles.affordableBadgeText, { color: badgeTextColor }]}>
                {badgeText}
              </Text>
            </View>

            <Text style={styles.heading}>{heading}</Text>

            <View style={styles.pricePill}>
              <Text style={styles.oldPrice}>{oldPrice}</Text>
              <Text style={styles.newPrice}>{newPrice}</Text>
              <View style={styles.priceDivider} />
              <Text style={styles.forNewUsersText}>{priceLabel}</Text>
            </View>
          </View>
        </View>

        <View style={styles.characterContainer} pointerEvents="none">
          {isWelzaa ? (
            <WelzaaBannerSvg width={170} height={205} />
          ) : (
            <MarketplaceBannerSvg width={175} height={205} />
          )}
        </View>

        {/* Bottom Steps Card */}
        <View style={[styles.stepsCard, { backgroundColor: stepsCardBg }]}>
          <View style={styles.stepsRow}>
            <View style={styles.stepItem}>
              <View style={[styles.stepIconBg, { backgroundColor: themeColor }]}>
                <ChatBubbleIconSvg width={14} height={14} color={theme.colors.white} />
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
                <PlayIconSvg width={14} height={14} color={theme.colors.white} />
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
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: 'transparent',
    width: '100%',
  },
  cardContainer: {
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 16,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
  },
  quickTabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 4,
    marginBottom: 14,
    borderBottomWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },
  quickTabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  quickTabText: {
    fontFamily: theme.fonts.bold,
    fontSize: 11,
    color: theme.colors.white,
    marginTop: 4,
    textAlign: 'center',
  },
  quickTabActiveLine: {
    height: 3,
    width: '75%',
    backgroundColor: theme.colors.white,
    borderRadius: 2,
    marginTop: 5,
  },
  topContentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    minHeight: 140,
  },
  leftColumn: {
    flex: 1,
    paddingRight: 125,
    zIndex: 5,
  },
  characterContainer: {
    position: 'absolute',
    right: 12,
    bottom: 74,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  affordableBadge: {
    backgroundColor: theme.colors.white,
    paddingVertical: 4,
    paddingHorizontal: 12,
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
    fontSize: 21,
    color: theme.colors.white,
    lineHeight: 26,
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
    zIndex: 12,
  },
  oldPrice: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: '#78350F',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontFamily: theme.fonts.bold,
    fontSize: 19,
    color: '#1E1B4B',
  },
  priceDivider: {
    width: 1,
    height: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  forNewUsersText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: '#1E1B4B',
  },
  stepsCard: {
    borderRadius: 20,
    padding: 12,
    marginTop: 14,
    zIndex: 20,
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
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 9.5,
    color: theme.colors.black,
    lineHeight: 12.5,
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
});
