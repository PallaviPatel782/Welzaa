import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../config/theme';

interface DailyQuoteCardProps {
  quote?: string;
}

export const DailyQuoteCard: React.FC<DailyQuoteCardProps> = ({
  quote = 'Don’t give up good things take time.',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Daily Quotes</Text>

      <View style={styles.quoteCard}>
        <Text style={styles.quoteText}>{quote}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.black,
    marginBottom: 12,
  },
  quoteCard: {
    backgroundColor: theme.colors.lightYellow,
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: theme.colors.amberStar,
    shadowColor: theme.colors.goldStar,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  quoteText: {
    fontFamily: theme.fonts.medium,
    fontSize: 13,
    color: theme.colors.amberDarkText,
    lineHeight: 18,
  },
});
