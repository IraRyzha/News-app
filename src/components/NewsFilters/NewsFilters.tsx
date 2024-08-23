import { getCategories } from "../../api/apiNews.js";
import { useFetch } from "../../helpers/hooks/useFetch.js";
import { CategoriesApiResponse, IFilters } from "../../interfaces/index.js";
import Categories from "../Categories/Categories.js";
import Search from "../Search/Search.js";
import Slider from "../Slider/Slider.js";
import styles from "./styles.module.css";

interface Props {
  filters: IFilters;
  changeFilters: (key: string, value: string | number | null) => void;
}

function NewsFilters({ filters, changeFilters }: Props) {
  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );

  return (
    <div className={styles.filters}>
      {dataCategories ? (
        <Slider step={200}>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilters("category", category)
            }
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilters("keywords", keywords)}
      />
    </div>
  );
}

export default NewsFilters;
