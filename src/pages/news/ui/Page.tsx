import { useAppSelector } from "@/app/appStore.js";
import NewsDetails from "@/entities/news/ui/NewsDetails/NewsDetails.js";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function NewsPage() {
  const currentNews = useAppSelector((state) => state.news.currentNews);

  if (!currentNews) {
    return (
      <div>
        <h1>Cannot find news</h1>
        <Link to={"/"}>
          <p>Go to main page</p>
        </Link>
      </div>
    );
  }

  return (
    <main className={styles.news}>
      <h1>{currentNews.title}</h1>

      <NewsDetails item={currentNews} />
    </main>
  );
}

export default NewsPage;
