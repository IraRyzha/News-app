import BannersList from "../BannersList/BannersList";
import styles from "./styles.module.css";

function LatestNews({ banners, isLoading }) {
  // console.log("banners in LatestNews");
  // console.log(banners);
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
}

export default LatestNews;
