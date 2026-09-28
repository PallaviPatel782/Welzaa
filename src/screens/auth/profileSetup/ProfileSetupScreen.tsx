import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { ScreenWrapper, FormContainer } from '../../../components/layout';
import { PrimaryButton, BottomWave, AppHeader } from '../../../components/common';
import UserIconSvg from '../../../assets/icons/userIcon.svg';
import CameraIconSvg from '../../../assets/icons/cameraIcon.svg';
import LocationPinIconSvg from '../../../assets/icons/locationPinIcon.svg';
import { theme } from '../../../config/theme';
import { styles } from './styles';

export interface ProfileSetupData {
  fullName: string;
  location: string;
  gender: string;
  photoUrl?: string;
}

interface ProfileSetupScreenProps {
  initialLocation?: string;
  onContinue?: (data: ProfileSetupData) => void;
  onBack?: () => void;
}

const GENDER_OPTIONS = [
  { id: 'female', label: 'Female' },
  { id: 'male', label: 'Male' },
  { id: 'non-binary', label: 'Non - binary' },
  { id: 'prefer-not-to-say', label: 'Prefer not to say' },
];

export const ProfileSetupScreen: React.FC<ProfileSetupScreenProps> = ({
  initialLocation = 'Village Road, Rampur',
  onContinue,
  onBack,
}) => {
  const [fullName, setFullName] = useState('');
  const [location, setLocation] = useState(initialLocation);
  const [selectedGender, setSelectedGender] = useState('female');
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const handleSelectImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
        maxWidth: 600,
        maxHeight: 600,
        selectionLimit: 1,
      });

      if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
        setPhotoUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Image picker error:', error);
    }
  };

  const handleContinue = () => {
    if (onContinue) {
      onContinue({
        fullName,
        location,
        gender: selectedGender,
        photoUrl: photoUri || undefined,
      });
    }
  };

  const isFormValid =
    fullName.trim().length > 0 &&
    location.trim().length > 0 &&
    selectedGender !== '';

  return (
    <ScreenWrapper backgroundColor={theme.colors.headerCream} renderBackground={() => <BottomWave />}>
      <FormContainer>
        <AppHeader
          title="Profile Setup"
          showBack={Boolean(onBack)}
          onBackPress={onBack}
          backgroundColor="transparent"
        />

        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeTitle}>Let’s Get to Know You</Text>
          <Text style={styles.welcomeSubtitle}>
            A few details will help us personalize your Welzaa experience
          </Text>
        </View>

        <View style={styles.avatarSection}>
          <TouchableOpacity
            style={styles.avatarDashedCircle}
            activeOpacity={0.8}
            onPress={handleSelectImage}
          >
            {photoUri ? (
              <Image source={{ uri: photoUri }} style={styles.avatarImage} />
            ) : (
              <CameraIconSvg width={32} height={32} color={theme.colors.slateGray} />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ marginTop: 8 }}
            onPress={handleSelectImage}
          >
            <Text style={styles.addPhotoLink}>
              {photoUri ? '✓ Change Photo' : '+ Add Photo'}
            </Text>
          </TouchableOpacity>
          <Text style={styles.addPhotoSubtext}>You can change this later.</Text>
        </View>

        <View style={styles.formContent}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Full Name</Text>
            <View style={styles.inputWrapper}>
              <UserIconSvg width={18} height={18} style={{ marginRight: 10 }} />
              <Text style={styles.divider}>|</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your full name"
                placeholderTextColor={theme.colors.slateGray}
                value={fullName}
                onChangeText={setFullName}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Location</Text>
            <View style={styles.inputWrapper}>
              <LocationPinIconSvg width={18} height={18} color={theme.colors.black} style={{ marginRight: 10 }} />
              <Text style={styles.divider}>|</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Village Road, Rampur"
                placeholderTextColor={theme.colors.slateGray}
                value={location}
                onChangeText={setLocation}
              />
            </View>
          </View>

          <View style={styles.genderSection}>
            <Text style={styles.genderTitle}>Select Your Gender</Text>
            {GENDER_OPTIONS.map((item) => {
              const isSelected = selectedGender === item.id;
              return (
                <TouchableOpacity
                  key={item.id}
                  style={styles.radioRow}
                  activeOpacity={0.8}
                  onPress={() => setSelectedGender(item.id)}
                >
                  <View style={[styles.radioCircle, isSelected && styles.radioCircleSelected]}>
                    {isSelected && <View style={styles.radioInnerCircle} />}
                  </View>
                  <Text style={[styles.radioLabel, isSelected && styles.radioLabelSelected]}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          <PrimaryButton
            title="CONTINUE"
            onPress={handleContinue}
            disabled={!isFormValid}
            style={styles.continueButton}
          />
        </View>
      </FormContainer>
    </ScreenWrapper>
  );
};
