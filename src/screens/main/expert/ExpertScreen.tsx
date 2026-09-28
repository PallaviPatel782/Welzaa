import React from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { AppHeader, AppText } from '../../../components/common';
import {
  ExpertTypeCards,
  ExpertSearchBar,
  ExpertCard,
  CategoryGrid,
  CategoryModal,
  FilterSortingModal,
} from '../../../components/expert';
import { useExpertFilter } from '../../../hooks';
import { styles } from './styles';

export const ExpertScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const {
    selectedType,
    setSelectedType,
    searchText,
    handleSearchChange,
    selectedCategory,
    isCategoryModalVisible,
    setIsCategoryModalVisible,
    isFilterModalVisible,
    setIsFilterModalVisible,
    activeFilters,
    setActiveFilters,
    filteredExperts,
    handleSelectCategory,
  } = useExpertFilter();

  const isWelzaaActive = selectedType === 'welzaa';
  const isSearchOrCategoryActive =
    Boolean(selectedCategory) || Boolean(searchText.trim()) || Boolean(activeFilters);

  const shouldShowCategoryGrid = isWelzaaActive && !isSearchOrCategoryActive;

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.topSection}>
        <SafeAreaView edges={['top']}>
          <AppHeader
            title="Expert"
            showBack={true}
            backgroundColor="transparent"
          />

          <ExpertTypeCards
            selectedType={selectedType}
            onSelectType={(type) => setSelectedType(type)}
          />

          <ExpertSearchBar
            searchText={searchText}
            onChangeText={handleSearchChange}
            onFilterPress={() => setIsFilterModalVisible(true)}
            onCategorySearchPress={() => setIsCategoryModalVisible(true)}
          />
        </SafeAreaView>
      </View>

      <ScrollView
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {shouldShowCategoryGrid ? (
          <CategoryGrid onSelectCategory={handleSelectCategory} />
        ) : (
          <>
            {isWelzaaActive && isSearchOrCategoryActive && (
              <View style={styles.activeFilterHeader}>
                <AppText style={styles.activeFilterTitle}>
                  Showing experts for{' '}
                  <AppText style={styles.activeFilterHighlight}>
                    "{selectedCategory || searchText}"
                  </AppText>
                </AppText>

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => handleSearchChange('')}
                  style={styles.clearCategoryBtn}
                >
                  <AppText style={styles.clearCategoryText}>Show All Categories</AppText>
                </TouchableOpacity>
              </View>
            )}

            {filteredExperts.length > 0 ? (
              filteredExperts.map((expert) => (
                <ExpertCard
                  key={expert.id}
                  expert={expert}
                  onPress={(selectedExp) =>
                    navigation.navigate('ExpertDetail', { expert: selectedExp })
                  }
                />
              ))
            ) : (
              <View style={styles.emptyContainer}>
                <AppText variant="subtitle" style={styles.emptyTitle}>No Experts Found</AppText>
                <AppText variant="caption" style={styles.emptySubtitle}>
                  Try adjusting your search query or filters.
                </AppText>
              </View>
            )}
          </>
        )}
      </ScrollView>

      <CategoryModal
        visible={isCategoryModalVisible}
        onClose={() => setIsCategoryModalVisible(false)}
        onSelectCategory={handleSelectCategory}
      />

      <FilterSortingModal
        visible={isFilterModalVisible}
        onClose={() => setIsFilterModalVisible(false)}
        onApplyFilters={(filters) => setActiveFilters(filters)}
      />
    </View>
  );
};
