import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import { AppText } from '../../../../components/common';
import { theme } from '../../../../config/theme';

import VerifiedBadgeSvg from '../../../../assets/icons/verifiedBadge.svg';
import DrNikitaDharmaSvg from '../../../../assets/images/DrNikitaDharma.svg';

interface RescheduleNotAllowedModalProps {
  visible: boolean;
  onClose: () => void;
  session?: any;
}

export const RescheduleNotAllowedModal: React.FC<RescheduleNotAllowedModalProps> = ({
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
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalCard}>
              {/* Modal Header */}
              <View style={styles.headerRow}>
                <AppText style={styles.headerTitle}>Reschedule Session</AppText>
                <TouchableOpacity
                  style={styles.closeBtn}
                  activeOpacity={0.7}
                  onPress={onClose}
                >
                  <AppText style={styles.closeText}>✕</AppText>
                </TouchableOpacity>
              </View>

              {/* Error Warning Alert Box */}
              <View style={styles.errorAlertBox}>
                <View style={styles.errorIconCircle}>
                  <AppText style={styles.errorIconText}>✕</AppText>
                </View>

                <View style={styles.errorTextCol}>
                  <AppText style={styles.errorHeading}>
                    You are not eligible to reschedule this session.
                  </AppText>
                  <AppText style={styles.errorDesc}>
                    This session is within the reschedule window or has already reached the reschedule limit.
                  </AppText>
                </View>
              </View>

              {/* Expert Info Card */}
              <View style={styles.expertRow}>
                <View style={styles.avatarWrapper}>
                  <View style={styles.avatarBox}>
                    <AvatarComp width={52} height={52} />
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
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlayDark,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalCard: {
    width: '100%',
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16.5,
    color: theme.colors.dark,
  },
  closeBtn: {
    padding: 4,
  },
  closeText: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.gray,
  },
  errorAlertBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.softAmber,
    borderRadius: 16,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: theme.colors.amberStar,
    gap: 12,
  },
  errorIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.red,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
  },
  errorIconText: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: theme.colors.white,
  },
  errorTextCol: {
    flex: 1,
  },
  errorHeading: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.dark,
    marginBottom: 4,
    lineHeight: 18,
  },
  errorDesc: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.gray,
    lineHeight: 17,
  },
  expertRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.bgLight,
    borderRadius: 16,
    padding: 12,
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 12,
  },
  avatarBox: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: theme.colors.softPurpleBg,
  },
  badgeOverlay: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: theme.colors.white,
    borderRadius: 7,
  },
  expertTextCol: {
    flex: 1,
  },
  expertTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 14.5,
    color: theme.colors.dark,
    marginBottom: 1,
  },
  doctorName: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.gray,
    marginBottom: 1,
  },
  specialty: {
    fontFamily: theme.fonts.regular,
    fontSize: 11.5,
    color: theme.colors.gray,
  },
});
