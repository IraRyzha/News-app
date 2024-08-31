import { PAGE_SIZE } from "@/shared/constants/constants.js";
import { IFilters } from "@/shared/interfaces/index.js";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INews } from "./types.js";

export interface State {
  news: INews[];
  filters: IFilters;
  currentNews: INews | null;
}

const initialState: State = {
  news: [],
  currentNews: null,
  filters: {
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    setCurrentNews: (state, action: PayloadAction<INews>) => {
      state.currentNews = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: string | number | null }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setNews, setFilters, setCurrentNews } = newsSlice.actions;

export default newsSlice.reducer;
