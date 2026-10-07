import React, { useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, AppGradientBackground, AppButton } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import { MoodSelector, TagSelector } from '../../../../components/profile';
import Note from '../../../../assets/icons/note.svg';
import { styles } from './styles';

export const NewJournalEntryScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [moodId, setMoodId] = useState('happy');
  const [tags, setTags] = useState<string[]>(['Grateful']);

  const handleAddTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSaveEntry = () => {
    navigation.goBack();
  };

  return (
    <ScreenWrapper
      backgroundColor="transparent"
      edges={['top', 'left', 'right', 'bottom']}
      renderBackground={() => <AppGradientBackground />}
    >
      <AppHeader title="New Journal Entry" onBackPress={() => navigation.goBack()} />

      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <View style={styles.sectionHeaderRow}>
            <Note width={20} height={20} color={theme.colors.dark} />
            <View>
              <AppText style={styles.sectionTitle}>Additional Journal</AppText>
              <AppText style={styles.sectionSubtitle}>
                You can add a brief journal.
              </AppText>
            </View>
          </View>

          <TextInput
            style={styles.inputTitle}
            value={title}
            onChangeText={setTitle}
            placeholder="Write Title"
            placeholderTextColor={theme.colors.gray}
          />

          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              value={content}
              onChangeText={setContent}
              placeholder="e.g How are you feeling today?"
              placeholderTextColor={theme.colors.gray}
              multiline
              maxLength={300}
            />
            <AppText style={styles.charCount}>{content.length}/300</AppText>
          </View>

          <MoodSelector
            selectedMoodId={moodId}
            onSelectMood={setMoodId}
          />

          <TagSelector
            tags={tags}
            onAddTag={handleAddTag}
            onRemoveTag={handleRemoveTag}
          />
        </ScrollView>

        <View style={styles.bottomButtonContainer}>
          <AppButton
            title="SAVE ENTRY"
            onPress={handleSaveEntry}
            size="large"
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};
