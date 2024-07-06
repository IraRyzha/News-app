import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import Image from "../Image/Image";
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
        <p className={styles.extra}></p>
      </div>
    </li>
  );
}

export default NewsItem;
