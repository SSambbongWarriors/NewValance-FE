import { client } from './client';

export const getSearchResult = async (query: string) => {
  try {
    const res = await client.get(`api/search?query=${query}`);
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getSearchVideo = async (articleId: number) => {
  try {
    const res = await client.get(`api/search/${articleId}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
