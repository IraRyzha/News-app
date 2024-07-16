import { getLatestNews } from "../../api/apiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";

function LatestNews() {
  // console.log("banners in LatestNews");
  // console.log(banners);

  const { data, isLoading, error } = useFetch(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
