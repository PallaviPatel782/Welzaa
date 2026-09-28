import { useState, useMemo } from 'react';
import { ExpertType, CategoryOption } from '../types';
import { MOCK_EXPERTS } from '../mock';

export const useExpertFilter = () => {
  const [selectedType, setSelectedType] = useState<ExpertType>('welzaa');
  const [searchText, setSearchText] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const [isCategoryModalVisible, setIsCategoryModalVisible] = useState<boolean>(false);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState<boolean>(false);
  const [activeFilters, setActiveFilters] = useState<any>(null);

  const filteredExperts = useMemo(() => {
    return MOCK_EXPERTS.filter((exp) => {
      if (exp.type !== selectedType) {
        return false;
      }

      if (searchText.trim()) {
        const query = searchText.toLowerCase();
        const matchesName = exp.name.toLowerCase().includes(query);
        const matchesTitle = exp.title.toLowerCase().includes(query);
        const matchesCategory = exp.categoryTag.toLowerCase().includes(query);
        if (!matchesName && !matchesTitle && !matchesCategory) {
          return false;
        }
      }

      if (selectedCategory && exp.categoryTag.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      if (activeFilters) {
        if (
          activeFilters.mode &&
          activeFilters.mode !== 'Both' &&
          !exp.mode.includes(activeFilters.mode)
        ) {
          return false;
        }
        if (activeFilters.priceMax && exp.price > activeFilters.priceMax) {
          return false;
        }
        if (activeFilters.priceMin && exp.price < activeFilters.priceMin) {
          return false;
        }
        if (activeFilters.ratingMin && exp.rating < activeFilters.ratingMin) {
          return false;
        }
      }

      return true;
    });
  }, [selectedType, searchText, selectedCategory, activeFilters]);

  const handleSelectCategory = (category: CategoryOption) => {
    setSelectedCategory(category.name);
    setSearchText(category.name);
  };

  const handleSearchChange = (text: string) => {
    setSearchText(text);
    if (!text) {
      setSelectedCategory(undefined);
    }
  };

  return {
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
  };
};
