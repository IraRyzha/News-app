import { CategoriesType } from "@/entities/category/index.js";
import { Status } from "@/shared/interfaces/index.js";

export interface INews {
  author: string;
  category: CategoriesType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: Status;
}
