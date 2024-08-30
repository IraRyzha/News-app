import { useAppDispatch } from "@/app/appStore.js";
import { setFilters } from "@/entities/news/model/newsSlice.js";
import { TOTAL_PAGES } from "@/shared/constants/constants.js";
import { IFilters } from "@/shared/interfaces/index.js";

export const usePaginationNews = (filters: IFilters) => {
  const dispatch = useAppDispatch();

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 })
      );
    }
  };

  const handleToPageNumber = (pageNumber: number) => {
    dispatch(setFilters({ key: "page_number", value: pageNumber }));
  };

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 })
      );
    }
  };

  return { handlePreviousPage, handleToPageNumber, handleNextPage };
};
