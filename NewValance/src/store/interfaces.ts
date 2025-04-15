export interface NewsData {
  articleId: number;
  title: string;
  thumbnailUrl: string;
}

export interface NewsCategory {
  categoryId: number;
  categoryName: string;
  newsList: NewsData[];
}

export interface Category {
  id: number;
  name: string;
}
