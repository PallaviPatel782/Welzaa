import React from 'react';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import VerifiedBadgeSvg from '../../../assets/icons/verifiedBadge.svg';

interface VerifiedBadgeProps {
  size?: number;
  style?: StyleProp<ViewStyle>;
}

export const VerifiedBadge: React.FC<VerifiedBadgeProps> = ({
  size = 20,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <VerifiedBadgeSvg width={size} height={size} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
