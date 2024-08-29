import { CategoriesType } from "@/entities/category/index.js";
import { ForwardedRef, forwardRef } from "react";
import styles from "./styles.module.css";

interface Props {
  categories: CategoriesType[];
  selectedCategory: CategoriesType | null;
  setSelectedCategory: (category: CategoriesType | null) => void;
}

const Categories = forwardRef(
  (
    { categories, selectedCategory, setSelectedCategory }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} className={styles.categories}>
        <button
          onClick={() => setSelectedCategory(null)}
          className={selectedCategory === null ? styles.active : styles.item}
        >
          All
        </button>
        {categories?.map((category) => {
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
);

export default Categories;
