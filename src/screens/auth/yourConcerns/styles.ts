import { StyleSheet } from 'react-native';
import { theme } from '../../../config/theme';

const GRID_PADDING = 16;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  scrollContent: {
    paddingHorizontal: GRID_PADDING,
    paddingBottom: 40,
  },
  welcomeBox: {
    alignItems: 'center',
    marginTop: theme.spacing.xs,
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
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  gridCell: {
    width: '25%',
    paddingHorizontal: 4,
    marginBottom: 12,
  },
  cardItem: {
    backgroundColor: theme.colors.bgLight,
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1.5,
    borderColor: theme.colors.borderLight,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
    height: 76,
  },
  cardItemSelected: {
    backgroundColor: theme.colors.purpleBg,
    borderColor: theme.colors.purple,
    shadowColor: theme.colors.purple,
    shadowOpacity: 0.15,
    elevation: 4,
  },
  iconContainer: {
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLabel: {
    fontFamily: theme.fonts.semibold,
    fontSize: 10,
    color: theme.colors.black,
    textAlign: 'center',
  },
  cardLabelSelected: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.purple,
  },
  exploreLaterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 18,
  },
  exploreLaterText: {
    fontFamily: theme.fonts.semibold,
    fontSize: 13,
    color: theme.colors.purple,
  },
  continueButton: {
    marginTop: 4,
  },
});
