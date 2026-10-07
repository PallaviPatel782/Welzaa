import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, AppButton } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import {
  MinorAlertBanner,
  ProfileAvatar,
  InputField,
  UploadAadharCard,
  ParentsInfoSection,
} from '../../../../components/profile';
import { MOCK_PARENT_INFO } from '../../../../mock';
import CalendarIconSvg from '../../../../assets/icons/calendarIcon.svg';
import { styles } from './styles';

export const PersonalInformationScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const [isMinor, setIsMinor] = useState<boolean>(route.params?.isMinor ?? false);
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [aadharUri, setAadharUri] = useState<string | null>(null);
  const [firstName, setFirstName] = useState('');
  const [mobileNumber, setMobileNumber] = useState(MOCK_PARENT_INFO.parentMobile);
  const [dob, setDob] = useState('');

  const [parentName, setParentName] = useState(MOCK_PARENT_INFO.parentName);
  const [relationship, setRelationship] = useState(MOCK_PARENT_INFO.relationship);
  const [parentEmail, setParentEmail] = useState(MOCK_PARENT_INFO.parentEmail);
  const [parentMobile, setParentMobile] = useState(MOCK_PARENT_INFO.parentMobile);

  const handleSaveDetails = () => {
    navigation.goBack();
  };

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader title="Personal Information" onBackPress={() => navigation.goBack()} />

      {isMinor && <MinorAlertBanner />}

      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <ProfileAvatar photoUri={photoUri} onPhotoChange={setPhotoUri} />

          <AppText style={styles.introText}>Hey! Can you give us an intro?</AppText>

          <InputField
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
          />

          <InputField
            label="Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholder="Mobile Number"
          />

          <InputField
            label="Date of Birth"
            value={dob}
            onChangeText={(val) => {
              setDob(val);
              if (val.includes('201') || val.includes('202') || val.includes('17') || val.includes('16')) {
                setIsMinor(true);
              }
            }}
            placeholder="DD/MM/YYYY"
            icon={<CalendarIconSvg width={18} height={18} color={theme.colors.darkText} />}
          />

          {!isMinor ? (
            <UploadAadharCard imageUri={aadharUri} onImageChange={setAadharUri} />
          ) : (
            <ParentsInfoSection
              parentName={parentName}
              setParentName={setParentName}
              relationship={relationship}
              setRelationship={setRelationship}
              parentEmail={parentEmail}
              setParentEmail={setParentEmail}
              parentMobile={parentMobile}
              setParentMobile={setParentMobile}
            />
          )}
        </ScrollView>

        <View style={styles.bottomButtonContainer}>
          <AppButton
            title="SAVE DETAILS"
            onPress={handleSaveDetails}
            size="large"
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};
