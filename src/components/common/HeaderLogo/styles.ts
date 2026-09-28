import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    position: 'relative',
    minHeight: 50,
  },
  backButton: {
    position: 'absolute',
    left: 16,
    padding: 8,
    zIndex: 10,
  },
  logoImage: {
    width: 180,
    height: 54,
  },
});
