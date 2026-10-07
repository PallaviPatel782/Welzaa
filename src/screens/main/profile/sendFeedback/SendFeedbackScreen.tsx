import React, { useState } from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, AppButton } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import Pencil from '../../../../assets/icons/pencil.svg';
import { styles } from './styles';

export const SendFeedbackScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    if (!feedback.trim()) {
      Alert.alert('Feedback Required', 'Please enter your feedback before submitting.');
      return;
    }
    Alert.alert('Thank You!', 'Your feedback has been submitted successfully.', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader title="Send Feedback" onBackPress={() => navigation.goBack()} />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.content}>
          <AppText style={styles.description}>
            Tell us what you love about the app, or what we could be doing better.
          </AppText>

          <View style={styles.inputRow}>
            <Pencil width={22} height={22} color={theme.colors.darkText} style={styles.editIcon} />
            <TextInput
              style={styles.textInput}
              placeholder="Enter feedback"
              placeholderTextColor={theme.colors.gray}
              value={feedback}
              onChangeText={setFeedback}
              multiline
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <AppButton
            title="SUBMIT FEEDBACK"
            onPress={handleSubmit}
            size="large"
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};
