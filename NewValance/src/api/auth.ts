import AsyncStorage from '@react-native-async-storage/async-storage';
import { client } from './client';

interface SignInProps {
  username: string;
  tags: string[];
}

export const getIsDuplicated = async (name: string) => {
  try {
    const res = await client.post('api/user/check-username', {
      username: name,
    });
    //console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const signIn = async ({ username, tags }: SignInProps) => {
  try {
    //console.log({ username, tags });
    const res = await client.patch('/api/user/onboarding', {
      username: username,
      tags: tags,
    });
    //console.log(res);
    return res;
  } catch (error) {
    console.error(error);
  }
};
