import styles from "./styles.module.css";

function Skeleton({ count = 1, type = "banner" }) {
  const itemsArray = [...Array.from({ length: count }, (_, i) => i + 1)];
  return (
    <>
      {count > 1 ? (
        <ul className={styles.list}>
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
