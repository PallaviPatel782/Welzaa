import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { AppText } from '../common';
import { theme } from '../../config/theme';

interface InputFieldProps {
  label?: string;
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  editable?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  icon,
  editable = true,
}) => {
  return (
    <View style={styles.container}>
      {label && <AppText style={styles.label}>{label}</AppText>}
      <View style={[styles.inputBox, !editable && styles.disabledBox]}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={theme.colors.gray}
          editable={editable}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontFamily: theme.fonts.semibold,
    fontSize: 11,
    color: theme.colors.greenIcon,
    marginBottom: 4,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    borderRadius: 12,
    height: 42,
    paddingHorizontal: 14,
    backgroundColor: theme.colors.white,
  },
  disabledBox: {
    backgroundColor: theme.colors.bgLight,
  },
  iconContainer: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontFamily: theme.fonts.medium,
    fontSize: 14,
    color: theme.colors.dark,
    paddingVertical: 0,
  },
});
