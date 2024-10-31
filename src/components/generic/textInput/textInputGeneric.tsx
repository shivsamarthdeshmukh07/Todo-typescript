import React from 'react';
import {TextInput} from 'react-native';
import Styles from './styles';

type TextInputProps = {
  placeHolder: string;
  onChangeText: (text: string) => void;
  style: object;
  value: any;
};

const TextInputGeneric = ({
  placeHolder,
  onChangeText,
  style,
  value,
}: TextInputProps) => {
  return (
    <TextInput
      style={[Styles.inputText, style]}
      placeholder={placeHolder}
      onChangeText={onChangeText}
      multiline={true}
      placeholderTextColor={'white'}
      value={value}
    />
  );
};

export default TextInputGeneric;
