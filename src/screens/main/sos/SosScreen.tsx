import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { ScreenWrapper } from '../../../components/layout';
import { BottomWave, AppHeader, AppText, AppButton } from '../../../components/common';
import { theme } from '../../../config/theme';
import { styles } from './styles';
import ChatBubbleIconSvg from '../../../assets/icons/chatBubbleIcon.svg';
import PhoneCallIconSvg from '../../../assets/icons/phoneCallIcon.svg';
import SmileFaceIconSvg from '../../../assets/icons/smileFaceIcon.svg';
import ClockIconSvg from '../../../assets/icons/clockIcon.svg';
import PlusIconSvg from '../../../assets/icons/plusIcon.svg';

interface SosScreenProps {
  onBack?: () => void;
}

export const SosScreen: React.FC<SosScreenProps> = ({ onBack }) => {
  const [familyNumbers] = useState<string[]>([
    '+91-1234567890',
    '+91-1234567890',
  ]);

  const handleSendSOS = () => {
    Alert.alert('SOS Triggered', 'Emergency message sent to your trusted contacts.');
  };

  const handleCallHelpline = () => {
    Alert.alert('Calling Crisis Helpline', 'Dialing +91 999 999 9999...');
  };

  const handleAddNumber = () => {
    Alert.alert('Add Number', 'Enter new family member contact number.');
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
              title="Sent SOS Message"
              onPress={handleSendSOS}
              variant="secondary"
              leftIcon={<ChatBubbleIconSvg width={18} height={18} color={theme.colors.dark} />}
              style={{ backgroundColor: theme.colors.coral }}
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
              <AppText variant="subtitle" style={styles.familyTitle}>Family Member Number</AppText>
              <TouchableOpacity
                style={styles.addNumberBtn}
                activeOpacity={0.8}
                onPress={handleAddNumber}
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
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </ScreenWrapper>
  );
};
