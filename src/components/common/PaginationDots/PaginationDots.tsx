import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

export interface PaginationDotsProps {
  total: number;
  currentIndex: number;
  containerStyle?: StyleProp<ViewStyle>;
  activeColor?: string;
  inactiveColor?: string;
}

export const PaginationDots: React.FC<PaginationDotsProps> = ({
  total,
  currentIndex,
  containerStyle,
  activeColor,
  inactiveColor,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentIndex === index
              ? [styles.activeDot, activeColor ? { backgroundColor: activeColor } : null]
              : [styles.inactiveDot, inactiveColor ? { backgroundColor: inactiveColor } : null],
          ]}
        />
      ))}
    </View>
  );
};
