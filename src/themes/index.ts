import EStyleSheet from 'react-native-extended-stylesheet';

import LightTheme from './light';
import DarkTheme from './dark';

export type THEME_MODE = 'light' | 'dark';

export const onChangeTheme = (theme: THEME_MODE) => {
  switch (theme) {
    case 'dark':
      EStyleSheet.build(DarkTheme);
      break;
    case 'light':
    default:
      EStyleSheet.build(LightTheme);
  }
};

export const initTheme = () => EStyleSheet.build(LightTheme);
