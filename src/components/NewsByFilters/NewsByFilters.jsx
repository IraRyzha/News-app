import { TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import styles from "./styles.module.css";

function NewsByFilters({ news, isLoading, filters, changeFilters }) {
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
      <Pagination
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        handlePreviousPage={handlePreviousPage}
        handleToPageNumber={handleToPageNumber}
        handleNextPage={handleNextPage}
      />
      <NewsList isLoading={isLoading} news={news && news} />
      <Pagination
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        handlePreviousPage={handlePreviousPage}
        handleToPageNumber={handleToPageNumber}
        handleNextPage={handleNextPage}
      />
    </section>
  );
}

export default NewsByFilters;
