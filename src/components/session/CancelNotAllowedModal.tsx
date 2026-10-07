import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import VerifiedBadgeSvg from '../../assets/icons/verifiedBadge.svg';
import DrNikitaDharmaSvg from '../../assets/images/DrNikitaDharma.svg';

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
                  <AppText style={styles.closeIconText}>✕</AppText>
                </TouchableOpacity>
              </View>

              {/* Red Warning Alert */}
              <View style={styles.alertCard}>
                <View style={styles.redIconCircle}>
                  <AppText style={styles.crossText}>✕</AppText>
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

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  notAllowedContent: {
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
  alertCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FEF3F2',
    borderRadius: 14,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FECDCA',
  },
  redIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F04438',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  crossText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  alertTextCol: {
    flex: 1,
  },
  alertTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: '#912018',
    marginBottom: 2,
  },
  alertSubtext: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: '#B42318',
    lineHeight: 16,
  },
  expertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 14,
  },
  avatarBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: theme.colors.lightPurple,
  },
  badgeOverlay: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: 2,
  },
  expertTextCol: {
    flex: 1,
  },
  expertTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.dark,
  },
  doctorName: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.gray,
    marginTop: 2,
  },
  specialty: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.gray,
    marginTop: 1,
  },
});
