import { client } from './client';

export const getUserProfile = async () => {
  try {
    const res = await client.get('/api/profile');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getWeekViewData = async () => {
  try {
    const res = await client.get('/api/profile/week');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
