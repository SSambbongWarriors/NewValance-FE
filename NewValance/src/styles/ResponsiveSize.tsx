import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

const DEFAULT_WIDTH = 375;
const DEFAULT_HEIGHT = 812;

export const wp = (width: number) => {
  const per = (width / DEFAULT_WIDTH) * 100;
  return responsiveScreenWidth(per);
};

export const hp = (height: number) => {
  const per = (height / DEFAULT_HEIGHT) * 100;
  return responsiveScreenHeight(per);
};
