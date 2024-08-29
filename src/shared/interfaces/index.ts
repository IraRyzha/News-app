import { CategoriesType } from "@/entities/category/index.js";

export enum Status {
  SUCCESS = "success",
  ERROR = "error",
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoriesType | null;
  keywords: string;
}

export type ParamsType = Partial<IFilters>;
export type SkeletonType = "banner" | "items";
export type DirectionType = "row" | "column";
