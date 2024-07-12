import NewsItemWithSkeleton from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

function NewsList({ news, isLoading }) {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return (
          <NewsItemWithSkeleton
            key={item.id}
            isLoading={isLoading}
            item={item}
          />
        );
      })}
    </ul>
  );
}

export default NewsList;
