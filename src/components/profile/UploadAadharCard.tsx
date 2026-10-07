import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import IdCardIconSvg from '../../assets/icons/idCardIcon.svg';
import UploadIconSvg from '../../assets/icons/uploadIcon.svg';

interface UploadAadharCardProps {
  imageUri?: string | null;
  onImageChange?: (uri: string) => void;
  onUploadPress?: () => void;
}

export const UploadAadharCard: React.FC<UploadAadharCardProps> = ({
  imageUri,
  onImageChange,
  onUploadPress,
}) => {
  const handleSelectImage = async () => {
    if (onUploadPress) {
      onUploadPress();
      return;
    }

    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
        maxWidth: 1000,
        maxHeight: 1000,
        selectionLimit: 1,
      });

      if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
        if (onImageChange) {
          onImageChange(result.assets[0].uri);
        }
      }
    } catch (error) {
      console.log('Aadhar image picker error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.label}>Aadhar Card</AppText>
      <TouchableOpacity
        style={[styles.cardBox, imageUri ? styles.cardBoxSelected : null]}
        activeOpacity={0.85}
        onPress={handleSelectImage}
      >
        <View style={styles.leftSection}>
          {imageUri ? (
            <Image source={{ uri: imageUri }} style={styles.thumbnail} />
          ) : (
            <IdCardIconSvg width={22} height={22} color={theme.colors.dark} />
          )}
          <View style={styles.textColumn}>
            <AppText style={styles.titleText}>Aadhar Card</AppText>
            <AppText style={styles.subtext}>
              {imageUri ? 'Front side uploaded' : 'Upload front side'}
            </AppText>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.uploadButton, imageUri ? styles.uploadedButton : null]}
          activeOpacity={0.8}
          onPress={handleSelectImage}
        >
          <UploadIconSvg
            width={14}
            height={14}
            color={imageUri ? theme.colors.badgeGreenText : theme.colors.amberDarkText}
          />
          <AppText style={[styles.uploadText, imageUri ? styles.uploadedText : null]}>
            {imageUri ? 'Change' : 'Upload'}
          </AppText>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontFamily: theme.fonts.semibold,
    fontSize: 11,
    color: theme.colors.greenIcon,
    marginBottom: 4,
  },
  cardBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 58,
    backgroundColor: theme.colors.white,
  },
  cardBoxSelected: {
    borderColor: theme.colors.badgeGreen,
    backgroundColor: theme.colors.softSage,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  thumbnail: {
    width: 36,
    height: 36,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: theme.colors.dividerBorder,
  },
  textColumn: {
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13,
    color: theme.colors.dark,
  },
  subtext: {
    fontFamily: theme.fonts.regular,
    fontSize: 11,
    color: theme.colors.gray,
  },
  uploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: theme.colors.amberStar,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  uploadedButton: {
    backgroundColor: theme.colors.badgeGreen,
  },
  uploadText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: theme.colors.amberDarkText,
  },
  uploadedText: {
    color: theme.colors.badgeGreenText,
  },
});
