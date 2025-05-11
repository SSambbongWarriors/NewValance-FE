import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'recoil';

export const commentState = atom({
  key: 'commentState',
  default: false,
});

export const themeState = atom({
  key: 'themeState',
  default: false,
});

export const selectedThemeState = atom({
  key: 'selectedThemeState',
  default: 0,
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      AsyncStorage.getItem('selectedTheme').then((savedTheme) => {
        if (savedTheme) {
          setSelf(parseInt(savedTheme));
        }
      });

      onSet((newTheme) => {
        AsyncStorage.setItem('selectedTheme', newTheme.toString());
      });
    },
  ],
});
