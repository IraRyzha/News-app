import { useAppDispatch } from "@/app/appStore.js";
import Categories from "@/features/category/ui/Categories/Categories.js";
import Search from "@/features/search/Search/Search.js";
import { useGetCategoriesQuery } from "@/entities/category/api/categoriesApi.js";
import { setFilters } from "@/entities/news/model/newsSlice.js";
import { Slider } from "@/features/slider/index.js";
import { IFilters } from "@/shared/interfaces/index.js";
import styles from "./styles.module.css";

interface Props {
  filters: IFilters;
}

function NewsFilters({ filters }: Props) {
  const { data } = useGetCategoriesQuery(null);

  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider step={200}>
          <Categories
            categories={data.categories}
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
