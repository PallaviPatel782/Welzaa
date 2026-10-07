import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Alert, TextInput } from 'react-native';
import { ScreenWrapper } from '../../../components/layout';
import { BottomWave, AppHeader, AppText, AppButton, AppModal } from '../../../components/common';
import { theme } from '../../../config/theme';
import { styles } from './styles';
import ChatBubbleIconSvg from '../../../assets/icons/chatBubbleIcon.svg';
import PhoneCallIconSvg from '../../../assets/icons/phoneCallIcon.svg';
import SmileFaceIconSvg from '../../../assets/icons/smileFaceIcon.svg';
import ClockIconSvg from '../../../assets/icons/clockIcon.svg';
import PlusIconSvg from '../../../assets/icons/plusIcon.svg';
import DeleteIconSvg from '../../../assets/icons/Delete.svg';

interface SosScreenProps {
  onBack?: () => void;
}

export const SosScreen: React.FC<SosScreenProps> = ({ onBack }) => {
  const [familyNumbers, setFamilyNumbers] = useState<string[]>([
    '+91-1234567890',
    '+91-1234567890',
  ]);
  const [isAddModalVisible, setIsAddModalVisible] = useState<boolean>(false);
  const [newNumber, setNewNumber] = useState<string>('');
  const [numberError, setNumberError] = useState<string>('');

  const handleSendSOS = () => {
    Alert.alert('SOS Triggered', 'Emergency message sent to your trusted contacts.');
  };

  const handleCallHelpline = () => {
    Alert.alert('Calling Crisis Helpline', 'Dialing +91 999 999 9999...');
  };

  const handleOpenAddModal = () => {
    setNewNumber('');
    setNumberError('');
    setIsAddModalVisible(true);
  };

  const handleSaveNumber = () => {
    const trimmed = newNumber.trim();
    if (!trimmed) {
      setNumberError('Please enter a phone number');
      return;
    }
    const digitsOnly = trimmed.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      setNumberError('Please enter a valid 10-digit mobile number');
      return;
    }

    let formatted = trimmed;
    if (!formatted.startsWith('+')) {
      formatted = `+91-${digitsOnly.slice(-10)}`;
    }

    setFamilyNumbers((prev) => [...prev, formatted]);
    setNewNumber('');
    setNumberError('');
    setIsAddModalVisible(false);
  };

  const handleDeleteNumber = (index: number) => {
    Alert.alert(
      'Remove Contact',
      'Are you sure you want to remove this family member number?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Remove',
          style: 'destructive',
          onPress: () => {
            setFamilyNumbers((prev) => prev.filter((_, i) => i !== index));
          },
        },
      ]
    );
  };

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      renderBackground={() => <BottomWave />}
    >
      <View style={styles.container}>
        <AppHeader
          title="SOS"
          onBackPress={onBack}
          backgroundColor={theme.colors.white}
        />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.supportCard}>
            <AppText variant="subtitle" style={styles.supportTitle}>Need Support Right Now?</AppText>
            <AppText variant="caption" style={styles.supportSubtitle}>Support is just a click away.</AppText>

            <AppButton
              title="Send SOS Message"
              onPress={handleSendSOS}
              variant="secondary"
              leftIcon={<ChatBubbleIconSvg width={18} height={18} color={theme.colors.dark} />}
              style={{ backgroundColor: theme.colors.coral, width: '100%' }}
              textStyle={{ color: theme.colors.navy }}
            />
          </View>

          <AppText variant="subtitle" style={styles.sectionTitle}>More Ways to Get Help</AppText>

          <View style={styles.crisisCard}>
            <View style={styles.iconBadgeBlue}>
              <PhoneCallIconSvg width={22} height={22} color={theme.colors.blueText} />
            </View>
            <AppText variant="subtitle" style={styles.crisisTitle}>Crisis Help Line (24/7)</AppText>
            <AppText variant="caption" style={styles.crisisSubtitle}>
              A safe space to talk, anytime you need to.
            </AppText>
            <TouchableOpacity activeOpacity={0.7} onPress={handleCallHelpline}>
              <AppText variant="title" style={styles.phoneText}>+91 999 999 9999</AppText>
            </TouchableOpacity>
          </View>

          <View style={styles.courageCard}>
            <View style={styles.iconBadgePurple}>
              <SmileFaceIconSvg width={22} height={22} color={theme.colors.white} />
            </View>
            <AppText variant="body" style={styles.courageText}>
              Reaching out is a sign of courage. Thousands of people take this step every day—so can you.
            </AppText>
          </View>

          <View style={styles.momentCard}>
            <AppText variant="subtitle" style={styles.momentTitle}>Take a Moment</AppText>
            <View style={styles.momentRow}>
              <View style={styles.iconBadgeBlue}>
                <ClockIconSvg width={20} height={20} color={theme.colors.blueText} />
              </View>
              <AppText variant="caption" style={styles.momentText}>
                This is your time to slow down—breathe in, hold, and gently release.
              </AppText>
            </View>
          </View>

          <View style={styles.familyCard}>
            <View style={styles.familyHeaderRow}>
              <AppText variant="subtitle" style={styles.familyTitle}>
                Family Member Number
              </AppText>
              <TouchableOpacity
                style={styles.addNumberBtn}
                activeOpacity={0.8}
                onPress={handleOpenAddModal}
              >
                <PlusIconSvg width={14} height={14} color={theme.colors.emerald} />
                <AppText style={styles.addNumberBtnText}>Add Number</AppText>
              </TouchableOpacity>
            </View>

            <View style={styles.numbersList}>
              {familyNumbers.map((num, idx) => (
                <View
                  key={idx}
                  style={[
                    styles.numberItem,
                    idx < familyNumbers.length - 1 && styles.numberItemBorder,
                  ]}
                >
                  <AppText style={styles.numberText}>{num}</AppText>
                  <TouchableOpacity
                    onPress={() => handleDeleteNumber(idx)}
                    style={styles.deleteBtn}
                    activeOpacity={0.7}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                  >
                    <DeleteIconSvg width={16} height={16} color={theme.colors.red} />
                  </TouchableOpacity>
                </View>
              ))}

              {familyNumbers.length === 0 && (
                <View style={styles.emptyNumbersContainer}>
                  <AppText style={styles.emptyNumbersText}>No family contacts added yet.</AppText>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </View>

      <AppModal
        visible={isAddModalVisible}
        onClose={() => setIsAddModalVisible(false)}
        title="Add Family Contact"
        footer={
          <View style={styles.modalFooterRow}>
            <AppButton
              title="Cancel"
              variant="outline"
              onPress={() => setIsAddModalVisible(false)}
              style={styles.modalHalfBtn}
            />
            <AppButton
              title="Add Number"
              variant="primary"
              onPress={handleSaveNumber}
              style={styles.modalHalfBtn}
            />
          </View>
        }
      >
        <View style={styles.modalBody}>
          <AppText style={styles.inputLabel}>Mobile Number</AppText>
          <View style={[styles.inputContainer, !!numberError && styles.inputErrorBorder]}>
            <AppText style={styles.countryCodeText}>+91</AppText>
            <TextInput
              style={styles.phoneInput}
              placeholder="9876543210"
              placeholderTextColor={theme.colors.slateMuted}
              keyboardType="phone-pad"
              value={newNumber}
              onChangeText={(txt) => {
                setNewNumber(txt);
                if (numberError) setNumberError('');
              }}
              maxLength={15}
            />
          </View>
          {!!numberError && (
            <AppText style={styles.errorText}>{numberError}</AppText>
          )}
        </View>
      </AppModal>
    </ScreenWrapper>
  );
};

