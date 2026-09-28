import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../config/theme';

import HouseSvg from '../../assets/illustrations/house.svg';
import LeavesSvg from '../../assets/illustrations/leaves.svg';
import MarketplaceExpertSvg from '../../assets/illustrations/MarketplaceExpert.svg';
import WelzaaExpertSvg from '../../assets/illustrations/WelzaaExpert.svg';

export type ExpertType = 'welzaa' | 'marketplace';

interface ExpertTypeCardsProps {
  selectedType: ExpertType;
  onSelectType: (type: ExpertType) => void;
}

export const ExpertTypeCards: React.FC<ExpertTypeCardsProps> = ({
  selectedType,
  onSelectType,
}) => {
  const isWelzaaActive = selectedType === 'welzaa';
  const isMarketplaceActive = selectedType === 'marketplace';

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.card,
          styles.welzaaCard,
          isWelzaaActive && styles.welzaaCardActive,
        ]}
        activeOpacity={0.85}
        onPress={() => onSelectType('welzaa')}
      >
        <View style={styles.cardContent}>
          <View style={styles.leftCol}>
            <View style={styles.iconBadge}>
              <LeavesSvg width={20} height={20} />
            </View>
            <Text style={styles.cardTitle}>
              Welzaa{'\n'}Expert
            </Text>
          </View>

          <View style={styles.rightCol}>
            <WelzaaExpertSvg width={56} height={64} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.card,
          styles.marketplaceCard,
          isMarketplaceActive && styles.marketplaceCardActive,
        ]}
        activeOpacity={0.85}
        onPress={() => onSelectType('marketplace')}
      >
        <View style={styles.cardContent}>
          <View style={styles.leftCol}>
            <View style={styles.iconBadge}>
              <HouseSvg width={20} height={20} />
            </View>
            <Text style={styles.cardTitle}>
              Marketplace{'\n'}Expert
            </Text>
          </View>

          <View style={styles.rightCol}>
            <MarketplaceExpertSvg width={56} height={64} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 12,
  },
  card: {
    flex: 1,
    height: 86,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: theme.colors.borderGray,
    backgroundColor: theme.colors.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    elevation: 2,
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
  },
  welzaaCard: {
    backgroundColor: theme.colors.lightTeal,
    borderColor: theme.colors.tealBorder,
  },
  welzaaCardActive: {
    backgroundColor: theme.colors.lightTeal,
    borderColor: theme.colors.teal,
    borderWidth: 1.5,
  },
  marketplaceCard: {
    backgroundColor: theme.colors.lightRose,
    borderColor: theme.colors.roseBorder,
  },
  marketplaceCardActive: {
    backgroundColor: theme.colors.lightRose,
    borderColor: theme.colors.softRed,
    borderWidth: 1.5,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
  },
  leftCol: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },
  iconBadge: {
    marginTop: 2,
  },
  cardTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    lineHeight: 15,
    color: theme.colors.dark,
    marginBottom: 2,
  },
  rightCol: {
    width: 56,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
