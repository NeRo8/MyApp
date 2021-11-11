import React, {useEffect, useState} from 'react';

import {Button, View, Text} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import SplashScreen from 'react-native-splash-screen';

import Input from '@components/inputs/Input';
import SafeContainer from '@components/containers/SafeContainer';

import styles from './styles';

export default function Auth() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  if (loading) return <View />;

  return <SafeContainer></SafeContainer>;
}
