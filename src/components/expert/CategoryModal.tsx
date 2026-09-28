import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { CategoryOption } from '../../types';
import { ALL_CATEGORIES } from '../../mock';
import { CategoryTile } from './CategoryTile';
import { AppModal, AppButton } from '../common';

interface CategoryModalProps {
  visible: boolean;
  selectedCategoryId?: string;
  onClose: () => void;
  onSelectCategory: (category: CategoryOption) => void;
}

export const CategoryModal: React.FC<CategoryModalProps> = ({
  visible,
  selectedCategoryId,
  onClose,
  onSelectCategory,
}) => {
  const [selectedId, setSelectedId] = useState<string | undefined>(selectedCategoryId);

  const handleContinue = () => {
    const chosen = ALL_CATEGORIES.find((c) => c.id === selectedId) || ALL_CATEGORIES[0];
    onSelectCategory(chosen);
    onClose();
  };

  return (
    <AppModal
      visible={visible}
      onClose={onClose}
      title="Category"
      footer={
        <AppButton
          title="Continue"
          onPress={handleContinue}
          size="large"
        />
      }
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.gridContent}
      >
        <View style={styles.grid}>
          {ALL_CATEGORIES.map((cat) => (
            <CategoryTile
              key={cat.id}
              category={cat}
              isSelected={selectedId === cat.id}
              onPress={(selectedCat) => setSelectedId(selectedCat.id)}
            />
          ))}
        </View>
      </ScrollView>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  gridContent: {
    paddingBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
