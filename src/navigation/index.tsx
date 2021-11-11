import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Auth from '@screens/Auth';
import SignIn from '@screens/Auth/SignIn';
import SignUp from '@screens/Auth/SignUp';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
