import React, {memo} from 'react';

import {
  View,
  TextInput,
  TextInputProps,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';

import styles from './styles';

interface InputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

const Input = (props: InputProps) => {
  const {containerStyle, inputContainerStyle, inputStyle, ...inputProps} =
    props;
  return (
    <View style={styles.containerStyle}>
      <View style={styles.inputContainerStyle}>
        <TextInput style={styles.inputStyle} {...inputProps} />
      </View>
    </View>
  );
};

export default memo(Input);
