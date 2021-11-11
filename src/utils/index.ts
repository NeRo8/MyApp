import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

const scaleWidth = width / BASE_WIDTH;
const scaleHeight = height / BASE_HEIGHT;

export const scale = Math.min(scaleWidth, scaleHeight);

export const scaledSize = (size: number) => Math.ceil(size * scale);
