import React from "react";
import styles from "./styles.module.css";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCatagories } from "../../api/ApiNews";
import Slider from "../Slider/Slider";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dateCategories } = useFetch(getCatagories);

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
