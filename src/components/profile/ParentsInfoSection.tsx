import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';
import { InputField } from './InputField';
import UserIconSvg from '../../assets/icons/userIcon.svg';
import HeartIconSvg from '../../assets/icons/heartIcon.svg';

interface ParentsInfoSectionProps {
  parentName: string;
  setParentName: (val: string) => void;
  relationship: string;
  setRelationship: (val: string) => void;
  parentEmail: string;
  setParentEmail: (val: string) => void;
  parentMobile: string;
  setParentMobile: (val: string) => void;
}

export const ParentsInfoSection: React.FC<ParentsInfoSectionProps> = ({
  parentName,
  setParentName,
  relationship,
  setRelationship,
  parentEmail,
  setParentEmail,
  parentMobile,
  setParentMobile,
}) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.sectionHeader}>Parents Information</AppText>

      <InputField
        value={parentName}
        onChangeText={setParentName}
        placeholder="Parent Name"
        icon={<UserIconSvg width={18} height={18} color={theme.colors.darkText} />}
      />

      <InputField
        label="Relationship with user"
        value={relationship}
        onChangeText={setRelationship}
        placeholder="Relationship"
        icon={<HeartIconSvg width={18} height={18} color={theme.colors.darkText} />}
      />

      <InputField
        label="Email Id"
        value={parentEmail}
        onChangeText={setParentEmail}
        placeholder="Parent Email"
      />

      <InputField
        label="Mobile Number"
        value={parentMobile}
        onChangeText={setParentMobile}
        placeholder="Parent Mobile Number"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  sectionHeader: {
    fontFamily: theme.fonts.bold,
    fontSize: 14,
    color: theme.colors.dark,
    marginBottom: 12,
  },
});
