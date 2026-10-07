import React, { useEffect } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppHeader, AppText } from '../../../components/common';
import {
  ExpertTypeCards,
  ExpertSearchBar,
  ExpertCard,
  CategoryGrid,
  FilterSortingModal,
  ActiveFilterChips,
} from '../../../components/expert';
import { useExpertFilter } from '../../../hooks';
import { styles } from './styles';

export const ExpertScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();

  const {
    selectedType,
    setSelectedType,
    searchText,
    handleSearchChange,
    isFilterModalVisible,
    setIsFilterModalVisible,
    activeFilters,
    setActiveFilters,
    filteredExperts,
  } = useExpertFilter();

  useEffect(() => {
    if (route.params?.initialType) {
      setSelectedType(route.params.initialType);
    }
  }, [route.params?.initialType, setSelectedType]);

  const isWelzaaActive = selectedType === 'welzaa';

  const handleApplyFiltersFromModal = (filters: any) => {
    setIsFilterModalVisible(false);
    setActiveFilters(filters);
  };

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
          />

          <ActiveFilterChips
            filters={activeFilters}
            onRemoveFilter={(updated) => setActiveFilters(updated)}
            onClearAll={() => setActiveFilters(null)}
          />
        </SafeAreaView>
      </View>

      <ScrollView
        style={styles.listContainer}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      >
        {isWelzaaActive ? (
          <CategoryGrid
            filterQuery={searchText}
            activeFilters={activeFilters}
            onSelectCategory={(cat) =>
              navigation.navigate('BookSessionWelzaaInstant', { category: cat, filters: activeFilters })
            }
          />
        ) : (
          <>
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

      <FilterSortingModal
        visible={isFilterModalVisible}
        isWelzaa={isWelzaaActive}
        initialFilters={activeFilters}
        onClose={() => setIsFilterModalVisible(false)}
        onApplyFilters={handleApplyFiltersFromModal}
      />
    </View>
  );
};
