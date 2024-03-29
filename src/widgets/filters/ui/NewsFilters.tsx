import { useAppDispatch } from "@/app/appStore";
import Categories from "@/features/category/ui/Categories";
import Search from "@/features/search/ui/Search";
import Slider from "@/features/slider/ui/Slider";
import { IFilters } from "@/shared/interfaces";
import { setFilters } from "@/entities/news/model/newsSlice";
import styles from "./styles.module.css";
import { CategoryType } from "@/entities/category";

interface Props {
  filters: IFilters;
  categories: CategoryType[];
}

const NewsFilters = ({ filters, categories }: Props) => {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {categories ? (
        <Slider step={180}>
          <Categories
            categories={categories}
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
