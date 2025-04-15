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
