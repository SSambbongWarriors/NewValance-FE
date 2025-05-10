import { client } from './client';

export const getCategoryNews = async (
  categoryId: number,
  pageNum: number,
  pageSize: number
) => {
  try {
    const res = await client.get(
      `api/news/category/${categoryId}?page=${pageNum}&size=${pageSize}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getVideoData = async (type: string, newsId: number | null) => {
  try {
    if (newsId) {
      const res = await client.get(`/api/video/${type}/${newsId}`);
      return res.data;
    } else {
      const res = await client.get(`/api/video/${type}`);
      return res.data;
    }
  } catch (error) {
    console.error(error);
  }
};

export const postVideoComplete = async (newsId: number) => {
  try {
    console.log('시청 완료');
    const res = await client.post(`/api/video/${newsId}/complete`);
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};
