import { useRecoilState } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserType, userState } from '../store/userState';

const STORAGE_KEY = 'user';

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);

  // const loadUser = async () => {
  //   const stored = await AsyncStorage.getItem(STORAGE_KEY);
  //   if (stored) {
  //     setUser(JSON.parse(stored));
  //   }
  // };

  const saveUser = (newUser: UserType) => {
    setUser(newUser);
  };

  const clearUser = async () => {
    setUser(null);
  };

  return {
    user,
    saveUser,
    clearUser,
  };
};
