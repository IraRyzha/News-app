import { categoriesApi } from "@/entities/category/api/categoriesApi.js";
import { newsApi } from "@/entities/news/api/newsApi.js";
import newsReducer from "@/entities/news/model/newsSlice.js";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  news: newsReducer,
  [newsApi.reducerPath]: newsApi.reducer,
  [categoriesApi.reducerPath]: categoriesApi.reducer,
});
