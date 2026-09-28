import React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { theme } from '../../../config/theme';

export interface AppGradientBackgroundProps {
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

export const AppGradientBackground: React.FC<AppGradientBackgroundProps> = ({
  colors = [theme.colors.aiBgStart, theme.colors.aiBgEnd],
  start = { x: 0, y: 0.5 },
  end = { x: 1, y: 0.5 },
  style,
  children,
}) => {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      style={[StyleSheet.absoluteFill, style]}
      pointerEvents={children ? 'auto' : 'none'}
    >
      {children}
    </LinearGradient>
  );
};
