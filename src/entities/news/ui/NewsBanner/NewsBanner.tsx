import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo.js";
import { INews } from "../../index.js";
import Image from "@/shared/ui/Image/Image.js";
import styles from "./styles.module.css";

interface Props {
  item: INews;
}

function NewsBanner({ item }: Props) {
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
