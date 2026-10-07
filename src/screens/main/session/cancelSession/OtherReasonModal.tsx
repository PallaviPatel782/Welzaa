import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { AppText } from '../../../../components/common';
import { styles } from './styles';

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
                  <AppText style={{ fontSize: 18, color: '#667085', fontWeight: 'bold' }}>
                    ✕
                  </AppText>
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
