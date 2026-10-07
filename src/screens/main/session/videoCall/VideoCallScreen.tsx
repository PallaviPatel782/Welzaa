import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, AppGradientBackground } from '../../../../components/common';
import { theme } from '../../../../config/theme';

import VideoIconSvg from '../../../../assets/icons/videoIcon.svg';
import CameraOffIconSvg from '../../../../assets/icons/cameraOffIcon.svg';
import MicIconSvg from '../../../../assets/icons/micIcon.svg';
import MicOffIconSvg from '../../../../assets/icons/micOffIcon.svg';
import ChatBubbleIconSvg from '../../../../assets/icons/chatBubbleIcon.svg';
import ClockIconSvg from '../../../../assets/icons/clockIcon.svg';

import DrNikitaDharmaSvg from '../../../../assets/images/DrNikitaDharma.svg';

export const VideoCallScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const isFocused = useIsFocused();

  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  const device = useCameraDevice('front');
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const session = route.params?.session || {
    doctorName: 'Priya Sharma',
    specialty: 'Relationship Expert',
    AvatarComponent: DrNikitaDharmaSvg,
  };

  const participantName = session.doctorName || 'Priya Sharma';

  const handleToggleCamera = async () => {
    if (!isCameraOn) {
      if (!hasPermission) {
        const isGranted = await requestPermission();
        if (!isGranted) {
          Alert.alert('Permission Denied', 'Camera permission is required to enable video camera.');
          return;
        }
      }
      setIsCameraOn(true);
    } else {
      setIsCameraOn(false);
    }
  };

  const handleEndCall = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Main' }],
    });
  };

  return (
    <ScreenWrapper
      backgroundColor="transparent"
      edges={['top', 'left', 'right', 'bottom']}
      renderBackground={() => <AppGradientBackground />}
    >
      <AppHeader
        title="Video Call"
        onBackPress={handleEndCall}
        backgroundColor="transparent"
      />

      <View style={styles.container}>
        <View style={styles.videoFrame}>
          {device && hasPermission && (
            <Camera
              style={StyleSheet.absoluteFill}
              device={device}
              isActive={isCameraOn && isFocused}
            />
          )}

          {!isCameraOn && (
            <View style={styles.cameraOffOverlay}>
              <CameraOffIconSvg width={48} height={48} color="#94A3B8" />
              <AppText style={styles.cameraOffText}>Camera is turned off</AppText>
            </View>
          )}

          {isCameraOn && !hasPermission && (
            <TouchableOpacity
              style={styles.cameraOffOverlay}
              onPress={requestPermission}
              activeOpacity={0.8}
            >
              <CameraOffIconSvg width={48} height={48} color="#94A3B8" />
              <AppText style={styles.cameraOffText}>Tap to enable camera permission</AppText>
            </TouchableOpacity>
          )}

          <View style={styles.nameTagBadge}>
            <AppText style={styles.participantName}>{participantName}</AppText>
          </View>

          <View style={styles.timerBadge}>
            <ClockIconSvg width={14} height={14} color={theme.colors.dark} />
            <AppText style={styles.timerText}>15:00</AppText>
          </View>

          <View style={styles.controlsRow}>
            <TouchableOpacity
              style={[
                styles.callControlBtn,
                isCameraOn ? styles.btnNavy : styles.btnRed,
              ]}
              activeOpacity={0.8}
              onPress={handleToggleCamera}
            >
              {isCameraOn ? (
                <VideoIconSvg width={20} height={20} color={theme.colors.white} />
              ) : (
                <CameraOffIconSvg width={20} height={20} color={theme.colors.white} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.callControlBtn,
                isMicOn ? styles.btnNavy : styles.btnRed,
              ]}
              activeOpacity={0.8}
              onPress={() => setIsMicOn(!isMicOn)}
            >
              {isMicOn ? (
                <MicIconSvg width={20} height={20} color={theme.colors.white} />
              ) : (
                <MicOffIconSvg width={20} height={20} color={theme.colors.white} />
              )}
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.callControlBtn, styles.btnNavy]}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('SessionChat', { session })}
            >
              <ChatBubbleIconSvg width={20} height={20} color={theme.colors.white} stroke={theme.colors.white} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelSessionPillBtn}
              activeOpacity={0.85}
              onPress={handleEndCall}
            >
              <AppText style={styles.cancelSessionPillText}>Exit Session</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
  },
  videoFrame: {
    flex: 1,
    backgroundColor: '#0F172A',
    borderRadius: 24,
    position: 'relative',
    overflow: 'hidden',
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 4,
    marginBottom: 14,
  },
  videoFrameOff: {
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#1E293B',
  },
  cameraOffOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#0F172A',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    zIndex: 5,
  },
  nameTagBadge: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.85)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  participantName: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.dark,
  },
  timerBadge: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 10,
    backgroundColor: 'rgba(255,255,255,0.85)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  timerText: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.dark,
  },
  cameraOffCenter: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    zIndex: 2,
  },
  cameraOffText: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: '#94A3B8',
  },
  controlsRow: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
    gap: 8,
  },
  callControlBtn: {
    width: 46,
    height: 46,
    borderRadius: 23,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  btnNavy: {
    backgroundColor: theme.colors.black,
  },
  btnRed: {
    backgroundColor: theme.colors.red,
  },
  cancelSessionPillBtn: {
    flex: 1,
    backgroundColor: '#EF4444',
    borderRadius: 23,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelSessionPillText: {
    fontFamily: theme.fonts.bold,
    fontSize: 13.5,
    color: theme.colors.white,
  },
  bottomBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  addConsultationBtn: {
    backgroundColor: theme.colors.purple,
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addConsultationText: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.white,
  },
  userFootnote: {
    alignItems: 'flex-end',
  },
  userFootnoteText: {
    fontFamily: theme.fonts.regular,
    fontSize: 11,
    color: theme.colors.gray,
  },
  boldUserText: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.dark,
  },
  userPhoneText: {
    fontFamily: theme.fonts.medium,
    fontSize: 11,
    color: theme.colors.gray,
  },
});
