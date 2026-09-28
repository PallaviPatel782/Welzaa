import React, { useState, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ScreenWrapper } from '../../../components/layout';
import { AppText, AppGradientBackground, AppHeader } from '../../../components/common';
import { theme } from '../../../config/theme';
import { styles } from './styles';

import WelyAvatarSvg from '../../../assets/icons/welyAvatar.svg';
import UserIconSvg from '../../../assets/icons/userIcon.svg';
import LightningIconSvg from '../../../assets/icons/lightningIcon.svg';
import HeartIconSvg from '../../../assets/icons/heartIcon.svg';
import SendIconSvg from '../../../assets/icons/sendIcon.svg';

interface Message {
  id: string;
  text: string;
  sender: 'ai' | 'user';
  timestamp: string;
}

interface AIScreenProps {
  onBack?: () => void;
}

export const AIScreen: React.FC<AIScreenProps> = ({ onBack }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const scrollViewRef = useRef<any>(null);


  const getCurrentTime = (): string => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    return `${hours}:${minutesStr}${ampm}`;
  };

  const handlePromptSelect = (promptText: string) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      text: promptText,
      sender: 'user',
      timestamp: getCurrentTime(),
    };

    setMessages([userMsg]);

    setTimeout(() => {
      let aiResponseText = "Thank you for sharing that. Feeling heavy can mean a lot of things. Would you like to talk about what's been on your mind lately?";

      if (promptText.includes('anxiety')) {
        aiResponseText = "Anxiety often feels like an intense tightness or racing thoughts. Remember to take slow, gentle deep breaths. I'm right here with you.";
      } else if (promptText.includes('confidence')) {
        aiResponseText = "Building self-confidence starts with small daily wins and self-compassion. You are capable of amazing progress!";
      } else if (promptText.includes('overwhelmed')) {
        aiResponseText = "Feeling overwhelmed means your mind has been carrying a lot lately. Let's break things down step by step together.";
      } else if (promptText.includes('sleep')) {
        aiResponseText = "Good sleep starts with a calm evening routine—try dimming lights and practicing quiet breathing before bed.";
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponseText,
        sender: 'ai',
        timestamp: getCurrentTime(),
      };

      setMessages(prev => [...prev, aiMsg]);
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 600);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMsgText = inputText.trim();
    setInputText('');

    const userMsg: Message = {
      id: Date.now().toString(),
      text: userMsgText,
      sender: 'user',
      timestamp: getCurrentTime(),
    };

    setMessages(prev => [...prev, userMsg]);

    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: "I hear you. Take your time, and know that you are in a safe, supportive space. What else would you like to explore today?",
        sender: 'ai',
        timestamp: getCurrentTime(),
      };
      setMessages(prev => [...prev, aiMsg]);
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 700);
  };

  return (
    <ScreenWrapper
      backgroundColor="transparent"
      edges={['top', 'left', 'right']}
      renderBackground={() => <AppGradientBackground />}
    >
      <AppHeader
        onBackPress={onBack}
        titleElement={
          <View style={styles.headerTitleRow}>
            <WelyAvatarSvg width={36} height={36} />
            <AppText style={styles.headerTitle}>Ask WELY</AppText>
          </View>
        }
      />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          ref={scrollViewRef}
          style={styles.chatScrollView}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={styles.scrollContent}
          onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
        >
          <View style={styles.heroContainer}>
            <AppText variant="hero" align="center" style={styles.heroTitle}>
              Hello, Ask Me{'\n'}Anything...
            </AppText>
            <AppText variant="caption" align="center" color={theme.colors.gray} style={styles.heroSubtitle}>
              Last Update: 12.02.26
            </AppText>
          </View>

          {messages.length === 0 && (
            <View>
              <View style={styles.categorySection}>
                <View style={[styles.categoryBadgeCircle, { backgroundColor: theme.colors.purpleBg }]}>
                  <UserIconSvg width={20} height={20} color={theme.colors.purple} />
                </View>

                <TouchableOpacity
                  style={styles.promptChip}
                  activeOpacity={0.8}
                  onPress={() => handlePromptSelect('Explain what anxiety feels like')}
                >
                  <View style={[styles.indicatorDot, { backgroundColor: theme.colors.indicatorPurple }]} />
                  <AppText style={styles.promptText}>Explain what anxiety feels like</AppText>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.promptChip}
                  activeOpacity={0.8}
                  onPress={() => handlePromptSelect('How can I build better self-confidence ?')}
                >
                  <View style={[styles.indicatorDot, { backgroundColor: theme.colors.indicatorPurple }]} />
                  <AppText style={styles.promptText}>How can I build better self-confidence ?</AppText>
                </TouchableOpacity>
              </View>

              <View style={styles.categorySection}>
                <View style={[styles.categoryBadgeCircle, { backgroundColor: theme.colors.yellowBg }]}>
                  <LightningIconSvg width={20} height={20} color={theme.colors.yellowIcon} />
                </View>

                <TouchableOpacity
                  style={styles.promptChip}
                  activeOpacity={0.8}
                  onPress={() => handlePromptSelect("I,m feeling overwhelmed lately")}
                >
                  <View style={[styles.indicatorDot, { backgroundColor: theme.colors.indicatorTeal }]} />
                  <AppText style={styles.promptText}>I,m feeling overwhelmed lately</AppText>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.promptChip}
                  activeOpacity={0.8}
                  onPress={() => handlePromptSelect('What are some quick stress relief technique?')}
                >
                  <View style={[styles.indicatorDot, { backgroundColor: theme.colors.indicatorTeal }]} />
                  <AppText style={styles.promptText}>What are some quick stress relief technique?</AppText>
                </TouchableOpacity>
              </View>

              <View style={styles.categorySection}>
                <View style={[styles.categoryBadgeCircle, { backgroundColor: theme.colors.lightPink }]}>
                  <HeartIconSvg width={20} height={20} color={theme.colors.badgePink} />
                </View>

                <TouchableOpacity
                  style={styles.promptChip}
                  activeOpacity={0.8}
                  onPress={() => handlePromptSelect('I want to improve my sleep')}
                >
                  <View style={[styles.indicatorDot, { backgroundColor: theme.colors.indicatorTeal }]} />
                  <AppText style={styles.promptText}>I want to improve my sleep</AppText>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.promptChip}
                  activeOpacity={0.8}
                  onPress={() => handlePromptSelect('How do I stop overthinking ?')}
                >
                  <View style={[styles.indicatorDot, { backgroundColor: theme.colors.indicatorTeal }]} />
                  <AppText style={styles.promptText}>How do I stop overthinking ?</AppText>
                </TouchableOpacity>
              </View>
            </View>
          )}

          {messages.length > 0 && (
            <View style={styles.chatList}>
              {messages.map((msg) => (
                <View
                  key={msg.id}
                  style={msg.sender === 'ai' ? styles.aiMessageRow : styles.userMessageRow}
                >
                  <View style={msg.sender === 'ai' ? styles.aiBubble : styles.userBubble}>
                    <AppText style={msg.sender === 'ai' ? styles.aiMessageText : styles.userMessageText}>
                      {msg.text}
                    </AppText>
                    <AppText style={msg.sender === 'ai' ? styles.timestamp : styles.userTimestamp}>
                      {msg.timestamp}
                    </AppText>
                  </View>
                </View>
              ))}
            </View>
          )}
        </ScrollView>

        <View style={styles.bottomInputWrapper}>
          <View style={styles.inputBarContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Type here..."
              placeholderTextColor={theme.colors.slateGray}
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={handleSendMessage}
              returnKeyType="send"
            />
            <TouchableOpacity
              style={styles.sendButton}
              activeOpacity={0.85}
              onPress={handleSendMessage}
            >
              <SendIconSvg width={18} height={18} color={theme.colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};
