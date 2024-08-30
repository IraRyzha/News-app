import { INews, NewsCard } from "@/entities/news/index.js";
import withSkeleton from "@/shared/hocs/withSkeleton.js";
import styles from "./styles.module.css";

interface Props {
  news?: INews[];
  type?: "item" | "banner";
  direction?: "column" | "row";
}

function NewsList({ news, type = "item" }: Props) {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return <NewsCard type={type} key={item.id} item={item} />;
      })}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
