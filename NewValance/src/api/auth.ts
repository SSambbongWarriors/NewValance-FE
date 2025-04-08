import { client } from './client';

interface SignInProps {
  username: string;
  tags: Array<string>;
}

export const SignIn = async ({ username, tags }: SignInProps) => {
  try {
    const res = await client.post('/api/user/onboarding', { username, tags });
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
