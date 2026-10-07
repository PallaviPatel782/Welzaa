import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { theme } from '../../../config/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const AppButton: React.FC<AppButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  style,
  textStyle,
  activeOpacity = 0.85,
  ...rest
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          button: { backgroundColor: theme.colors.purple, borderWidth: 0 },
          text: { color: theme.colors.white },
        };
      case 'secondary':
        return {
          button: { backgroundColor: theme.colors.lightBlue, borderWidth: 0 },
          text: { color: theme.colors.blueText },
        };
      case 'outline':
        return {
          button: { backgroundColor: 'transparent', borderWidth: 1.5, borderColor: theme.colors.purple },
          text: { color: theme.colors.purple },
        };
      case 'ghost':
        return {
          button: { backgroundColor: 'transparent', borderWidth: 0 },
          text: { color: theme.colors.dark },
        };
      case 'danger':
        return {
          button: { backgroundColor: theme.colors.red, borderWidth: 0 },
          text: { color: theme.colors.white },
        };
      default:
        return {
          button: { backgroundColor: theme.colors.purple, borderWidth: 0 },
          text: { color: theme.colors.white },
        };
    };
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          button: { paddingVertical: 6, paddingHorizontal: 12, borderRadius: 5 },
          text: { fontSize: 12, fontFamily: theme.fonts.bold },
        };
      case 'large':
        return {
          button: { paddingVertical: 12, paddingHorizontal: 20, borderRadius: 10 },
          text: { fontSize: 15, fontFamily: theme.fonts.bold },
        };
      case 'medium':
      default:
        return {
          button: { paddingVertical: 10, paddingHorizontal: 16, borderRadius: 8 },
          text: { fontSize: 14, fontFamily: theme.fonts.bold },
        };
    }
  };

  const vStyles = getVariantStyles();
  const sStyles = getSizeStyles();

  return (
    <TouchableOpacity
      style={[
        styles.baseButton,
        vStyles.button,
        sStyles.button,
        disabled && styles.disabledButton,
        style,
      ]}
      activeOpacity={activeOpacity}
      onPress={onPress}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator color={vStyles.text.color} size="small" />
      ) : (
        <View style={styles.contentRow}>
          {leftIcon && <View style={styles.iconMarginRight}>{leftIcon}</View>}
          <Text style={[vStyles.text, sStyles.text, disabled && styles.disabledText, textStyle]}>
            {title}
          </Text>
          {rightIcon && <View style={styles.iconMarginLeft}>{rightIcon}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconMarginRight: {
    marginRight: 8,
  },
  iconMarginLeft: {
    marginLeft: 8,
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledText: {
    color: theme.colors.gray,
  },
});
