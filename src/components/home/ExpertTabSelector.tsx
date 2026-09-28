import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { theme } from '../../config/theme';
import { HomeBannerCard } from './HomeBannerCard';

import WelzaaExpertSvg from '../../assets/illustrations/WelzaaExpert.svg';
import MarketplaceExpertSvg from '../../assets/illustrations/MarketplaceExpert.svg';

interface ExpertTabSelectorProps {
  onSelectTab?: (tab: 'welzaa' | 'marketplace') => void;
}

export const ExpertTabSelector: React.FC<ExpertTabSelectorProps> = ({ onSelectTab }) => {
  const [activeExpertTab, setActiveExpertTab] = useState<'welzaa' | 'marketplace'>('welzaa');

  const handleTabPress = (tab: 'welzaa' | 'marketplace') => {
    setActiveExpertTab(tab);
    if (onSelectTab) {
      onSelectTab(tab);
    }
  };

  const activePurple = theme.colors.deepPurple;
  const activeGreen = theme.colors.darkEmerald;
  const pageCream = theme.colors.cream;

  return (
    <View style={styles.container}>
      <View style={styles.tabHeaderRow}>

        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={[
              styles.tabCard,
              activeExpertTab === 'welzaa'
                ? {
                  backgroundColor: activePurple,
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                }
                : { backgroundColor: pageCream },
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
                activeExpertTab === 'welzaa' ? styles.tabTitleActive : styles.tabTitleInactive,
              ]}
            >
              Welzaa Expert
            </Text>
          </TouchableOpacity>

          {activeExpertTab === 'welzaa' && (
            <>
              <View style={styles.filletWaveLeftOuter}>
                <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <Path d="M 20,0 A 20,20 0 0,1 0,20 L 20,20 Z" fill={activePurple} />
                </Svg>
              </View>
              <View style={styles.filletWaveRightInner}>
                <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <Path d="M 0,0 A 20,20 0 0,0 20,20 L 0,20 Z" fill={activePurple} />
                </Svg>
              </View>
            </>
          )}
        </View>

        <View style={styles.tabWrapper}>
          <TouchableOpacity
            style={[
              styles.tabCard,
              activeExpertTab === 'marketplace'
                ? {
                  backgroundColor: activeGreen,
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                }
                : { backgroundColor: pageCream },
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
                activeExpertTab === 'marketplace' ? styles.tabTitleActive : styles.tabTitleInactive,
              ]}
            >
              Marketplace Expert
            </Text>
          </TouchableOpacity>

          {activeExpertTab === 'marketplace' && (
            <>
              <View style={styles.filletWaveLeftInner}>
                <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <Path d="M 20,0 A 20,20 0 0,1 0,20 L 20,20 Z" fill={activeGreen} />
                </Svg>
              </View>
              <View style={styles.filletWaveRightOuter}>
                <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
                  <Path d="M 0,0 A 20,20 0 0,0 20,20 L 0,20 Z" fill={activeGreen} />
                </Svg>
              </View>
            </>
          )}
        </View>
      </View>

      <HomeBannerCard
        activeTab={activeExpertTab}
        onGetMatchedPress={() => {}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingHorizontal: 0,
    width: '100%',
  },
  tabHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    paddingHorizontal: 12,
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
  filletWaveLeftOuter: {
    position: 'absolute',
    bottom: -0.5,
    left: -20,
    width: 20,
    height: 20,
    zIndex: 10,
  },
  filletWaveRightInner: {
    position: 'absolute',
    bottom: -0.5,
    right: -20,
    width: 20,
    height: 20,
    zIndex: 10,
  },
  filletWaveLeftInner: {
    position: 'absolute',
    bottom: -0.5,
    left: -20,
    width: 20,
    height: 20,
    zIndex: 10,
  },
  filletWaveRightOuter: {
    position: 'absolute',
    bottom: -0.5,
    right: -20,
    width: 20,
    height: 20,
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
    color: theme.colors.black,
  },
});
