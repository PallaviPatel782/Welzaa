import React from 'react';
import { View, Text, Modal } from 'react-native';
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
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
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
        </View>
      </View>
    </Modal>
  );
};
