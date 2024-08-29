import BannersList from "@/widgets/news/ui/BannersList/BannersList.js";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi.js";
import styles from "./styles.module.css";

function LatestNews() {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
