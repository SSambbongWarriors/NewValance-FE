import { client } from './client';

export const getHomeNews = async () => {
  try {
    const res = await client.get('api/news/home');
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getHomeBanner = async () => {
  try {
    const res = await client.get('api/news/banner');
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
