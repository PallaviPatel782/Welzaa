import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { FormContainer, ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import {
  OtherReasonModal,
  CancelNotAllowedModal,
  DoctorSummaryCard,
} from '../../../../components/session';
import { theme } from '../../../../config/theme';
import { CANCELLATION_REASONS } from '../../../../mock';

import CalendarIconSvg from '../../../../assets/icons/calendarIcon.svg';
import CancelSvg from '../../../../assets/icons/cancel.svg';
import EditIconSvg from '../../../../assets/icons/Edit.svg';
import NoteSvg from '../../../../assets/icons/note.svg';
import DrNikitaDharmaSvg from '../../../../assets/images/DrNikitaDharma.svg';
import { styles } from './styles';

export const CancelSessionScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const isEligible = route.params?.isEligible !== undefined ? route.params.isEligible : true;
  const session = route.params?.session || {
    doctorName: 'Dr. Anjali Sharma',
    specialty: 'Relationship Expert',
    AvatarComponent: DrNikitaDharmaSvg,
  };

  const [selectedReasonId, setSelectedReasonId] = useState<string>('schedule_conflict');
  const [customReasonText, setCustomReasonText] = useState<string>('');
  const [additionalNote, setAdditionalNote] = useState<string>('');
  const [showOtherModal, setShowOtherModal] = useState<boolean>(false);
  const [showNotAllowedModal, setShowNotAllowedModal] = useState<boolean>(!isEligible);

  const handleSelectReason = (reasonId: string) => {
    setSelectedReasonId(reasonId);
    if (reasonId === 'other') {
      setShowOtherModal(true);
    }
  };

  const handleSaveOtherReason = (text: string) => {
    setCustomReasonText(text);
  };

  const handleConfirmCancellation = () => {
    if (!isEligible) {
      setShowNotAllowedModal(true);
      return;
    }

    Alert.alert(
      'Cancel Session',
      'Are you sure you want to cancel this session?',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Yes, Cancel',
          style: 'destructive',
          onPress: () => {
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <ScreenWrapper backgroundColor={theme.colors.bgLight} edges={['top', 'left', 'right', 'bottom']}>
      <AppHeader
        title="Cancel Session"
        onBackPress={() => navigation.goBack()}
        backgroundColor={theme.colors.bgLight}
      />

      <View style={styles.mainContainer}>
        <FormContainer
          style={styles.mainContainer}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Doctor Summary Card Component */}
          <View style={styles.expertCardBox}>
            <DoctorSummaryCard
              doctorName={session.doctorName}
              specialty={session.specialty}
              AvatarComponent={session.AvatarComponent}
            />
          </View>

          {/* Yellow Notice Box */}
          <View style={styles.noticeBox}>
            <EditIconSvg width={18} height={18} color="#B7791F" style={styles.noticeIcon} />
            <AppText style={styles.noticeText}>
              We're Sorry to see you go. Please let us know the reason for cancellation.
            </AppText>
          </View>

          {/* Reason Selection Header */}
          <View style={styles.noteHeaderRow}>
            <CancelSvg width={18} height={18} style={{ marginRight: 8, marginTop: 2 }} />
            <View>
              <AppText style={styles.sectionTitle}>Reason for Cancellation</AppText>
              <AppText style={styles.sectionSubtitle}>
                Please select a reason for canceling your session
              </AppText>
            </View>
          </View>

          <View style={styles.reasonsList}>
            {CANCELLATION_REASONS.map((item) => {
              const isSelected = selectedReasonId === item.id;
              const subtextDisplay =
                item.id === 'other' && customReasonText
                  ? customReasonText
                  : item.subtext;

              return (
                <TouchableOpacity
                  key={item.id}
                  style={[
                    styles.reasonCard,
                    isSelected && styles.selectedReasonCard,
                  ]}
                  activeOpacity={0.8}
                  onPress={() => handleSelectReason(item.id)}
                >
                  <View style={styles.reasonLeftContent}>

                    <View style={styles.reasonTextCol}>
                      <AppText style={styles.reasonTitle}>{item.title}</AppText>
                      <AppText style={styles.reasonSubtext} numberOfLines={1}>
                        {subtextDisplay}
                      </AppText>
                    </View>
                  </View>

                  <View
                    style={[
                      styles.radioOuter,
                      isSelected && styles.radioOuterSelected,
                    ]}
                  >
                    {isSelected && <View style={styles.radioInnerSelected} />}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* Additional Note (Optional) */}
          <View style={styles.noteSection}>
            <View style={styles.noteHeaderRow}>
              <NoteSvg width={18} height={18} style={{ marginRight: 6 }} />
              <AppText style={styles.noteTitle}>Additional Note (Optional)</AppText>
            </View>
            <AppText style={styles.noteSubtitle}>
              You can add a brief message for your counselor.
            </AppText>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.noteInput}
                placeholder="e.g I'm not feeling well..will reschedule soon..."
                placeholderTextColor="#98A2B3"
                multiline
                maxLength={100}
                value={additionalNote}
                onChangeText={setAdditionalNote}
              />
              <AppText style={styles.counterText}>
                {additionalNote.length}/100
              </AppText>
            </View>
          </View>
        </FormContainer>

        {/* Bottom Confirm Button */}
        <View style={styles.bottomBar}>
          <TouchableOpacity
            style={styles.confirmButton}
            onPress={handleConfirmCancellation}
            activeOpacity={0.8}
          >
            <CalendarIconSvg width={18} height={18} color={theme.colors.white} stroke={theme.colors.white} style={styles.buttonIcon} />
            <AppText style={styles.confirmButtonText}>CANCEL SESSION</AppText>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modals */}
      <OtherReasonModal
        visible={showOtherModal}
        initialReason={customReasonText}
        onClose={() => setShowOtherModal(false)}
        onSave={handleSaveOtherReason}
      />

      <CancelNotAllowedModal
        visible={showNotAllowedModal}
        session={session}
        onClose={() => setShowNotAllowedModal(false)}
      />
    </ScreenWrapper>
  );
};
