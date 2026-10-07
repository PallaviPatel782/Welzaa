import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import PlusIconSvg from '../../assets/icons/plusIcon.svg';

interface TagSelectorProps {
  tags: string[];
  onAddTag: (tag: string) => void;
  onRemoveTag: (tag: string) => void;
}

export const TagSelector: React.FC<TagSelectorProps> = ({
  tags,
  onAddTag,
  onRemoveTag,
}) => {
  const [newTag, setNewTag] = useState('');

  const handleAdd = () => {
    if (!newTag.trim()) return;
    onAddTag(newTag.trim());
    setNewTag('');
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.label}>Add Tags</AppText>

      <View style={styles.tagsContainer}>
        {tags.map((t) => (
          <View key={t} style={styles.activeTagPill}>
            <AppText style={styles.activeTagText}>{t}</AppText>
            <TouchableOpacity onPress={() => onRemoveTag(t)}>
              <AppText style={styles.removeX}>✕</AppText>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.inputPill}>
          <TextInput
            style={styles.tagInput}
            value={newTag}
            onChangeText={setNewTag}
            placeholder="| Enter Tag"
            placeholderTextColor={theme.colors.gray}
          />
          <TouchableOpacity style={styles.addBtn} activeOpacity={0.8} onPress={handleAdd}>
            <PlusIconSvg width={12} height={12} color={theme.colors.dark} />
            <AppText style={styles.addBtnText}>Add Tag</AppText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.dark,
    marginBottom: 8,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    alignItems: 'center',
  },
  activeTagPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: theme.colors.purpleBg,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  activeTagText: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.purple,
  },
  removeX: {
    fontFamily: theme.fonts.bold,
    fontSize: 12,
    color: theme.colors.purple,
  },
  inputPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  tagInput: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.dark,
    padding: 0,
    minWidth: 70,
  },
  addBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: theme.colors.bgLight,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  addBtnText: {
    fontFamily: theme.fonts.bold,
    fontSize: 11,
    color: theme.colors.dark,
  },
});
