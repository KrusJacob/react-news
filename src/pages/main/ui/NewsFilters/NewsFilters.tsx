import { useAppDispatch } from "@/app/appStore";
import Categories from "@/features/category/ui/Categories";
import Search from "@/features/search/ui/Search";
import Slider from "@/features/slider/ui/Slider";
import { IFilters } from "@/shared/interfaces";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";
import { useGetCatagoriesQuery } from "@/entities/category/api/categoriesApi";

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
