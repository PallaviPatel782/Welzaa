import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from 'react-native';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import { Camera, useCameraDevice, useCameraPermission } from 'react-native-vision-camera';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, AppGradientBackground } from '../../../../components/common';
import { theme } from '../../../../config/theme';

import VerifiedBadgeSvg from '../../../../assets/icons/verifiedBadge.svg';
import CalendarIconSvg from '../../../../assets/icons/calendarIcon.svg';
import ClockIconSvg from '../../../../assets/icons/clockIcon.svg';
import VideoIconSvg from '../../../../assets/icons/videoIcon.svg';
import InfoIconSvg from '../../../../assets/icons/infoIcon.svg';
import GearIconSvg from '../../../../assets/icons/gearIcon.svg';
import LockIconSvg from '../../../../assets/icons/lockIcon.svg';
import CameraOffIconSvg from '../../../../assets/icons/cameraOffIcon.svg';
import MicIconSvg from '../../../../assets/icons/micIcon.svg';
import MicOffIconSvg from '../../../../assets/icons/micOffIcon.svg';
import ChatBubbleIconSvg from '../../../../assets/icons/chatBubbleIcon.svg';
import UserIconSvg from '../../../../assets/icons/userIcon.svg';

import DrNikitaDharmaSvg from '../../../../assets/images/DrNikitaDharma.svg';
import { styles } from './styles';

export const JoinSessionScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const isFocused = useIsFocused();

  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);

  const device = useCameraDevice('front');
  const { hasPermission, requestPermission } = useCameraPermission();

  const isMinor = route.params?.isMinor !== undefined ? route.params.isMinor : true;
  const isCameraActive = Boolean(device && hasPermission && isCameraOn && isFocused);

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);

  const handleToggleCamera = async () => {
    if (!isCameraOn) {
      if (!hasPermission) {
        const isGranted = await requestPermission();
        if (!isGranted) {
          Alert.alert('Permission Denied', 'Camera permission is required to enable video preview.');
          return;
        }
      }
      setIsCameraOn(true);
    } else {
      setIsCameraOn(false);
    }
  };

  const session = route.params?.session || {
    doctorName: 'Dr. Anjali Sharma',
    specialty: isMinor ? 'Relationship counseling' : 'Relationship Expert',
    dateTime: '16 Sep 2026 06:00 PM',
    duration: '45 Minutes',
    mode: 'Online Session',
    AvatarComponent: DrNikitaDharmaSvg,
  };

  const AvatarComp = session.AvatarComponent || DrNikitaDharmaSvg;

  return (
    <ScreenWrapper
      backgroundColor="transparent"
      edges={['top', 'left', 'right', 'bottom']}
      renderBackground={() => <AppGradientBackground />}
    >
      <AppHeader
        title="Join Session"
        onBackPress={() => navigation.goBack()}
        backgroundColor="transparent"
      />

      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.topExpertCard}>
            <View style={styles.avatarWrapper}>
              <View style={styles.avatarBox}>
                <AvatarComp width={52} height={52} />
              </View>
              <View style={styles.badgeOverlay}>
                <VerifiedBadgeSvg width={14} height={14} />
              </View>
            </View>

            <View style={styles.topTextCol}>
              <AppText style={styles.topTitle}>
                {isMinor ? 'Counseling Session' : 'Expert Session'}
              </AppText>
              <AppText style={styles.topSubtext}>
                {session.doctorName} • {session.specialty}
              </AppText>
            </View>
          </View>

          <View style={styles.videoPreviewCard}>
            {device && hasPermission && (
              <Camera
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={isCameraActive}
              />
            )}

            {!isCameraOn && (
              <View style={styles.cameraOffOverlay}>
                <CameraOffIconSvg width={40} height={40} color="#94A3B8" />
                <AppText style={styles.cameraOffText}>Camera is turned off</AppText>
              </View>
            )}

            {isCameraOn && !hasPermission && (
              <TouchableOpacity
                style={styles.cameraOffOverlay}
                onPress={requestPermission}
                activeOpacity={0.8}
              >
                <CameraOffIconSvg width={40} height={40} color="#94A3B8" />
                <AppText style={styles.cameraOffText}>Tap to allow camera permission</AppText>
              </TouchableOpacity>
            )}

            <View style={styles.participantNameBadge}>
              <AppText style={styles.participantName}>
                {isMinor ? 'Nikita Mehta' : 'Niti Tylor'}
              </AppText>
            </View>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.sectionHeaderRow}>
              <InfoIconSvg width={18} height={18} color={theme.colors.dark} />
              <AppText style={styles.sectionHeading}>Joining Information</AppText>
            </View>

            <View style={styles.infoGridRow}>
              <View style={styles.infoGridCol}>
                <View style={styles.iconLabelGroup}>
                  <CalendarIconSvg width={14} height={14} color={theme.colors.purple} />
                  <AppText style={styles.gridLabel}>Date & Time</AppText>
                </View>
                <AppText style={styles.gridValue}>
                  {session.dateTime || '16 Sep 2026\n06:00 PM'}
                </AppText>
              </View>

              <View style={styles.infoGridCol}>
                <View style={styles.iconLabelGroup}>
                  <ClockIconSvg width={14} height={14} color={theme.colors.purple} />
                  <AppText style={styles.gridLabel}>Duration</AppText>
                </View>
                <AppText style={styles.gridValue}>
                  {session.duration || '45 Minutes'}
                </AppText>
              </View>

              <View style={styles.infoGridCol}>
                <View style={styles.iconLabelGroup}>
                  <VideoIconSvg width={14} height={14} color={theme.colors.purple} />
                  <AppText style={styles.gridLabel}>Mode</AppText>
                </View>
                <AppText style={styles.gridValue}>
                  {session.mode || 'Online Session'}
                </AppText>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.sectionHeaderRow}>
              <GearIconSvg width={18} height={18} color={theme.colors.dark} />
              <AppText style={styles.sectionHeading}>Before you Join</AppText>
            </View>

            <AppText style={styles.beforeJoinDesc}>
              Make sure your camera, microphone and internet are working.
            </AppText>

            <View style={styles.encryptionPillBox}>
              <LockIconSvg width={16} height={16} color={theme.colors.teal} />
              <AppText style={styles.encryptionText}>
                All audio,video and chat data is encrypted and kept private.
              </AppText>
            </View>
          </View>
        </ScrollView>

        {isMinor && (
          <View style={styles.minorNoticeBanner}>
            <UserIconSvg width={18} height={18} color={theme.colors.white} style={styles.minorUserIcon} />
            <AppText style={styles.minorNoticeText}>
              You need to join this session with your parents or guardian as it is mandatory for members below 18 years old.
            </AppText>
          </View>
        )}

        <View style={styles.bottomBarRow}>
          <TouchableOpacity
            style={[styles.actionCircleBtn, isCameraOn ? styles.btnNavy : styles.btnRed]}
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
            style={[styles.actionCircleBtn, isMicOn ? styles.btnNavy : styles.btnRed]}
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
            style={[styles.actionCircleBtn, styles.btnNavy]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('SessionChat', { session })}
          >
            <ChatBubbleIconSvg width={20} height={20} color={theme.colors.white} stroke={theme.colors.white} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.greenJoinBtn}
            activeOpacity={0.85}
            onPress={() => navigation.navigate('VideoCall', { session, isMinor })}
          >
            <AppText style={styles.greenJoinBtnText}>Join Session</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};
