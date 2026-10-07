import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { theme } from '../../config/theme';
import { HomeBannerCard } from './HomeBannerCard';

import WelzaaExpertSvg from '../../assets/illustrations/WelzaaExpert.svg';
import MarketplaceExpertSvg from '../../assets/illustrations/MarketplaceExpert.svg';
import FilletWaveRightSvg from '../../assets/illustrations/filletWaveRight.svg';
import FilletWaveLeftSvg from '../../assets/illustrations/filletWaveLeft.svg';

interface ExpertTabSelectorProps {
  onSelectTab?: (tab: 'welzaa' | 'marketplace') => void;
  onGetMatchedPress?: (tab: 'welzaa' | 'marketplace') => void;
}

export const ExpertTabSelector: React.FC<ExpertTabSelectorProps> = ({
  onSelectTab,
  onGetMatchedPress,
}) => {
  const [activeExpertTab, setActiveExpertTab] = useState<'welzaa' | 'marketplace'>('marketplace');

  const handleTabPress = (tab: 'welzaa' | 'marketplace') => {
    setActiveExpertTab(tab);
    if (onSelectTab) {
      onSelectTab(tab);
    }
  };

  const activePurple = theme.colors.deepPurple;
  const activeGreen = theme.colors.darkEmerald;
  const inactiveBg = theme.colors.cream;

  const isWelzaa = activeExpertTab === 'welzaa';
  const isMarketplace = activeExpertTab === 'marketplace';

  return (
    <View style={styles.container}>
      <View style={styles.tabHeaderRow}>
        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={[
              styles.tabCard,
              isWelzaa
                ? {
                  backgroundColor: activePurple,
                  borderTopLeftRadius: 28,
                  borderTopRightRadius: 28,
                }
                : {
                  backgroundColor: inactiveBg,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                },
            ]}
            activeOpacity={0.85}
            onPress={() => handleTabPress('welzaa')}
          >
            <View style={styles.avatarWrapper}>
              <MarketplaceExpertSvg width={54} height={54} />
            </View>
            <Text
              style={[
                styles.tabTitle,
                isWelzaa ? styles.tabTitleActive : styles.tabTitleInactive,
              ]}
            >
              Welzaa Expert
            </Text>
          </TouchableOpacity>

          {isWelzaa && (
            <View style={styles.filletWaveRightInner}>
              <FilletWaveRightSvg width={24} height={24} color={activePurple} />
            </View>
          )}
        </View>

        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={[
              styles.tabCard,
              isMarketplace
                ? {
                  backgroundColor: activeGreen,
                  borderTopLeftRadius: 28,
                  borderTopRightRadius: 28,
                }
                : {
                  backgroundColor: inactiveBg,
                  borderTopLeftRadius: 0,
                  borderTopRightRadius: 0,
                },
            ]}
            activeOpacity={0.85}
            onPress={() => handleTabPress('marketplace')}
          >
            <View style={styles.avatarWrapper}>
              <WelzaaExpertSvg width={54} height={54} />
            </View>
            <Text
              style={[
                styles.tabTitle,
                isMarketplace ? styles.tabTitleActive : styles.tabTitleInactive,
              ]}
            >
              Marketplace Expert
            </Text>
          </TouchableOpacity>

          {isMarketplace && (
            <View style={styles.filletWaveLeftInner}>
              <FilletWaveLeftSvg width={24} height={24} color={activeGreen} />
            </View>
          )}
        </View>
      </View>

      <HomeBannerCard
        activeTab={activeExpertTab}
        onGetMatchedPress={() => {
          if (onGetMatchedPress) {
            onGetMatchedPress(activeExpertTab);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingHorizontal: 0,
    width: '100%',
  },
  tabHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 0,
  },
  tabWrapper: {
    flex: 1,
    position: 'relative',
  },
  tabCard: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingHorizontal: 6,
  },
  filletWaveRightInner: {
    position: 'absolute',
    bottom: 0,
    right: -24,
    width: 24,
    height: 24,
    zIndex: 10,
  },
  filletWaveLeftInner: {
    position: 'absolute',
    bottom: 0,
    left: -20,
    width: 24,
    height: 24,
    zIndex: 10,
  },
  avatarWrapper: {
    width: 54,
    height: 54,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  tabTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 13.5,
  },
  tabTitleActive: {
    color: theme.colors.white,
  },
  tabTitleInactive: {
    color: '#273444',
  },
});
