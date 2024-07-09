import styles from "./styles.module.css";

function Categories({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <div className={styles.categories}>
      {categories.map((category) => {
        return (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
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
