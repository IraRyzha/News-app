import { INews, NewsCard } from "@/entities/news/index.js";
import withSkeleton from "@/shared/hocs/withSkeleton.js";
import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  news?: INews[];
  type?: "item" | "banner";
  direction?: "column" | "row";
  viewNews?: (news: INews) => ReactNode;
}

function NewsList({ news, type = "item", viewNews }: Props) {
  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => {
        return (
          <NewsCard type={type} key={item.id} item={item} viewNews={viewNews} />
        );
      })}
    </ul>
  );
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10);

export default NewsListWithSkeleton;
