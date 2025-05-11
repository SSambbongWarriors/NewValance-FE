import AsyncStorage from '@react-native-async-storage/async-storage';
import { atom } from 'recoil';

export interface UserType {
  username: string;
  profileImgUrl: string;
}

export const userState = atom<UserType | null>({
  key: 'userState',
  default: null,
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const load = async () => {
        const saved = await AsyncStorage.getItem('user');
        if (saved) {
          setSelf(JSON.parse(saved));
        }
      };
      load();

      onSet((newUser) => {
        if (newUser === null) {
          AsyncStorage.removeItem('user');
        } else {
          AsyncStorage.setItem('user', JSON.stringify(newUser));
        }
      });
    },
  ],
});
