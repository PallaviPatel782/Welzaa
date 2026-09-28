import React from 'react';
import { Text, TextProps, StyleProp, TextStyle } from 'react-native';
import { theme } from '../../../config/theme';

export type TextVariant = 'hero' | 'title' | 'subtitle' | 'body' | 'caption' | 'label';
export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold' | 'extraBold';

export interface AppTextProps extends TextProps {
  variant?: TextVariant;
  weight?: FontWeight;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  size?: number;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
}

export const AppText: React.FC<AppTextProps> = ({
  variant = 'body',
  weight,
  color,
  align,
  size,
  style,
  children,
  ...rest
}) => {
  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case 'hero':
        return { fontSize: 28, fontFamily: theme.fonts.bold, color: theme.colors.dark };
      case 'title':
        return { fontSize: 20, fontFamily: theme.fonts.bold, color: theme.colors.dark };
      case 'subtitle':
        return { fontSize: 16, fontFamily: theme.fonts.semibold, color: theme.colors.dark };
      case 'body':
        return { fontSize: 14, fontFamily: theme.fonts.medium, color: theme.colors.darkText };
      case 'caption':
        return { fontSize: 12, fontFamily: theme.fonts.regular, color: theme.colors.gray };
      case 'label':
        return { fontSize: 10, fontFamily: theme.fonts.bold, color: theme.colors.slateGray };
      default:
        return { fontSize: 14, fontFamily: theme.fonts.regular, color: theme.colors.dark };
    }
  };

  const getFontFamily = (w?: FontWeight): string => {
    if (!w) return getVariantStyle().fontFamily || theme.fonts.regular;
    return theme.fonts[w];
  };

  const computedStyle: TextStyle = {
    ...getVariantStyle(),
    ...(weight ? { fontFamily: getFontFamily(weight) } : {}),
    ...(color ? { color } : {}),
    ...(align ? { textAlign: align } : {}),
    ...(size ? { fontSize: size } : {}),
  };

  return (
    <Text style={[computedStyle, style]} {...rest}>
      {children}
    </Text>
  );
};
