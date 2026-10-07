import { StyleSheet } from 'react-native';
import { theme } from '../../../../config/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  content: {
    flex: 1,
  },
  description: {
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.darkText,
    lineHeight: 20,
    marginBottom: 24,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.dividerBorder,
    paddingBottom: 10,
    paddingTop: 4,
  },
  editIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontFamily: theme.fonts.regular,
    fontSize: 15,
    color: theme.colors.dark,
    minHeight: 40,
    paddingVertical: 0,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
