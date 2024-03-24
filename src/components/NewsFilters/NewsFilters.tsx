import styles from "./styles.module.css";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import Slider from "../Slider/Slider";
import { IFilters } from "../../interfaces";
import { useGetCatagoriesQuery } from "../../services/newsApi";
import { useAppDispatch } from "../../store";
import { setFilters } from "../../store/slices/newsSlice";

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { data: dateCategories } = useGetCatagoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {dateCategories ? (
        <Slider step={180}>
          <Categories
            categories={dateCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) => dispatch(setFilters({ key: "category", value: category }))}
          />
        </Slider>
      ) : null}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => dispatch(setFilters({ key: "keywords", value: keywords }))}
      />
    </div>
  );
};

export default NewsFilters;
