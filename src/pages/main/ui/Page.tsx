import LatestNews from "./LatestNews/LatestNews.js";
import NewsByFilters from "./NewsByFilters/NewsByFilters.js";
import styles from "./styles.module.css";

function MainPage() {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
}

export default MainPage;
