import { formatTimeAgo } from "../../helpers/formatTimeAgo.js";
import { INews } from "../../interfaces/index.js";
import Image from "../Image/Image.js";
import styles from "./styles.module.css";

interface Props {
  item: INews;
}

function NewsBanner({ item }: Props) {
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
