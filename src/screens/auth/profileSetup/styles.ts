import { StyleSheet } from 'react-native';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  backButton: {
    padding: 6,
    marginRight: 10,
  },
  headerTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: theme.colors.black,
  },
  welcomeBox: {
    alignItems: 'center',
    marginTop: theme.spacing.sm,
    paddingHorizontal: theme.spacing.lg,
    marginBottom: 20,
  },
  welcomeTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 22,
    color: theme.colors.black,
    textAlign: 'center',
    marginBottom: 6,
  },
  welcomeSubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 13,
    color: theme.colors.gray,
    textAlign: 'center',
    lineHeight: 18,
  },
  avatarSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarDashedCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: theme.colors.borderGray,
    borderStyle: 'dashed',
    backgroundColor: theme.colors.bgLight,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
  },
  addPhotoLink: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.purple,
    textAlign: 'center',
  },
  addPhotoSubtext: {
    fontFamily: theme.fonts.regular,
    fontSize: 11,
    color: theme.colors.gray,
    textAlign: 'center',
    marginTop: 2,
  },
  formContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13,
    color: theme.colors.black,
    marginBottom: 6,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    borderRadius: 12,
    height: 46,
    paddingHorizontal: 14,
    backgroundColor: theme.colors.white,
  },
  divider: {
    color: theme.colors.borderGray,
    fontSize: 16,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontFamily: theme.fonts.regular,
    fontSize: 14,
    color: theme.colors.black,
    height: '100%',
  },
  genderSection: {
    marginTop: 8,
    marginBottom: 24,
  },
  genderTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.black,
    marginBottom: 12,
  },
  radioRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  radioCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    backgroundColor: theme.colors.white,
  },
  radioCircleSelected: {
    borderColor: theme.colors.purple,
  },
  radioInnerCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.purple,
  },
  radioLabel: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.black,
  },
  radioLabelSelected: {
    fontFamily: theme.fonts.semibold,
    color: theme.colors.black,
  },
  continueButton: {
    marginTop: 8,
  },
});
