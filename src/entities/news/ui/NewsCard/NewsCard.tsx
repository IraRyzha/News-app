import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo.js";
import Image from "@/shared/ui/Image/Image.js";
import { INews } from "../../index.js";
import styles from "./styles.module.css";

interface Props {
  item: INews;
  type?: "item" | "banner";
}

function NewsCard({ item, type = "item" }: Props) {
  return (
    <li className={`${styles.card} ${type === "banner" && styles.banner}`}>
      {type === "item" ? (
        <div
          className={styles.wrapper}
          style={{ backgroundImage: `url(${item?.image})` }}
        ></div>
      ) : (
        <Image image={item?.image} />
      )}

      <div className={styles.info}>
        <h3 className={styles.title}>{item?.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item?.published)} by {item?.author}
        </p>
      </div>
    </li>
  );
}

export default NewsCard;
