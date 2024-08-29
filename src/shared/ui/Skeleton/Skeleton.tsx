import { SkeletonType, DirectionType } from "@/shared/interfaces/index.js";
import styles from "./styles.module.css";

interface Props {
  count?: number;
  type?: SkeletonType;
  direction?: DirectionType;
}

function Skeleton({ count = 1, type = "banner", direction = "column" }: Props) {
  const itemsArray = [...Array.from({ length: count }, (_, i) => i + 1)];
  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === "column" ? styles.columnList : styles.rowList
          }
        >
          {itemsArray.map((_, index) => {
            return (
              <li
                key={index}
                className={type === "banner" ? styles.banner : styles.items}
              ></li>
            );
          })}
        </ul>
      ) : (
        <li className={type === "banner" ? styles.banner : styles.items}></li>
      )}
    </>
  );
}

export default Skeleton;
