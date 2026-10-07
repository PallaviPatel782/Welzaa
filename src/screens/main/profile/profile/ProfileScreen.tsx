import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { ScreenWrapper } from '../../../../components/layout';
import { AppText, AppGradientBackground, AppHeader, AppButton } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import { styles } from './styles';

import ChevronRightSvg from '../../../../assets/icons/chevronRight.svg';
import ChevronDownSvg from '../../../../assets/icons/chevronDown.svg';
import CameraIconSvg from '../../../../assets/icons/cameraIcon.svg';
import SparkleStarSvg from '../../../../assets/icons/sparkleStar.svg';
import ShareIconSvg from '../../../../assets/icons/shareIcon.svg';
import BoxIconSvg from '../../../../assets/icons/boxIcon.svg';
import HeartIconSvg from '../../../../assets/icons/heartIcon.svg';
import TicketJournalIconSvg from '../../../../assets/icons/ticketJournalIcon.svg';
import UserIconSvg from '../../../../assets/icons/userIcon.svg';
import HeadsetIconSvg from '../../../../assets/icons/headsetIcon.svg';
import DocumentIconSvg from '../../../../assets/icons/documentIcon.svg';
import QuestionCircleIconSvg from '../../../../assets/icons/questionCircleIcon.svg';
import BanknoteIconSvg from '../../../../assets/icons/banknoteIcon.svg';
import InfoIconSvg from '../../../../assets/icons/infoIcon.svg';
import ChatBubbleIconSvg from '../../../../assets/icons/chatBubbleIcon.svg';
import ShieldCheckIconSvg from '../../../../assets/icons/shieldCheckIcon.svg';

interface ProfileScreenProps {
  onBack?: () => void;
  onLogout?: () => void;
  onDeleteAccount?: () => void;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = ({
  onBack,
  onLogout,
  onDeleteAccount,
}) => {
  const navigation = useNavigation<any>();
  const [isLegalExpanded, setIsLegalExpanded] = useState(false);
  const [profileImageUri, setProfileImageUri] = useState<string | null>(null);

  const handlePickProfilePhoto = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.8,
        maxWidth: 600,
        maxHeight: 600,
        selectionLimit: 1,
      });

      if (result.assets && result.assets.length > 0 && result.assets[0].uri) {
        setProfileImageUri(result.assets[0].uri);
      }
    } catch (error) {
      console.log('Profile image picker error:', error);
    }
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    } else {
      const rootNav = navigation.getParent() || navigation;
      rootNav.reset({
        index: 0,
        routes: [
          {
            name: 'Auth',
            state: {
              routes: [{ name: 'Login' }],
            },
          },
        ],
      });
    }
  };

  const handleDeleteAccount = () => {
    if (onDeleteAccount) {
      onDeleteAccount();
    } else {
      const rootNav = navigation.getParent() || navigation;
      rootNav.reset({
        index: 0,
        routes: [
          {
            name: 'Auth',
            state: {
              routes: [{ name: 'Login' }],
            },
          },
        ],
      });
    }
  };

  const toggleLegalExpanded = () => {
    setIsLegalExpanded((prev) => !prev);
  };

  return (
    <ScreenWrapper
      backgroundColor="transparent"
      edges={['top', 'left', 'right']}
      renderBackground={() => <AppGradientBackground />}
    >
      <AppHeader title="Profile" onBackPress={onBack} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.userProfileCard}>
          <TouchableOpacity
            style={styles.avatarContainer}
            activeOpacity={0.85}
            onPress={handlePickProfilePhoto}
          >
            <View style={styles.avatarCircle}>
              {profileImageUri ? (
                <Image source={{ uri: profileImageUri }} style={styles.avatarImage} />
              ) : (
                <SparkleStarSvg width={30} height={30} />
              )}
            </View>
            <TouchableOpacity
              style={styles.cameraBadge}
              activeOpacity={0.8}
              onPress={handlePickProfilePhoto}
            >
              <CameraIconSvg width={12} height={12} color={theme.colors.white} />
            </TouchableOpacity>
          </TouchableOpacity>

          <View style={styles.userInfo}>
            <AppText style={styles.userName}>Niti Taylor</AppText>
            <AppText style={styles.userPhone}>+91 -1234567890</AppText>
            <AppText style={styles.userWelzaaId}>Welzaa123</AppText>
          </View>
        </View>

        <TouchableOpacity
          style={styles.referCard}
          activeOpacity={0.9}
          onPress={() => navigation.navigate('ReferAFriend')}
        >
          <Image
            source={require('../../../../assets/images/ReferBanner.png')}
            style={StyleSheet.absoluteFill}
            resizeMode="cover"
          />
          <View style={styles.referTextContainer}>
            <AppText style={styles.referTitle}>Refer A Friend</AppText>
            <AppText style={styles.referSubtitle}>
              Each referral increases your wallet{'\n'}Count ➔
            </AppText>
          </View>
          <ShareIconSvg width={44} height={44} />
        </TouchableOpacity>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('PersonalInformation')}
          >
            <View style={styles.menuItemLeft}>
              <BoxIconSvg width={20} height={20} />
              <AppText style={styles.menuItemText}>Personal Information</AppText>
            </View>
            <ChevronRightSvg width={18} height={18} color={theme.colors.navy} />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('MoodHistory')}
          >
            <View style={styles.menuItemLeft}>
              <HeartIconSvg width={20} height={20} color={theme.colors.darkText} />
              <AppText style={styles.menuItemText}>Mood History</AppText>
            </View>
            <ChevronRightSvg width={18} height={18} color={theme.colors.navy} />
          </TouchableOpacity>
        </View>

        <View style={styles.journalCard}>
          <View style={styles.journalHeaderRow}>
            <TicketJournalIconSvg width={20} height={20} />
            <AppText style={styles.menuItemText}>My Journal</AppText>
          </View>

          <TouchableOpacity
            style={styles.journalPillButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('JournalEntries')}
          >
            <View style={styles.journalPillContent}>
              <TicketJournalIconSvg width={15} height={15} />
              <AppText style={styles.journalPillText}>Journal Entries</AppText>
            </View>
            <ChevronRightSvg width={14} height={14} color={theme.colors.navy} />
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Sos')}
          >
            <View style={styles.menuItemLeft}>
              <UserIconSvg width={20} height={20} color={theme.colors.darkText} />
              <AppText style={styles.menuItemText}>SOS</AppText>
            </View>
            <ChevronRightSvg width={18} height={18} color={theme.colors.navy} />
          </TouchableOpacity>
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SendFeedback')}
          >
            <View style={styles.menuItemLeft}>
              <HeadsetIconSvg width={20} height={20} />
              <AppText style={styles.menuItemText}>Send Feedback</AppText>
            </View>
            <ChevronRightSvg width={18} height={18} color={theme.colors.navy} />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.menuItem}
            activeOpacity={0.7}
            onPress={toggleLegalExpanded}
          >
            <View style={styles.menuItemLeft}>
              <DocumentIconSvg width={20} height={20} />
              <AppText style={styles.menuItemText}>Legal & Policies</AppText>
            </View>
            {isLegalExpanded ? (
              <ChevronDownSvg width={18} height={18} color={theme.colors.navy} />
            ) : (
              <ChevronRightSvg width={18} height={18} color={theme.colors.navy} />
            )}
          </TouchableOpacity>

          {isLegalExpanded && (
            <View>
              <View style={styles.divider} />

              <TouchableOpacity
                style={styles.menuItem}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Faq')}
              >
                <View style={styles.menuItemLeft}>
                  <QuestionCircleIconSvg width={20} height={20} />
                  <AppText style={styles.menuItemText}>FAQ'S</AppText>
                </View>
                <ChevronRightSvg width={18} height={18} color={theme.colors.navy} />
              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity
                style={styles.menuItem}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('RefundPolicy')}
              >
                <View style={styles.menuItemLeft}>
                  <BanknoteIconSvg width={20} height={20} />
                  <AppText style={styles.menuItemText}>Refund Policy</AppText>
                </View>
                <ChevronRightSvg width={18} height={18} color={theme.colors.navy} />
              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity
                style={styles.menuItem}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('AboutUs')}
              >
                <View style={styles.menuItemLeft}>
                  <InfoIconSvg width={20} height={20} color={theme.colors.darkText} />
                  <AppText style={styles.menuItemText}>About us</AppText>
                </View>
                <ChevronRightSvg width={18} height={18} color={theme.colors.navy} />
              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity
                style={styles.menuItem}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('TermsConditions')}
              >
                <View style={styles.menuItemLeft}>
                  <ChatBubbleIconSvg width={20} height={20} color={theme.colors.darkText} />
                  <AppText style={styles.menuItemText}>Terms & Condition</AppText>
                </View>
                <ChevronRightSvg width={18} height={18} color={theme.colors.navy} />
              </TouchableOpacity>

              <View style={styles.divider} />

              <TouchableOpacity
                style={styles.menuItem}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('PrivacyPolicy')}
              >
                <View style={styles.menuItemLeft}>
                  <ShieldCheckIconSvg width={20} height={20} color={theme.colors.darkText} />
                  <AppText style={styles.menuItemText}>Privacy Policy</AppText>
                </View>
                <ChevronRightSvg width={18} height={18} color={theme.colors.navy} />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <AppButton
          title="LOG OUT"
          onPress={handleLogout}
          variant="primary"
          size="large"
          style={{ marginBottom: 10, marginTop: 4, borderRadius: 14 }}
        />

        <AppButton
          title="DELETE ACCOUNT"
          onPress={handleDeleteAccount}
          variant="outline"
          size="large"
          style={{ borderColor: theme.colors.badgePink, marginBottom: 12, borderRadius: 14 }}
          textStyle={{ color: theme.colors.badgePink }}
        />

        <AppText style={styles.versionText}>APP VERSION4.2607.20</AppText>
      </ScrollView>
    </ScreenWrapper>
  );
};
