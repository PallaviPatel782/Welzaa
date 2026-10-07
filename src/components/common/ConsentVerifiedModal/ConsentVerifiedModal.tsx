import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../PrimaryButton';
import ConsentVerifiedSvg from '../../../assets/illustrations/ConsentVerified.svg';
import { styles } from './styles';

interface ConsentVerifiedModalProps {
  visible: boolean;
  onContinue: () => void;
}

export const ConsentVerifiedModal: React.FC<ConsentVerifiedModalProps> = ({
  visible,
  onContinue,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onContinue}
    >
      <TouchableWithoutFeedback onPress={onContinue}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.sheetCard}>
              <SafeAreaView edges={['bottom']} style={styles.safeArea}>
                <View style={styles.handleBar} />

                <View style={styles.illustrationWrapper}>
                  <ConsentVerifiedSvg width={105} height={105} />
                </View>

                <Text style={styles.title}>Consent Verified</Text>

                <Text style={styles.description1}>
                  Parent/guardian consent has been successfully verified.
                </Text>

                <Text style={styles.description2}>
                  You're ready to continue setting up your Welzaa account.
                </Text>

                <PrimaryButton
                  title="CONTINUE"
                  onPress={onContinue}
                  style={styles.button}
                />
              </SafeAreaView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

