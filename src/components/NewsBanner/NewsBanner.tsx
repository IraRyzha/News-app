import { formatTimeAgo } from "../../helpers/formatTimeAgo.js";
import Image from "../Image/Image.js";
import styles from "./styles.module.css";

function NewsBanner({ item }) {
  // console.log("banner in NewBanner");
  // console.log(item);
  return (
    <div className={styles.banner}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item?.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item?.published)} by {item?.author}
      </p>
    </div>
  );
}

export default NewsBanner;
