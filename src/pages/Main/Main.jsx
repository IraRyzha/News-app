import { useState } from "react";
import { getCategories, getNews } from "../../api/apiNews";
import Categories from "../../components/Categories/Categories";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";
import styles from "./styles.module.css";

function Main() {
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

  const { data: dataCategories } = useFetch(getCategories);

  const handlePreviousPage = () => {
    if (filters.page_number > 1) {
      changeFilters("page_number", filters.page_number + 1);
    }
  };

  const handleToPageNumber = (pageNumber) => {
    changeFilters("page_number", pageNumber);
  };

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilters("page_number", filters.page_number - 1);
    }
  };

  return (
    <main className={styles.main}>
      {dataCategories ? (
        <Categories
          categories={["All", ...dataCategories.categories]}
          selectedCategory={filters.category}
          setSelectedCategory={(category) =>
            changeFilters("category", category)
          }
        />
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters("keywords", keywords)}
      />
      <NewsBanner
        isLoading={isLoading}
        item={data && data.news && data?.news[0]}
      />
      <Pagination
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        handlePreviousPage={handlePreviousPage}
        handleToPageNumber={handleToPageNumber}
        handleNextPage={handleNextPage}
      />
      <NewsList isLoading={isLoading} news={data && data.news && data?.news} />
      <Pagination
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        handlePreviousPage={handlePreviousPage}
        handleToPageNumber={handleToPageNumber}
        handleNextPage={handleNextPage}
      />
    </main>
  );
}

export default Main;
