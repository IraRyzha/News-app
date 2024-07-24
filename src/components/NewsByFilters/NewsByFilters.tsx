import { getNews } from "../../api/apiNews.js";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants.js";
import { useDebounce } from "../../helpers/hooks/useDebounce.js";
import { useFetch } from "../../helpers/hooks/useFetch.js";
import { useFilters } from "../../helpers/hooks/useFilters.js";
import NewsFilters from "../NewsFilters/NewsFilters.js";
import NewsList from "../NewsList/NewsList.js";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.js";
import styles from "./styles.module.css";

function NewsByFilters() {
  const { filters, changeFilters } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 2000);

  const { data, isLoading, error } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords ? debouncedKeywords : null,
  });

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilters("page_number", filters.page_number - 1);
    }
  };

  const handleToPageNumber = (pageNumber) => {
    changeFilters("page_number", pageNumber);
  };

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilters("page_number", filters.page_number + 1);
    }
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />
      <PaginationWrapper
        top
        bottom
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        handlePreviousPage={handlePreviousPage}
        handleToPageNumber={handleToPageNumber}
        handleNextPage={handleNextPage}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
}

export default NewsByFilters;