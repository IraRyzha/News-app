import styles from "./styles.module.css";

function Categories({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className={styles.categories}>
      <button
        onClick={() => setSelectedCategory(null)}
        className={selectedCategory === null ? styles.active : styles.item}
      >
        All
      </button>
      {categories.map((category) => {
        return (
          <button
            key={category}
            onClick={() =>
              setSelectedCategory(category === "All" ? null : category)
            }
            className={
              category === selectedCategory ? styles.active : styles.item
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
