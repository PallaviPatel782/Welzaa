import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { AppText } from '../../../../components/common';
import VerifiedBadgeSvg from '../../../../assets/icons/verifiedBadge.svg';
import DrNikitaDharmaSvg from '../../../../assets/images/DrNikitaDharma.svg';
import { styles } from './styles';

interface CancelNotAllowedModalProps {
  visible: boolean;
  onClose: () => void;
  session?: {
    doctorName?: string;
    specialty?: string;
    AvatarComponent?: React.FC<any>;
  };
}

export const CancelNotAllowedModal: React.FC<CancelNotAllowedModalProps> = ({
  visible,
  onClose,
  session,
}) => {
  const doctorName = session?.doctorName || 'Dr. Anjali Sharma';
  const specialty = session?.specialty || 'Relationship Expert';
  const AvatarComp = session?.AvatarComponent || DrNikitaDharmaSvg;

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
            <View style={styles.notAllowedContent}>
              {/* Header */}
              <View style={styles.modalHeader}>
                <AppText style={styles.modalTitle}>Cancel Session</AppText>
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

              {/* Red Warning Alert */}
              <View style={styles.alertCard}>
                <View style={styles.redIconCircle}>
                  <AppText style={{ color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' }}>
                    ✕
                  </AppText>
                </View>
                <View style={styles.alertTextCol}>
                  <AppText style={styles.alertTitle}>
                    You are not eligible to cancel this session.
                  </AppText>
                  <AppText style={styles.alertSubtext}>
                    This session is within the reschedule window.
                  </AppText>
                </View>
              </View>

              {/* Doctor Card */}
              <View style={styles.expertCard}>
                <View style={styles.avatarWrapper}>
                  <View style={styles.avatarBox}>
                    <AvatarComp width={50} height={50} />
                  </View>
                  <View style={styles.badgeOverlay}>
                    <VerifiedBadgeSvg width={14} height={14} />
                  </View>
                </View>

                <View style={styles.expertTextCol}>
                  <AppText style={styles.expertTitle}>Expert Session</AppText>
                  <AppText style={styles.doctorName}>{doctorName}</AppText>
                  <AppText style={styles.specialty}>{specialty}</AppText>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
