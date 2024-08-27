import { TOTAL_PAGES } from "../../constants/constants.js";
import { useDebounce } from "../../helpers/hooks/useDebounce.js";
import { useAppDispatch, useAppSelector } from "../../store/index.js";
import { useGetNewsQuery } from "../../store/services/newsApi.js";
import { setFilters } from "../../store/slices/newsSlice.js";
import NewsFilters from "../NewsFilters/NewsFilters.js";
import NewsList from "../NewsList/NewsList.js";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.js";
import styles from "./styles.module.css";

function NewsByFilters() {
  const dispatch = useAppDispatch();

  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords as string, 2000);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

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

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />
      <PaginationWrapper
        top
        bottom
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        handlePreviousPage={handlePreviousPage}
        handleToPageNumber={handleToPageNumber}
        handleNextPage={handleNextPage}
      >
        <NewsList isLoading={isLoading} news={news} />
      </PaginationWrapper>
    </section>
  );
}

export default NewsByFilters;
