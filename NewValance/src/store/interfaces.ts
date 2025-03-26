export interface NewsData {
  id: number;
  title: string;
  thumbnail: string;
}

export interface NewsCategory {
  category: string;
  data: NewsData[];
}
