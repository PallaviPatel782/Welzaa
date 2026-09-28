import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../config/theme';
import UserIconSvg from '../../assets/icons/userIcon.svg';
import StarIconSvg from '../../assets/icons/starIcon.svg';
import { VerifiedBadge, AppText } from '../common';

export interface ExpertData {
  id: string;
  name: string;
  title: string;
  categoryTag: string;
  mode: string;
  isAvailableToday?: boolean;
  rating: number;
  reviewCount: number;
  price: number;
  type: 'welzaa' | 'marketplace';
  AvatarSvg?: React.FC<any>;
}

interface ExpertCardProps {
  expert: ExpertData;
  onPress?: (expert: ExpertData) => void;
}

export const ExpertCard: React.FC<ExpertCardProps> = ({ expert, onPress }) => {
  const AvatarComp = expert.AvatarSvg;

  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.88}
      onPress={() => onPress && onPress(expert)}
    >
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarContainer}>
          {AvatarComp ? (
            <AvatarComp width={102} height={108} />
          ) : (
            <View style={styles.avatarPlaceholder}>
              <AppText style={styles.avatarText}>{expert.name.charAt(3) || 'D'}</AppText>
            </View>
          )}
        </View>
        <View style={styles.verifiedBadgePosition}>
          <VerifiedBadge size={22} />
        </View>
      </View>

      <View style={styles.detailsContainer}>
        <AppText style={styles.name} numberOfLines={1}>
          {expert.name}
        </AppText>

        <AppText style={styles.title} numberOfLines={1}>
          {expert.title.toUpperCase()}
        </AppText>

        <View style={styles.categoryPill}>
          <AppText style={styles.categoryPillText}>
            {expert.categoryTag.toUpperCase()}
          </AppText>
        </View>

        <View style={styles.infoRow}>
          <UserIconSvg width={14} height={14} color={theme.colors.gray} />
          <AppText style={styles.modeText}>
            {expert.mode}
            {expert.isAvailableToday && (
              <AppText style={styles.availableText}> • Available Today</AppText>
            )}
          </AppText>
        </View>

        <View style={styles.infoRow}>
          <StarIconSvg width={13} height={13} style={{ marginRight: 4 }} />
          <AppText style={styles.ratingText}>
            {expert.rating} <AppText style={styles.reviewsText}>({expert.reviewCount} reviews)</AppText>
          </AppText>
        </View>

        <View style={styles.priceRow}>
          <AppText style={styles.priceText}>
            ₹ {expert.price} <AppText style={styles.sessionText}>/session</AppText>
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderRadius: 18,
    padding: 12,
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    elevation: 2,
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 12,
  },
  avatarContainer: {
    width: 102,
    height: 108,
    borderRadius: 14,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 102,
    height: 108,
    borderRadius: 14,
    backgroundColor: theme.colors.borderGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontFamily: theme.fonts.bold,
    fontSize: 24,
    color: theme.colors.gray,
  },
  verifiedBadgePosition: {
    position: 'absolute',
    bottom: 4,
    right: 4,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.dark,
    marginBottom: 2,
  },
  title: {
    fontFamily: theme.fonts.semibold,
    fontSize: 10.5,
    color: theme.colors.gray,
    letterSpacing: 0.4,
    marginBottom: 4,
  },
  categoryPill: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.lightBlue,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 3,
    marginBottom: 6,
  },
  categoryPillText: {
    fontFamily: theme.fonts.bold,
    fontSize: 10,
    color: theme.colors.blueText,
    letterSpacing: 0.5,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
  },
  modeText: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.subtextSlate,
    marginLeft: 4,
  },
  availableText: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.darkPurple,
  },
  ratingText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: theme.colors.dark,
  },
  reviewsText: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.gray,
  },
  priceRow: {
    marginTop: 2,
  },
  priceText: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.dark,
  },
  sessionText: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.gray,
  },
});
