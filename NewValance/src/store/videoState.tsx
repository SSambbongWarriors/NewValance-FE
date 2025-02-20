import { atom } from 'recoil';

export const commentState = atom({
  key: 'commentState',
  default: false,
});

export const themeState = atom({
  key: 'themeState',
  default: false,
});
