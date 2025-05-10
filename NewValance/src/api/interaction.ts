import { client } from './client';

export const getCommentList = async (newsId: number, page?: number) => {
  try {
    const res = await client.get(
      `api/comments/${newsId}?page=${page || 0}&size=10`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const postComment = async (newsId: number, content: string) => {
  try {
    const res = await client.post(`api/comments/${newsId}`, { content });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteComment = async (newsId: number, commentId: number) => {
  try {
    const res = await client.delete(`api/comments/${newsId}/${commentId}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const postLike = async (newsId: number) => {
  try {
    const res = await client.post(`api/video/${newsId}/like`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
