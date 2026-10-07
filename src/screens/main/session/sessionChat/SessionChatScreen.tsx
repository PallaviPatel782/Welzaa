import React, { useState, useRef } from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppText, AppGradientBackground, AppHeader } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import SendIconSvg from '../../../../assets/icons/sendIcon.svg';
import { styles } from './styles';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'doctor' | 'user';
  timestamp: string;
}

export const SessionChatScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const session = route.params?.session || {
    doctorName: 'Dr. Anjali Sharma',
  };

  const doctorName = route.params?.doctorName || session.doctorName || 'Dr. Anjali';

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hi, I'm Dr. Anjali — here to support you whenever things feel a bit too much.\nHow are you feeling right now?",
      sender: 'doctor',
      timestamp: '9:15PM',
    },
    {
      id: '2',
      text: "I don't really know... kinda heavy, I guess.",
      sender: 'user',
      timestamp: '9:15PM',
    },
    {
      id: '3',
      text: "Thank you for sharing that. Feeling heavy can mean a lot of things. Would you like to talk about what's been on your mind lately?",
      sender: 'doctor',
      timestamp: '9:15PM',
    },
    {
      id: '4',
      text: "It's just... everything feels too much. I'm tired all the time and I don't know how to explain it to anyone.",
      sender: 'user',
      timestamp: '9:15PM',
    },
  ]);

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

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMsgText = inputText.trim();
    setInputText('');

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: userMsgText,
      sender: 'user',
      timestamp: getCurrentTime(),
    };

    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const replyMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "I completely understand. Take your time, we are working through this together step by step.",
        sender: 'doctor',
        timestamp: getCurrentTime(),
      };
      setMessages((prev) => [...prev, replyMsg]);
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 700);
  };

  return (
    <ScreenWrapper
      backgroundColor="transparent"
      edges={['top', 'left', 'right', 'bottom']}
      renderBackground={() => <AppGradientBackground />}
    >
      <AppHeader
        title={`Chat with ${doctorName.startsWith('Dr.') ? doctorName : `Dr. ${doctorName}`}`}
        onBackPress={() => navigation.goBack()}
        backgroundColor="transparent"
      />

      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior="padding"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
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
              Chat with {doctorName.startsWith('Dr.') ? doctorName : `Dr. ${doctorName}`}
            </AppText>
            <AppText variant="caption" align="center" color={theme.colors.gray} style={styles.heroSubtitle}>
              Today
            </AppText>
          </View>

          <View style={styles.chatList}>
            {messages.map((msg) => (
              <View
                key={msg.id}
                style={msg.sender === 'doctor' ? styles.aiMessageRow : styles.userMessageRow}
              >
                <View style={msg.sender === 'doctor' ? styles.aiBubble : styles.userBubble}>
                  <AppText style={msg.sender === 'doctor' ? styles.aiMessageText : styles.userMessageText}>
                    {msg.text}
                  </AppText>
                  <AppText style={msg.sender === 'doctor' ? styles.timestamp : styles.userTimestamp}>
                    {msg.timestamp}
                  </AppText>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        <View style={[styles.bottomInputWrapper]}>
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
