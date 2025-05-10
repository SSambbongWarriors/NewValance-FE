import { atom } from 'recoil';

export interface UserType {
  username: string;
  profileImgUrl: string;
}

export const userState = atom<UserType | null>({
  key: 'userState',
  default: null,
});
