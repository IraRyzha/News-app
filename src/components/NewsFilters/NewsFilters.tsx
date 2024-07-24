import { getCategories } from "../../api/apiNews.js";
import { useFetch } from "../../helpers/hooks/useFetch.js";
import Categories from "../Categories/Categories.js";
import Search from "../Search/Search.jsx";
import Slider from "../Slider/Slider.jsx";
import styles from "./styles.module.css";

function NewsFilters({ filters, changeFilters }) {
  const { data: dataCategories } = useFetch(getCategories);

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
