import NewsList from "@/widgets/news/ui/NewsList/NewsList.js";
import { TOTAL_PAGES } from "@/shared/constants/constants.js";
import { useDebounce } from "@/shared/hooks/useDebounce.js";
import { useGetNewsQuery } from "@/entities/news/api/newsApi.js";
import { setFilters } from "@/entities/news/model/newsSlice.js";
import styles from "./styles.module.css";
import { useAppDispatch, useAppSelector } from "@/app/appStore.js";
import { Pagination } from "@/features/pagination/index.js";
import NewsFilters from "../NewsFilters/NewsFilters.js";

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
      <Pagination
        top
        bottom
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        handlePreviousPage={handlePreviousPage}
        handleToPageNumber={handleToPageNumber}
        handleNextPage={handleNextPage}
      >
        <NewsList isLoading={isLoading} news={news} />
      </Pagination>
    </section>
  );
}

export default NewsByFilters;
