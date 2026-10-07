import { StyleSheet } from 'react-native';
import { theme } from '../../../../config/theme';

export const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    gap: 16,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.navy,
    marginBottom: 4,
  },
  methodsContainer: {
    gap: 14,
  },
  methodCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
  },
  methodCardSelected: {
    borderColor: '#7C3AED',
    backgroundColor: '#FAF5FF',
  },
  methodLeftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  methodIconBg: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  methodName: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.navy,
  },
  methodSubtitle: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.gray,
    marginTop: 2,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: '#94A3B8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterSelected: {
    borderColor: '#7C3AED',
  },
  radioInnerSelected: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#7C3AED',
  },
  bottomFooter: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: theme.colors.white,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  continueBtn: {
    backgroundColor: '#7C3AED',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7C3AED',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  continueBtnText: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.white,
    letterSpacing: 0.5,
  },
});
