import React, {PropsWithChildren} from 'react';

import {SafeAreaView, View} from 'react-native';

import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  safeContainerStyle: {
    flex: 1,
    backgroundColor: '$background',
  },
  containerStyle: {
    flex: 1,
    padding: 10,
  },
});

export default function SafeContainer(props: PropsWithChildren<any>) {
  return (
    <SafeAreaView style={styles.safeContainerStyle}>
      <View style={styles.containerStyle}>{props.children}</View>
    </SafeAreaView>
  );
}
