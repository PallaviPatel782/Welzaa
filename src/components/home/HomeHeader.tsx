import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { theme } from '../../config/theme';

import WalletSvg from '../../assets/icons/wallet.svg';
import BellSvg from '../../assets/icons/bell.svg';
import ChevronDownSvg from '../../assets/icons/chevronDown.svg';
import LocationPinIconSvg from '../../assets/icons/locationPinIcon.svg';

interface HomeHeaderProps {
  location?: string;
  onLocationPress?: () => void;
  onWalletPress?: () => void;
  onNotificationPress?: () => void;
  onSOSPress?: () => void;
}

export const HomeHeader: React.FC<HomeHeaderProps> = ({
  location = 'Abhay Niwas - Chinchwad, Pune, Pimpri Chinch...',
  onLocationPress,
  onWalletPress,
  onNotificationPress,
  onSOSPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Image
          source={require('../../assets/logos/logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />

        <View style={styles.actionsGroup}>
          <TouchableOpacity
            style={styles.iconCircle}
            activeOpacity={0.7}
            onPress={onWalletPress}
          >
            <WalletSvg width={20} height={20} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconCircle}
            activeOpacity={0.7}
            onPress={onNotificationPress}
          >
            <BellSvg width={20} height={20} />
            <View style={styles.redBadge} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.sosButton}
            activeOpacity={0.8}
            onPress={onSOSPress}
          >
            <Text style={styles.sosText}>SOS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.locationBar}
        activeOpacity={0.7}
        onPress={onLocationPress}
      >
        <LocationPinIconSvg width={15} height={15} color={theme.colors.black} style={styles.locationPin} />

        <Text style={styles.locationText} numberOfLines={1}>
          {location}
        </Text>

        <ChevronDownSvg width={14} height={14} style={styles.chevron} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 6,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  logoImage: {
    width: 120,
    height: 42,
  },
  actionsGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: theme.colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  redBadge: {
    position: 'absolute',
    top: 6,
    right: 7,
    width: 9,
    height: 9,
    borderRadius: 4.5,
    backgroundColor: theme.colors.systemRed,
    borderWidth: 1.5,
    borderColor: theme.colors.white,
  },
  sosButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: theme.colors.charcoal,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  sosText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: theme.colors.white,
    letterSpacing: 0.5,
  },
  locationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingVertical: 2,
  },
  locationPin: {
    marginRight: 6,
  },
  locationText: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.black,
    flexShrink: 1,
  },
  chevron: {
    marginLeft: 4,
  },
});
