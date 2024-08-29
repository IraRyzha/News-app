import { INews } from "@/entities/news/index.js";
import NewsItem from "@/entities/news/ui/NewsItem/NewsItem.js";
import withSkeleton from "@/shared/hocs/withSkeleton.js";
import styles from "./styles.module.css";

interface Props {
  news?: INews[];
}

function NewsList({ news }: Props) {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton<Props>(
  NewsList,
  "items",
  10,
  "column"
);

export default NewsListWithSkeleton;
