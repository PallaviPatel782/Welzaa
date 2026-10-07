import { StyleSheet } from 'react-native';
import { theme } from '../../../../config/theme';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.colors.bgLight,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 32,
  },
  expertCardBox: {
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
  },
  expertCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 14,
  },
  avatarBox: {
    width: 52,
    height: 52,
    borderRadius: 26,
    overflow: 'hidden',
    backgroundColor: theme.colors.lightPurple,
  },
  badgeOverlay: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: 2,
  },
  expertTextCol: {
    flex: 1,
  },
  expertTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.dark,
  },
  doctorName: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.gray,
    marginTop: 2,
  },
  specialty: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.gray,
    marginTop: 1,
  },

  // Notice Box
  noticeBox: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.softCream,
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: theme.colors.amberStar,
  },
  noticeIcon: {
    marginRight: 10,
    marginTop: 2,
  },
  noticeText: {
    flex: 1,
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.darkText,
    lineHeight: 17,
  },

  // Section titles
  sectionHeader: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.dark,
  },
  sectionSubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.gray,
    marginTop: 2,
  },

  // Radio list
  reasonsList: {
    marginBottom: 20,
  },
  reasonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    borderRadius: 14,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1.5,
    borderColor: 'transparent',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  selectedReasonCard: {
    borderColor: theme.colors.purple,
    backgroundColor: '#FAF5FF',
  },
  reasonLeftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 12,
  },
  reasonIconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: theme.colors.bgLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  reasonTextCol: {
    flex: 1,
  },
  reasonTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.dark,
  },
  reasonSubtext: {
    fontFamily: theme.fonts.regular,
    fontSize: 11,
    color: theme.colors.gray,
    marginTop: 2,
  },

  // Radio Button Circle
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#D0D5DD',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
  },
  radioOuterSelected: {
    borderColor: theme.colors.purple,
  },
  radioInnerSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.purple,
  },

  // Optional Note Area
  noteSection: {
    marginBottom: 24,
  },
  noteHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  noteTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.dark,
  },
  noteSubtitle: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.gray,
    marginBottom: 10,
  },
  inputContainer: {
    backgroundColor: theme.colors.white,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E4E7EC',
    padding: 12,
    minHeight: 100,
    justifyContent: 'space-between',
  },
  noteInput: {
    fontFamily: theme.fonts.regular,
    fontSize: 13,
    color: theme.colors.dark,
    textAlignVertical: 'top',
    minHeight: 60,
    padding: 0,
  },
  counterText: {
    alignSelf: 'flex-end',
    fontFamily: theme.fonts.regular,
    fontSize: 11,
    color: theme.colors.gray,
    marginTop: 6,
  },

  // Bottom Fixed Footer
  bottomBar: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderLight,
  },
  confirmButton: {
    backgroundColor: theme.colors.purple,
    borderRadius: 14,
    height: 52,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.white,
    letterSpacing: 0.5,
  },
  buttonIcon: {
    marginRight: 8,
  },

  // Other Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 17,
    color: theme.colors.dark,
  },
  closeBtn: {
    padding: 4,
  },
  modalInput: {
    backgroundColor: '#F2F4F7',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontFamily: theme.fonts.regular,
    fontSize: 13,
    color: theme.colors.dark,
    minHeight: 60,
    textAlignVertical: 'top',
    marginBottom: 20,
  },
  modalButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  clearBtn: {
    flex: 1,
    backgroundColor: '#E4E7EC',
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  clearBtnText: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.dark,
  },
  continueBtn: {
    flex: 1.2,
    backgroundColor: theme.colors.purple,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueBtnText: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.white,
  },

  // Not Allowed Modal styles
  notAllowedContent: {
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
  },
  alertCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FEF3F2',
    borderRadius: 14,
    padding: 14,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#FECDCA',
  },
  redIconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F04438',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  alertTextCol: {
    flex: 1,
  },
  alertTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 13,
    color: '#912018',
    marginBottom: 2,
  },
  alertSubtext: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: '#B42318',
    lineHeight: 16,
  },
});
