import React, { useState } from 'react';
import { View, ScrollView, TextInput } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, AppButton } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import { JournalEntry, MoodSelector, TagSelector } from '../../../../components/profile';
import { MOCK_DEFAULT_JOURNAL_ENTRY } from '../../../../mock';
import { styles } from './styles';

export const EditJournalEntryScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const existingEntry: JournalEntry = route.params?.entry || MOCK_DEFAULT_JOURNAL_ENTRY;

  const [title, setTitle] = useState(existingEntry.title);
  const [content, setContent] = useState(existingEntry.content);
  const [moodId, setMoodId] = useState(existingEntry.mood || 'happy');
  const [tags, setTags] = useState<string[]>(['Grateful', 'Stress']);

  const handleAddTag = (tag: string) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleUpdate = () => {
    navigation.goBack();
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader title="Edit Entries" onBackPress={() => navigation.goBack()} />

      <View style={styles.mainContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <TextInput
            style={styles.inputTitle}
            value={title}
            onChangeText={setTitle}
            placeholder="Title"
            placeholderTextColor={theme.colors.gray}
          />

          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              value={content}
              onChangeText={setContent}
              placeholder="Content"
              placeholderTextColor={theme.colors.gray}
              multiline
              maxLength={300}
            />
            <AppText style={styles.charCount}>{content.length}/300</AppText>
          </View>

          <MoodSelector
            label="Change Mood"
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
          <View style={styles.btnRow}>
            <AppButton
              title="CANCEL"
              onPress={handleCancel}
              variant="secondary"
              size="large"
              style={{ flex: 1 }}
            />

            <AppButton
              title="UPDATE"
              onPress={handleUpdate}
              variant="primary"
              size="large"
              style={{ flex: 1 }}
            />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};
