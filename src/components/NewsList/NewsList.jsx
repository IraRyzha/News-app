import withSkeleton from "../../helpers/hocs/withSkeleton";
import NewsItem from "../NewsItem/NewsItem";
import styles from "./styles.module.css";

function NewsList({ news, isLoading }) {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} isLoading={isLoading} item={item} />;
      })}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton(NewsList, "items", 10, "column");

export default NewsListWithSkeleton;
