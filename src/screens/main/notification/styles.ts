import { StyleSheet } from 'react-native';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.black,
    marginTop: 8,
    marginBottom: 14,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    gap: 12,
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentColumn: {
    flex: 1,
  },
  itemTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.black,
    marginBottom: 3,
  },
  itemMessage: {
    fontFamily: theme.fonts.medium,
    fontSize: 12.5,
    color: theme.colors.bodyTextGray,
    lineHeight: 17,
    marginBottom: 4,
  },
  itemTime: {
    fontFamily: theme.fonts.regular,
    fontSize: 11.5,
    color: theme.colors.timeGray,
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.borderLight,
    marginVertical: 4,
  },
});
