import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScreenWrapper } from '../../../../components/layout';
import { AppHeader, AppText } from '../../../../components/common';
import { theme } from '../../../../config/theme';
import { MOCK_FAQ_DATA } from '../../../../mock';
import ChevronDownSvg from '../../../../assets/icons/chevronDown.svg';
import { styles } from './styles';

export const FaqScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <ScreenWrapper
      backgroundColor={theme.colors.white}
      edges={['top', 'left', 'right', 'bottom']}
    >
      <AppHeader title="FAQ" onBackPress={() => navigation.goBack()} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.faqList}>
          {MOCK_FAQ_DATA.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <View key={item.id} style={styles.faqItemContainer}>
                <TouchableOpacity
                  style={styles.faqHeaderRow}
                  activeOpacity={0.7}
                  onPress={() => toggleExpand(item.id)}
                >
                  <AppText style={styles.questionText}>{item.question}</AppText>
                  <View
                    style={{
                      transform: [{ rotate: isExpanded ? '180deg' : '0deg' }],
                    }}
                  >
                    <ChevronDownSvg
                      width={18}
                      height={18}
                      color={theme.colors.darkText}
                    />
                  </View>
                </TouchableOpacity>

                {isExpanded && (
                  <View style={styles.answerContainer}>
                    <AppText style={styles.answerText}>{item.answer}</AppText>
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};
