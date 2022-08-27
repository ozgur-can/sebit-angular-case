export interface ITopic {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface IPost {
  id: number;
  category_id: number;
  title: string;
  description: string;
  date: string;
  author: string;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
  icon: string;
}
