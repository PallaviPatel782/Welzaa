import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import { HeaderLogo, PrimaryButton, BottomWave } from '../../../components/common';
import { ScreenWrapper, FormContainer } from '../../../components/layout';
import UserIconSvg from '../../../assets/icons/userIcon.svg';
import HeartIconSvg from '../../../assets/icons/heartIcon.svg';
import ChevronDownSvg from '../../../assets/icons/chevronDown.svg';
import IndiaFlagSvg from '../../../assets/icons/indiaFlag.svg';
import InfoIconSvg from '../../../assets/icons/infoIcon.svg';
import CheckIconSvg from '../../../assets/icons/checkIcon.svg';
import { theme } from '../../../config/theme';
import { styles } from './styles';

const RELATIONSHIP_OPTIONS = [
  'Mother',
  'Father',
  'Legal Guardian',
  'Stepparent',
  'Grandparent',
  'Foster Parent',
  'Other',
];

interface ParentConsentScreenProps {
  onSubmit?: (data: {
    parentName: string;
    relationship: string;
    parentMobile: string;
    parentEmail: string;
  }) => void;
  onBack?: () => void;
}

export const ParentConsentScreen: React.FC<ParentConsentScreenProps> = ({
  onSubmit,
  onBack,
}) => {
  const [parentName, setParentName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [parentMobile, setParentMobile] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [isConsentGiven, setIsConsentGiven] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = () => {
    if (onSubmit) {
      onSubmit({
        parentName,
        relationship,
        parentMobile,
        parentEmail,
      });
    }
  };

  const isFormValid =
    parentName.trim().length > 0 &&
    relationship !== '' &&
    parentMobile.trim().length >= 10 &&
    parentEmail.trim().length > 0 &&
    isConsentGiven;

  return (
    <ScreenWrapper backgroundColor={theme.colors.headerCream} renderBackground={() => <BottomWave />}>
      <FormContainer>
        <HeaderLogo style={styles.headerWrapper} imageStyle={styles.logoImage} onBack={onBack} />

        <View style={styles.welcomeBox}>
          <Text style={styles.welcomeTitle}>Parent Consent</Text>
          <Text style={styles.welcomeSubtitle}>
            Since you're under 18, we need permission from a parent or legal guardian
            before you can book a counseling session.
          </Text>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Parent / Guardian Name</Text>
            <View style={styles.iconInputWrapper}>
              <UserIconSvg width={20} height={20} style={{ marginRight: 10 }} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter full name"
                placeholderTextColor={theme.colors.slateGray}
                value={parentName}
                onChangeText={setParentName}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Relationship</Text>
            <TouchableOpacity
              style={styles.dropdownTrigger}
              activeOpacity={0.8}
              onPress={() => setIsDropdownOpen(true)}
            >
              <View style={styles.dropdownLeft}>
                <HeartIconSvg width={20} height={20} style={{ marginRight: 10 }} />
                <Text
                  style={
                    relationship ? styles.dropdownText : styles.dropdownPlaceholder
                  }
                >
                  {relationship || 'Select relationship'}
                </Text>
              </View>
              <ChevronDownSvg width={16} height={16} />
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Parent / Guardian Mobile Number</Text>
            <View style={styles.phoneInputWrapper}>
              <IndiaFlagSvg width={24} height={16} style={{ marginRight: 8 }} />
              <Text style={styles.countryCode}>+91</Text>
              <View style={styles.verticalDivider} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter Mobile Number"
                placeholderTextColor={theme.colors.slateGray}
                keyboardType="phone-pad"
                maxLength={10}
                value={parentMobile}
                onChangeText={setParentMobile}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Parent / Guardian Email ID</Text>
            <View style={styles.iconInputWrapper}>
              <UserIconSvg width={20} height={20} style={{ marginRight: 10 }} />
              <TextInput
                style={styles.textInput}
                placeholder="raj123@gmail.com"
                placeholderTextColor={theme.colors.slateGray}
                keyboardType="email-address"
                autoCapitalize="none"
                value={parentEmail}
                onChangeText={setParentEmail}
              />
            </View>
          </View>

          <View style={styles.infoBox}>
            <InfoIconSvg width={18} height={18} style={{ marginRight: 8, marginTop: 1 }} />
            <Text style={styles.infoText}>
              A verification OTP will be sent to parent/guardian's mobile number.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.checkboxRow}
            activeOpacity={0.8}
            onPress={() => setIsConsentGiven(!isConsentGiven)}
          >
            <View
              style={[
                styles.checkboxBox,
                isConsentGiven && styles.checkboxChecked,
              ]}
            >
              {isConsentGiven && <CheckIconSvg width={12} height={12} />}
            </View>
            <Text style={styles.checkboxLabel}>
              I confirm that I am the parent/legal guardian and give consent for the
              minor to use counseling services on{' '}
              <Text style={styles.highlightText}>Welzaa.</Text>
            </Text>
          </TouchableOpacity>

          <PrimaryButton
            title="SEND OTP"
            onPress={handleSubmit}
            disabled={!isFormValid}
            style={styles.sendButton}
          />
        </View>
      </FormContainer>

      <Modal
        visible={isDropdownOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsDropdownOpen(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsDropdownOpen(false)}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Select Relationship</Text>
                <FlatList
                  data={RELATIONSHIP_OPTIONS}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.optionItem}
                      onPress={() => {
                        setRelationship(item);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          relationship === item && styles.selectedOptionText,
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScreenWrapper>
  );
};
