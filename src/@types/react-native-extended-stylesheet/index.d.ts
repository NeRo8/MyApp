declare module 'react-native-extended-stylesheet' {
  import {
    ViewStyle as RNViewStyle,
    TextStyle as RNTextStyle,
    StyleSheet,
    ImageStyle as RNImageStyle,
  } from 'react-native';
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  import NamedStyles = StyleSheet.NamedStyles;
  type ExtraStyles<T> = {
    '@media android'?: ExtendedStyle<T>;
    '@media ios'?: ExtendedStyle<T>;
  };

  type ElementStyle<T> = ExtendedStyle<T> & ExtraStyles<T>;

  export type ExtendedStyle<T> = {
    [Q in keyof T]: any;
  };

  export type ViewStyle = ExtendedStyle<RNViewStyle>;
  export type TextStyle = ExtendedStyle<RNTextStyle>;
  export type ImageStyle = ExtendedStyle<RNImageStyle>;
  export type CustomStyleValues = ITheme;

  function value(expr: ITheme, prop?: string): any;

  type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};

  function create<T extends NamedStyles<T> | NamedStyles<any>>(
    styles: T | NamedStyles<T> | {[P in keyof T]: ElementStyle<T[P]>},
  ): {[P in keyof T]: RegisteredStyle<T[P]>};

  function build(rawGlobalVars: any): void;
}

type RegisteredStyle<T> = number & {__registeredStyleBrand: T};

/** Declare custom style values here */

type ITheme = '$theme' | '$background';
