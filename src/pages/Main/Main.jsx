import { getNews } from "../../api/apiNews";
import LatestNews from "../../components/LatestNews/LatestNews";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters";
import { PAGE_SIZE } from "../../constants/constants";
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

  console.log(data);

  return (
    <main className={styles.main}>
      <LatestNews banners={data && data.news} isLoading={isLoading} />
      <NewsByFilters
        news={data?.news}
        isLoading={isLoading}
        filters={filters}
        changeFilters={changeFilters}
      />
    </main>
  );
}

export default Main;
