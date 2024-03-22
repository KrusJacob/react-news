import styles from "./styles.module.css";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCatagories } from "../../api/ApiNews";
import Slider from "../Slider/Slider";
import { IFilters, СategoriesApiResponse } from "../../interfaces";

interface Props {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
  const { data: dateCategories } = useFetch<СategoriesApiResponse, null>(getCatagories);

  return (
    <div className={styles.filters}>
      {dateCategories ? (
        <Slider step={180}>
          <Categories
            categories={dateCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => changeFilter("category", category)}
          />
        </Slider>
      ) : null}

      <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter("keywords", keywords)} />
    </div>
  );
};

export default NewsFilters;
