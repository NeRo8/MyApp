import React, {useState} from 'react';

import {Button, View, SafeAreaView, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Input from '@components/inputs/Input';
import SafeContainer from '@components/containers/SafeContainer';

import {onChangeTheme} from '../../themes';

import styles from './styles';

export default function Auth() {
  const [loading, setLoading] = useState(false);

  const theme = EStyleSheet.value('$theme');

  const handleChangeTheme = () => {
    setLoading(true);

    onChangeTheme(theme === 'light' ? 'dark' : 'light');

    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  if (loading) return <View />;

  return (
    <SafeContainer>
      <View style={styles.topContainerStyle}>
        <Button onPress={handleChangeTheme} title="Change Theme" />
        <Text style={styles.titleStyle}>Some text</Text>
      </View>
      <View style={styles.centerContainerStyle}>
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter your email" />
        <Input placeholder="Enter your email" />
      </View>
      <View style={styles.bottomContainerStyle}></View>
    </SafeContainer>
  );
}
