import React from 'react';
import { View, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppText } from '../AppText';
import { theme } from '../../../config/theme';
import { styles } from './styles';
import ChevronLeftSvg from '../../../assets/icons/chevronLeft.svg';

export interface AppHeaderProps {
  title?: string;
  titleElement?: React.ReactNode;
  onBackPress?: () => void;
  showBack?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  backgroundColor?: string;
  borderBottomWidth?: number;
  borderBottomColor?: string;
  centerTitle?: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  titleElement,
  onBackPress,
  showBack = true,
  leftElement,
  rightElement,
  containerStyle,
  titleStyle,
  backgroundColor = 'transparent',
  borderBottomWidth = 0,
  borderBottomColor = theme.colors.borderLight,
  centerTitle = false,
}) => {
  const navigation = useNavigation<any>();

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View
      style={[
        styles.headerContainer,
        { backgroundColor, borderBottomWidth, borderBottomColor },
        containerStyle,
      ]}
    >
      <View style={styles.leftContainer}>
        {showBack ? (
          <TouchableOpacity
            style={styles.backButton}
            activeOpacity={0.7}
            onPress={handleBack}
          >
            <ChevronLeftSvg width={22} height={22} color={theme.colors.navy} />
          </TouchableOpacity>
        ) : leftElement ? (
          leftElement
        ) : centerTitle ? (
          <View style={styles.spacer} />
        ) : null}

        {!centerTitle && (
          titleElement ? (
            titleElement
          ) : title ? (
            <AppText style={[styles.headerTitle, titleStyle]} numberOfLines={1}>
              {title}
            </AppText>
          ) : null
        )}
      </View>

      {centerTitle && (
        <View style={styles.centerContainer}>
          {titleElement ? (
            titleElement
          ) : title ? (
            <AppText style={[styles.headerTitle, titleStyle]} numberOfLines={1}>
              {title}
            </AppText>
          ) : null}
        </View>
      )}

      {rightElement ? (
        <View style={styles.rightContainer}>{rightElement}</View>
      ) : (
        <View style={styles.spacer} />
      )}
    </View>
  );
};
