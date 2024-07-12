import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import withSkeleton from "../../helpers/hocs/withSkeleton";
import styles from "./styles.module.css";

function NewsItem({ item }) {
  return (
    <li className={styles.item}>
      <div
        className={styles.wrapper}
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
}

const NewsItemWithSkeleton = withSkeleton(NewsItem, "item", 10);

export default NewsItemWithSkeleton;
