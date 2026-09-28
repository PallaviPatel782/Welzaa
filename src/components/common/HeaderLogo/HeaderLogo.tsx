import React from 'react';
import { View, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { AppFastImage } from '../AppFastImage';
import BackArrowSvg from '../../../assets/icons/backArrow.svg';
import { styles } from './styles';

export interface HeaderLogoProps {
  style?: StyleProp<ViewStyle>;
  imageStyle?: any;
  onBack?: () => void;
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({
  style,
  imageStyle,
  onBack,
}) => {
  return (
    <View style={[styles.container, style]}>
      {onBack && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => onBack && onBack()}
          activeOpacity={0.7}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <BackArrowSvg width={24} height={24} />
        </TouchableOpacity>
      )}
      <AppFastImage
        source={require('../../../assets/logos/logo.png')}
        style={[styles.logoImage, imageStyle]}
      />
    </View>
  );
};
