import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText, AppFastImage } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import { JournalEntry, MOOD_OPTIONS } from '../../../../components/profile';
import { MOCK_DEFAULT_JOURNAL_ENTRY } from '../../../../mock';
import EditIconSvg from '../../../../assets/icons/Edit.svg';
import DeleteIconSvg from '../../../../assets/icons/Delete.svg';
import { getMoodGif } from '../../../../assets/moodtype';
import { styles } from './styles';

export const JournalDetailScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const entry: JournalEntry = route.params?.entry || MOCK_DEFAULT_JOURNAL_ENTRY;

  const selectedMood = MOOD_OPTIONS.find((m) => m.id === entry.mood) || MOOD_OPTIONS[0];
  const moodGif = entry.gif || selectedMood?.gif || getMoodGif(entry.mood || selectedMood?.name);

  const handleEdit = () => {
    navigation.navigate('EditJournalEntry', { entry });
  };

  const handleDelete = () => {
    navigation.goBack();
  };

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader title="Journal Entries" onBackPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.detailCard}>
          <View style={styles.detailHeaderRow}>
            <View>
              <AppText style={styles.detailTitle}>{entry.title}</AppText>
              <AppText style={styles.detailDate}>
                {entry.date} • {entry.time}
              </AppText>
            </View>

            <View style={styles.actionIconsRow}>
              <TouchableOpacity
                style={styles.actionIconBtn}
                activeOpacity={0.7}
                onPress={handleEdit}
              >
                <EditIconSvg width={18} height={18} color={theme.colors.dark} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.actionIconBtn}
                activeOpacity={0.7}
                onPress={handleDelete}
              >
                <DeleteIconSvg width={18} height={18} color={theme.colors.red} />
              </TouchableOpacity>
            </View>
          </View>

          <AppText style={styles.detailBodyText}>{entry.content}</AppText>
        </View>

        <AppText style={styles.sectionLabel}>Mood</AppText>
        <View style={styles.moodDisplayRow}>
          <AppFastImage source={moodGif} style={styles.selectedGifImage} />
          <AppText style={styles.selectedMoodName}>{selectedMood.name}</AppText>
        </View>

        <AppText style={styles.sectionLabel}>Tags</AppText>
        <View style={styles.tagPillGreen}>
          <AppText style={styles.tagTextGreen}>{entry.tag}</AppText>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

