import React from "react";
import styles from "./styles.module.css";
import Categories from "../Categories/Categories";
import Search from "../Search/Search";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getCatagories } from "../../api/ApiNews";

const NewsFilters = ({ filters, changeFilter }) => {
  const { data: dateCategories } = useFetch(getCatagories);

  return (
    <div className={styles.filters}>
      {dateCategories ? (
        <Categories
          categories={dateCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}
      <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter("keywords", keywords)} />
    </div>
  );
};

export default NewsFilters;
