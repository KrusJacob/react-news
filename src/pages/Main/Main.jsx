import { useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getCatagories, getNews } from "../../api/ApiNews";
import NewsList from "../../components/NewsList/NewsList";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import { useFetch } from "../../helpers/hooks/useFetch";
import { useFilters } from "../../helpers/hooks/useFilters";

const Main = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords);

  const { data, isLodaing } = useFetch(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const { data: dateCategories } = useFetch(getCatagories);

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <main className={styles.main}>
      {dateCategories ? (
        <Categories
          categories={dateCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      ) : null}
      <Search keywords={filters.keywords} setKeywords={(keywords) => changeFilter("keywords", keywords)} />

      <NewsBanner item={data && data.news && data.news[0]} isLodaing={isLodaing} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
      />

      <NewsList news={data?.news} isLodaing={isLodaing} />

      <Pagination
        totalPages={TOTAL_PAGES}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
      />
    </main>
  );
};

export default Main;
