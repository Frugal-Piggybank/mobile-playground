import React from 'react';
import { KeyboardTypeOptions, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { PLATINUM } from '../../../styles/variables';
import TextStyles from '../../../styles/text';
import FormStyles from '../../../styles/form';
import DefaultLabel from './default-label';

interface DefaultTextInputProps {
  name: string;
  value: any;
  onChangeText?: (name: string, value: string) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  keyBoardType?: KeyboardTypeOptions;
  isPassword?: boolean;
  autoCapitalize?: 'words' | 'none' | 'sentences' | 'characters';
  label?: string;
  labelStyles?: any[];
  textStyles?: any[];
}

const DefaultTextInput: React.FC<DefaultTextInputProps> = ({
  name,
  value,
  placeholder,
  placeholderTextColor = PLATINUM,
  onChangeText,
  keyBoardType = 'default',
  isPassword = false,
  autoCapitalize = 'words',
  label,
  labelStyles,
  textStyles,
}) => (
  <>
    <View>
      {label && <DefaultLabel label={label} labelStyles={labelStyles} />}
      <TextInput
        value={value}
        style={[FormStyles.textInput, TextStyles.body, textStyles]}
        onChangeText={(newVal) => onChangeText(name, newVal)}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyBoardType}
        secureTextEntry={isPassword}
        autoCapitalize={autoCapitalize}
      />
    </View>
  </>
);

export default DefaultTextInput;
