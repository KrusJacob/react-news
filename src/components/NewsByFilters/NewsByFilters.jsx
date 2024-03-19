import React from "react";
import styles from "./styles.module.css";
import NewsList from "../NewsList/NewsList";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";
import NewsFilters from "../NewsFilters/NewsFilters";
import { useDebounce } from "../../helpers/hooks/useDebounce";
import { useFilters } from "../../helpers/hooks/useFilters";
import { useFetch } from "../../helpers/hooks/useFetch";
import { getNews } from "../../api/ApiNews";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper";

const NewsByFilters = () => {
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
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <PaginationWrapper
        top
        bottom
        totalPages={TOTAL_PAGES}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currentPage={filters.page_number}
      >
        <NewsList news={data?.news} isLodaing={isLodaing} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
