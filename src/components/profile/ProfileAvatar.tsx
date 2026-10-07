import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { theme } from '../../config/theme';
import UserIconSvg from '../../assets/icons/userIcon.svg';
import CameraIconSvg from '../../assets/icons/cameraIcon.svg';

interface ProfileAvatarProps {
  photoUri?: string | null;
  onPhotoChange?: (uri: string) => void;
  onCameraPress?: () => void;
}

export const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  photoUri,
  onPhotoChange,
  onCameraPress,
}) => {
  const handleSelectImage = async () => {
    if (onCameraPress) {
      onCameraPress();
      return;
    }

    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
        maxWidth: 600,
        maxHeight: 600,
        selectionLimit: 1,
      });

      if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
        if (onPhotoChange) {
          onPhotoChange(result.assets[0].uri);
        }
      }
    } catch (error) {
      console.log('Image picker error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.avatarCircle}
        activeOpacity={0.85}
        onPress={handleSelectImage}
      >
        {photoUri ? (
          <Image source={{ uri: photoUri }} style={styles.avatarImage} />
        ) : (
          <UserIconSvg width={40} height={40} color={theme.colors.darkText} />
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cameraBadge}
        activeOpacity={0.8}
        onPress={handleSelectImage}
      >
        <CameraIconSvg width={13} height={13} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginVertical: 20,
    position: 'relative',
  },
  avatarCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 1.5,
    borderColor: theme.colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 48,
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: theme.colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
});
