import { getLatestNews } from "../../api/apiNews.js";
import { useFetch } from "../../helpers/hooks/useFetch.js";
import { NewsApiResponse } from "../../interfaces/index.js";
import BannersList from "../BannersList/BannersList.js";
import styles from "./styles.module.css";

function LatestNews() {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
