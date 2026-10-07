import { StyleSheet } from 'react-native';
import { theme } from '../../../../config/theme';

export const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 40,
  },
  faqList: {
    gap: 0,
  },
  faqItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.cardBorder,
    paddingVertical: 14,
  },
  faqHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  questionText: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.dark,
    flex: 1,
    paddingRight: 12,
    lineHeight: 20,
  },
  answerContainer: {
    marginTop: 8,
    paddingRight: 12,
  },
  answerText: {
    fontFamily: theme.fonts.regular,
    fontSize: 13,
    color: theme.colors.slateGray,
    lineHeight: 19,
  },
});
