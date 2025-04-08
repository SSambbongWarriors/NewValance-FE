import { client } from './client';

interface CategoryNewsProps {
  categoryId: number;
  pageNum: number;
  pageSize: number;
}

export const getCategoryNews = async ({
  categoryId,
  pageNum,
  pageSize,
}: CategoryNewsProps) => {
  try {
    const res = await client.get(
      `api/news/category/${categoryId}?page=${pageNum}&size=${pageSize}`
    );
    console.log(res);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
