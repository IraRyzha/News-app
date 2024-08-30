import { useAppDispatch } from "@/app/appStore.js";
import Categories from "@/features/category/ui/Categories/Categories.js";
import Search from "@/features/search/Search/Search.js";
import { setFilters } from "@/entities/news/model/newsSlice.js";
import { Slider } from "@/features/slider/index.js";
import { IFilters } from "@/shared/interfaces/index.js";
import styles from "./styles.module.css";
import { CategoriesType } from "@/entities/category/index.js";

interface Props {
  filters: IFilters;
  categories: CategoriesType[];
}

function NewsFilters({ filters, categories }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider step={200}>
          <Categories
            categories={categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
}

export default NewsFilters;
