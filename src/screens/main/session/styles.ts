import { StyleSheet } from 'react-native';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.bgLight,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.borderLight,
  },
  backButton: {
    padding: 6,
    marginRight: 8,
  },
  headerTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: theme.colors.navy,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 40,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
  },
  activeTabButton: {
    backgroundColor: theme.colors.purple,
    borderColor: theme.colors.purple,
  },
  tabText: {
    fontFamily: theme.fonts.medium,
    fontSize: 13.5,
    color: theme.colors.darkText,
  },
  activeTabText: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
  },
  sectionTitle: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.navy,
    marginBottom: 14,
  },
  card: {
    backgroundColor: theme.colors.softLavender,
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: theme.colors.softPurpleLight,
    shadowColor: theme.colors.pureBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 12,
  },
  doctorAvatar: {
    width: 64,
    height: 64,
    borderRadius: 14,
  },
  doctorAvatarBox: {
    width: 64,
    height: 64,
    borderRadius: 14,
    overflow: 'hidden',
  },
  badgeOverlay: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    backgroundColor: theme.colors.white,
    borderRadius: 10,
    padding: 1,
  },
  cardContent: {
    flex: 1,
    marginRight: 8,
  },
  doctorNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 3,
  },
  doctorName: {
    fontFamily: theme.fonts.bold,
    fontSize: 15,
    color: theme.colors.navy,
  },
  specialty: {
    fontFamily: theme.fonts.bold,
    fontSize: 10,
    color: theme.colors.gray,
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  infoText: {
    fontFamily: theme.fonts.medium,
    fontSize: 12,
    color: theme.colors.darkText,
  },
  priceContainer: {
    alignItems: 'flex-end',
    paddingTop: 2,
  },
  priceText: {
    fontFamily: theme.fonts.bold,
    fontSize: 16,
    color: theme.colors.purple,
  },
  durationText: {
    fontFamily: theme.fonts.regular,
    fontSize: 11.5,
    color: theme.colors.gray,
    marginTop: 2,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.gray,
  },
});
