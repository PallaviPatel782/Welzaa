import React from 'react';
import { View, StatusBar, StatusBarStyle, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import { styles } from './styles';

export interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
  barStyle?: StatusBarStyle;
  edges?: Edge[];
  backgroundColor?: string;
  renderBackground?: () => React.ReactNode;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  style,
  safeAreaStyle,
  barStyle = 'dark-content',
  edges = ['top', 'bottom', 'left', 'right'],
  backgroundColor,
  renderBackground,
}) => {
  return (
    <View style={[styles.container, backgroundColor ? { backgroundColor } : null, style]}>
      <StatusBar barStyle={barStyle} />
      {renderBackground && renderBackground()}
      <SafeAreaView style={[styles.safeArea, safeAreaStyle]} edges={edges}>
        {children}
      </SafeAreaView>
    </View>
  );
};
