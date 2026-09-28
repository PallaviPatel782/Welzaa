import React from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../../config/theme';

export interface AppModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  showHandleBar?: boolean;
  showCloseButton?: boolean;
  maxHeight?: string | number;
  children: React.ReactNode;
  footer?: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
}

export const AppModal: React.FC<AppModalProps> = ({
  visible,
  onClose,
  title,
  showHandleBar = true,
  showCloseButton = true,
  maxHeight = '85%',
  children,
  footer,
  contentStyle,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={[styles.sheetCard, { maxHeight: maxHeight as any }]}>
              <SafeAreaView edges={['bottom']} style={styles.sheetSafeArea}>
                {showHandleBar && <View style={styles.handleBar} />}

                {(title || showCloseButton) && (
                  <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    {showCloseButton && (
                      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                        <Text style={styles.closeText}>✕</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                )}

                <View style={[styles.bodyContent, contentStyle]}>{children}</View>

                {footer && <View style={styles.footerContainer}>{footer}</View>}
              </SafeAreaView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: theme.colors.overlayDark,
    justifyContent: 'flex-end',
  },
  sheetCard: {
    width: '100%',
    backgroundColor: theme.colors.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 12,
    elevation: 12,
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
  },
  sheetSafeArea: {
    width: '100%',
    paddingBottom: 16,
  },
  handleBar: {
    width: 40,
    height: 4,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  title: {
    fontFamily: theme.fonts.bold,
    fontSize: 18,
    color: theme.colors.dark,
  },
  closeButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: theme.colors.borderLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    fontSize: 14,
    color: theme.colors.dark,
    fontFamily: theme.fonts.bold,
  },
  bodyContent: {
    flexShrink: 1,
  },
  footerContainer: {
    marginTop: 14,
    paddingTop: 8,
  },
});
