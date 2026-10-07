import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
} from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';

interface OtherReasonModalProps {
  visible: boolean;
  onClose: () => void;
  onSave: (reasonText: string) => void;
  initialReason?: string;
}

export const OtherReasonModal: React.FC<OtherReasonModalProps> = ({
  visible,
  onClose,
  onSave,
  initialReason = '',
}) => {
  const [reason, setReason] = useState(initialReason);

  useEffect(() => {
    if (visible) {
      setReason(initialReason);
    }
  }, [visible, initialReason]);

  const handleClear = () => {
    setReason('');
  };

  const handleContinue = () => {
    onSave(reason.trim());
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : undefined}
              style={styles.modalContent}
            >
              {/* Modal Header */}
              <View style={styles.modalHeader}>
                <AppText style={styles.modalTitle}>Others</AppText>
                <TouchableOpacity
                  onPress={onClose}
                  style={styles.closeBtn}
                  activeOpacity={0.7}
                  hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                  <AppText style={styles.closeIconText}>✕</AppText>
                </TouchableOpacity>
              </View>

              {/* Text Input */}
              <TextInput
                style={styles.modalInput}
                placeholder="eg. Had to postpone due to a Family commitment."
                placeholderTextColor="#98A2B3"
                multiline
                value={reason}
                onChangeText={setReason}
                maxLength={200}
                autoFocus
              />

              {/* Action Buttons */}
              <View style={styles.modalButtonRow}>
                <TouchableOpacity
                  style={styles.clearBtn}
                  onPress={handleClear}
                  activeOpacity={0.8}
                >
                  <AppText style={styles.clearBtnText}>Clear All</AppText>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.continueBtn}
                  onPress={handleContinue}
                  activeOpacity={0.8}
                >
                  <AppText style={styles.continueBtnText}>Continue</AppText>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 17,
    color: theme.colors.dark,
  },
  closeBtn: {
    padding: 4,
  },
  closeIconText: {
    fontSize: 18,
    color: '#667085',
    fontWeight: 'bold',
  },
  modalInput: {
    backgroundColor: '#F2F4F7',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: theme.fonts.regular,
    fontSize: 13,
    color: theme.colors.dark,
    minHeight: 60,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  modalButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clearBtn: {
    flex: 1,
    backgroundColor: '#E4E7EC',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  clearBtnText: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.dark,
  },
  continueBtn: {
    flex: 1.2,
    backgroundColor: theme.colors.purple,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueBtnText: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.white,
  },
});
