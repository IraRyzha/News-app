import styles from "./styles.module.css";

function Skeleton({ count = 1, type = "banner", direction = "column" }) {
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
                className={type === "banner" ? styles.banner : styles.item}
              ></li>
            );
          })}
        </ul>
      ) : (
        <li className={type === "banner" ? styles.banner : styles.item}></li>
      )}
    </>
  );
}

export default Skeleton;
