import React from 'react';
import { View, Dimensions, StyleProp, ViewStyle } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
import { theme } from '../../../config/theme';
import { styles } from './styles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export interface BottomWaveProps {
  style?: StyleProp<ViewStyle>;
  pinkColor?: string;
  blueColor?: string;
}

export const BottomWave: React.FC<BottomWaveProps> = ({
  style,
  pinkColor = theme.colors.pinkWave,
  blueColor = theme.colors.blueWave,
}) => {
  return (
    <View style={[styles.container, style]} pointerEvents="none">
      <Svg
        width={SCREEN_WIDTH}
        height={(154 / 375) * SCREEN_WIDTH}
        viewBox="0 0 375 220"
        fill="none"
        preserveAspectRatio="none"
      >
        <Path
          d="M375 0C375 0 362.515 60.9937 329.082 75C295.263 89.1684 271.7 47.9021 235.842 57C200.502 65.9668 203.386 116.416 166.735 115C150.752 114.383 140.942 97.8172 128.342 101.98C115.742 106.142 106.618 115.924 104.839 121.751C103.06 127.579 54.4386 110.998 30.3501 101.98C6.26171 92.961 -1.8168 119.832 0 137.36V220H375V0Z"
          fill="url(#bottom_wave_linear_gradient)"
          fillOpacity={0.25}
        />
        <Defs>
          <LinearGradient
            id="bottom_wave_linear_gradient"
            x1="366.378"
            y1="59"
            x2="160.041"
            y2="220"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor={pinkColor} stopOpacity={0.4} />
            <Stop offset="1" stopColor={blueColor} />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};
