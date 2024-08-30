import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi.js";
import styles from "./styles.module.css";
import { NewsList } from "@/widgets/news/ui/index.js";

function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <NewsList
        type="banner"
        direction="row"
        news={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
}

export default LatestNews;
