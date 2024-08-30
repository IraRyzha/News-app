import { useDebounce } from "@/shared/hooks/useDebounce.js";
import { useGetNewsQuery } from "@/entities/news/api/newsApi.js";
import styles from "./styles.module.css";
import { useAppSelector } from "@/app/appStore.js";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi.js";
import NewsFilters from "@/widgets/news/ui/NewsFilters/NewsFilters.js";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination.js";

function NewsByFilters() {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const { data } = useGetCategoriesQuery(null);

  const debouncedKeywords = useDebounce(filters.keywords as string, 2000);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} categories={data?.categories || []} />
      <NewsListWithPagination
        filters={filters}
        news={news}
        isLoading={isLoading}
      />
    </section>
  );
}

export default NewsByFilters;
