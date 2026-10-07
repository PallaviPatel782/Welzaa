import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Slider from '@react-native-community/slider';
import SearchIconSvg from '../../assets/icons/searchIcon.svg';
import CheckIconSvg from '../../assets/icons/checkIcon.svg';
import { theme } from '../../config/theme';
import { FilterTab, FilterCriteria } from '../../types';
import { AppModal, AppButton } from '../common';
import { ActiveFilterChips } from './ActiveFilterChips';

const ALL_SPECIALIZATIONS = [
  'Anxiety & Stress',
  'Personal Growth',
  'Emotional Support',
  'Self-Esteem & Confidence',
  'Depression',
  'Relationship',
];

const ALL_LANGUAGES = ['English', 'Hindi', 'Marathi', 'Telugu', 'Tamil'];

interface FilterSortingModalProps {
  visible: boolean;
  onClose: () => void;
  onApplyFilters?: (filters: FilterCriteria | null) => void;
  isWelzaa?: boolean;
  initialFilters?: FilterCriteria | null;
}

export const FilterSortingModal: React.FC<FilterSortingModalProps> = ({
  visible,
  onClose,
  onApplyFilters,
  isWelzaa = false,
  initialFilters = null,
}) => {
  const [activeTab, setActiveTab] = useState<FilterTab>('specialization');

  const availableTabs = isWelzaa
    ? [
      { id: 'price' as FilterTab, label: 'Price' },
      { id: 'rating' as FilterTab, label: 'Rating' },
      { id: 'language' as FilterTab, label: 'Language' },
    ]
    : [
      { id: 'specialization' as FilterTab, label: 'Specialization' },
      { id: 'mode' as FilterTab, label: 'Consultation Mode' },
      { id: 'price' as FilterTab, label: 'Price' },
      { id: 'rating' as FilterTab, label: 'Rating' },
      { id: 'language' as FilterTab, label: 'Language' },
    ];

  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([]);
  const [consultationMode, setConsultationMode] = useState<'Online' | 'Offline' | 'Both'>('Both');
  const [priceValue, setPriceValue] = useState<number>(5000);
  const [ratingValue, setRatingValue] = useState<number>(0);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  const [specializationSearch, setSpecializationSearch] = useState<string>('');
  const [languageSearch, setLanguageSearch] = useState<string>('');

  React.useEffect(() => {
    if (visible) {
      setSelectedSpecializations(initialFilters?.specializations || []);
      setConsultationMode(initialFilters?.mode || 'Both');
      setPriceValue(initialFilters?.priceMax ?? 5000);
      setRatingValue(initialFilters?.ratingMin ?? 0);
      setSelectedLanguages(initialFilters?.languages || []);
    }
  }, [visible, initialFilters]);

  const currentModalFilters: FilterCriteria = {
    specializations: selectedSpecializations,
    mode: consultationMode,
    priceMin: 0,
    priceMax: priceValue,
    ratingMin: ratingValue,
    languages: selectedLanguages,
  };

  const handleClearAll = () => {
    setSelectedSpecializations([]);
    setConsultationMode('Both');
    setPriceValue(5000);
    setRatingValue(0);
    setSelectedLanguages([]);
    setSpecializationSearch('');
    setLanguageSearch('');
    if (onApplyFilters) {
      onApplyFilters(null);
    }
    onClose();
  };

  const handleApply = () => {
    if (onApplyFilters) {
      onApplyFilters({
        specializations: selectedSpecializations,
        mode: consultationMode,
        priceMin: 0,
        priceMax: priceValue,
        ratingMin: ratingValue,
        languages: selectedLanguages,
      });
    }
    onClose();
  };

  const toggleSpecialization = (tag: string) => {
    if (selectedSpecializations.includes(tag)) {
      setSelectedSpecializations(selectedSpecializations.filter((t) => t !== tag));
    } else {
      setSelectedSpecializations([...selectedSpecializations, tag]);
    }
  };

  const toggleLanguage = (lang: string) => {
    if (selectedLanguages.includes(lang)) {
      setSelectedLanguages(selectedLanguages.filter((l) => l !== lang));
    } else {
      setSelectedLanguages([...selectedLanguages, lang]);
    }
  };

  const filteredSpecializations = ALL_SPECIALIZATIONS.filter((s) =>
    s.toLowerCase().includes(specializationSearch.toLowerCase().trim())
  );

  const filteredLanguages = ALL_LANGUAGES.filter((l) =>
    l.toLowerCase().includes(languageSearch.toLowerCase().trim())
  );

  return (
    <AppModal
      visible={visible}
      onClose={onClose}
      title="Filters and Sorting"
      footer={
        <View style={styles.footerRow}>
          <AppButton
            title="Clear All"
            variant="outline"
            onPress={handleClearAll}
            style={styles.halfBtn}
          />
          <AppButton
            title="Apply"
            variant="primary"
            onPress={handleApply}
            style={styles.halfBtn}
          />
        </View>
      }
    >
      <ActiveFilterChips
        filters={currentModalFilters}
        onRemoveFilter={(updated) => {
          setSelectedSpecializations(updated?.specializations || []);
          setConsultationMode(updated?.mode || 'Both');
          setPriceValue(updated?.priceMax ?? 5000);
          setRatingValue(updated?.ratingMin ?? 0);
          setSelectedLanguages(updated?.languages || []);
        }}
        onClearAll={() => {
          setSelectedSpecializations([]);
          setConsultationMode('Both');
          setPriceValue(5000);
          setRatingValue(0);
          setSelectedLanguages([]);
        }}
        containerStyle={{ marginBottom: 6 }}
      />
      <View style={styles.body}>
        <View style={styles.tabsCol}>
          {availableTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <TouchableOpacity
                key={tab.id}
                style={[styles.tabItem, isActive && styles.tabItemActive]}
                onPress={() => setActiveTab(tab.id)}
              >
                {isActive && <View style={styles.activeIndicator} />}
                <Text
                  style={[
                    styles.tabLabel,
                    isActive && styles.tabLabelActive,
                  ]}
                  numberOfLines={2}
                >
                  {tab.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.contentCol}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {activeTab === 'specialization' && (
              <View>
                <Text style={styles.sectionHeader}>Specialization</Text>
                <View style={styles.searchBox}>
                  <SearchIconSvg width={14} height={14} color={theme.colors.gray} />
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search Categories"
                    placeholderTextColor={theme.colors.slateGray}
                    value={specializationSearch}
                    onChangeText={setSpecializationSearch}
                  />
                </View>
                <View style={styles.tagWrap}>
                  {filteredSpecializations.map((tag) => {
                    const isSelected = selectedSpecializations.includes(tag);
                    return (
                      <TouchableOpacity
                        key={tag}
                        style={[
                          styles.tagPill,
                          isSelected && styles.tagPillSelected,
                        ]}
                        onPress={() => toggleSpecialization(tag)}
                      >
                        <Text
                          style={[
                            styles.tagPillText,
                            isSelected && styles.tagPillTextSelected,
                          ]}
                        >
                          {tag}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            )}

            {activeTab === 'mode' && (
              <View>
                <Text style={styles.sectionHeader}>Consultation Mode</Text>
                {(['Online', 'Offline', 'Both'] as const).map((mode) => {
                  const isSelected = consultationMode === mode;
                  return (
                    <TouchableOpacity
                      key={mode}
                      style={[
                        styles.optionBox,
                        isSelected && styles.optionBoxSelected,
                      ]}
                      onPress={() => setConsultationMode(mode)}
                    >
                      <Text
                        style={[
                          styles.optionText,
                          isSelected && styles.optionTextSelected,
                        ]}
                      >
                        {mode}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}

            {activeTab === 'price' && (
              <View style={styles.sliderContainer}>
                <Text style={styles.sectionHeader}>Price</Text>
                <View style={styles.sliderHeaderRow}>
                  <Text style={styles.sliderSubLabel}>₹1000</Text>
                  <Text style={styles.sliderActiveValue}>Up to ₹{priceValue}</Text>
                  <Text style={styles.sliderSubLabel}>₹5000</Text>
                </View>

                <Slider
                  style={styles.sliderTrack}
                  minimumValue={1000}
                  maximumValue={5000}
                  step={250}
                  value={priceValue}
                  onValueChange={(val) => setPriceValue(val)}
                  minimumTrackTintColor={theme.colors.purple}
                  maximumTrackTintColor={theme.colors.borderGray}
                  thumbTintColor={theme.colors.purple}
                />

                <View style={styles.quickStepRow}>
                  {[1000, 2000, 3000, 4000, 5000].map((step) => (
                    <TouchableOpacity
                      key={step}
                      style={[
                        styles.stepChip,
                        priceValue === step && styles.stepChipActive,
                      ]}
                      onPress={() => setPriceValue(step)}
                    >
                      <Text
                        style={[
                          styles.stepChipText,
                          priceValue === step && styles.stepChipTextActive,
                        ]}
                      >
                        ₹{step}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {activeTab === 'rating' && (
              <View style={styles.sliderContainer}>
                <Text style={styles.sectionHeader}>Rating</Text>
                <View style={styles.sliderHeaderRow}>
                  <Text style={styles.sliderSubLabel}>★ 3.0</Text>
                  <Text style={styles.sliderActiveValue}>
                    {ratingValue > 0 ? `★ ${ratingValue.toFixed(1)} & above` : 'Any rating'}
                  </Text>
                  <Text style={styles.sliderSubLabel}>★ 5.0</Text>
                </View>

                <Slider
                  style={styles.sliderTrack}
                  minimumValue={3.0}
                  maximumValue={5.0}
                  step={0.5}
                  value={ratingValue > 0 ? ratingValue : 3.0}
                  onValueChange={(val) => setRatingValue(val)}
                  minimumTrackTintColor={theme.colors.purple}
                  maximumTrackTintColor={theme.colors.borderGray}
                  thumbTintColor={theme.colors.purple}
                />

                <View style={styles.quickStepRow}>
                  {[3.0, 3.5, 4.0, 4.5, 5.0].map((step) => (
                    <TouchableOpacity
                      key={step}
                      style={[
                        styles.stepChip,
                        ratingValue === step && styles.stepChipActive,
                      ]}
                      onPress={() => setRatingValue(step)}
                    >
                      <Text
                        style={[
                          styles.stepChipText,
                          ratingValue === step && styles.stepChipTextActive,
                        ]}
                      >
                        ★ {step.toFixed(1)}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )}

            {activeTab === 'language' && (
              <View>
                <Text style={styles.sectionHeader}>Language</Text>
                <View style={styles.searchBox}>
                  <SearchIconSvg width={14} height={14} color={theme.colors.gray} />
                  <TextInput
                    style={styles.searchInput}
                    placeholder="Search Languages"
                    placeholderTextColor={theme.colors.slateGray}
                    value={languageSearch}
                    onChangeText={setLanguageSearch}
                  />
                </View>
                {filteredLanguages.map((lang) => {
                  const isSelected = selectedLanguages.includes(lang);
                  return (
                    <TouchableOpacity
                      key={lang}
                      style={styles.checkboxRow}
                      onPress={() => toggleLanguage(lang)}
                    >
                      <View
                        style={[
                          styles.checkbox,
                          isSelected && styles.checkboxSelected,
                        ]}
                      >
                        {isSelected && (
                          <CheckIconSvg
                            width={12}
                            height={12}
                            stroke={theme.colors.purple}
                            strokeWidth={3}
                          />
                        )}
                      </View>
                      <Text style={styles.checkboxLabel}>{lang}</Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    </AppModal>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    height: 280,
    marginTop: 12,
  },
  tabsCol: {
    width: '38%',
    backgroundColor: theme.colors.bgLight,
    borderRadius: 14,
    paddingVertical: 6,
  },
  tabItem: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    position: 'relative',
    justifyContent: 'center',
  },
  tabItemActive: {
    backgroundColor: theme.colors.white,
  },
  activeIndicator: {
    position: 'absolute',
    left: 0,
    top: 8,
    bottom: 8,
    width: 4,
    backgroundColor: theme.colors.purple,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
  },
  tabLabel: {
    fontFamily: theme.fonts.medium,
    fontSize: 11.5,
    color: theme.colors.gray,
  },
  tabLabelActive: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.dark,
  },
  contentCol: {
    flex: 1,
    paddingLeft: 14,
    paddingVertical: 4,
  },
  sectionHeader: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.dark,
    marginBottom: 14,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 36,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 6,
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.dark,
    paddingVertical: 0,
  },
  tagWrap: {
    flexDirection: 'column',
    gap: 8,
  },
  tagPill: {
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 7,
    alignSelf: 'flex-start',
  },
  tagPillSelected: {
    borderColor: theme.colors.purple,
    backgroundColor: theme.colors.purpleBg,
  },
  tagPillText: {
    fontFamily: theme.fonts.medium,
    fontSize: 11,
    color: theme.colors.subtextSlate,
  },
  tagPillTextSelected: {
    color: theme.colors.purple,
    fontFamily: theme.fonts.bold,
  },
  optionBox: {
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 10,
    alignItems: 'center',
  },
  optionBoxSelected: {
    borderColor: theme.colors.purple,
    backgroundColor: theme.colors.purpleBg,
  },
  optionText: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.subtextSlate,
  },
  optionTextSelected: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.purple,
  },
  sliderContainer: {
    paddingRight: 6,
  },
  sliderHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sliderSubLabel: {
    fontFamily: theme.fonts.medium,
    fontSize: 11,
    color: theme.colors.slateGray,
  },
  sliderActiveValue: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: theme.colors.purple,
  },
  sliderTrack: {
    width: '100%',
    height: 40,
  },
  quickStepRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 8,
  },
  stepChip: {
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: theme.colors.white,
  },
  stepChipActive: {
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.purple,
  },
  stepChipText: {
    fontFamily: theme.fonts.medium,
    fontSize: 10,
    color: theme.colors.dark,
  },
  stepChipTextActive: {
    color: theme.colors.white,
    fontFamily: theme.fonts.bold,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: theme.colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxSelected: {
    borderColor: theme.colors.purple,
    backgroundColor: theme.colors.purpleBg,
  },
  checkboxLabel: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.dark,
  },
  footerRow: {
    flexDirection: 'row',
    gap: 12,
  },
  halfBtn: {
    flex: 1,
  },
});
