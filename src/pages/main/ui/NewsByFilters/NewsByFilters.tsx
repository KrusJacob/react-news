import { useAppSelector } from "@/app/appStore";
import styles from "./styles.module.css";
import { useGetCatagoriesQuery } from "@/entities/category/api/categoriesApi";
import { NewsFilters } from "@/widgets/filters";
import NewsListWithPagination from "../NewsListWithPagination/NewsListWithPagination";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { useDebounce } from "@/shared/hooks/useDebounce";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);
  const { data: dateCategories } = useGetCatagoriesQuery(null);

  const debouncedKeywords = useDebounce(filters.keywords);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <section className={styles.section}>
      <NewsFilters categories={dateCategories?.categories || []} filters={filters} />
      <NewsListWithPagination isLoading={isLoading} news={news} filters={filters} />
    </section>
  );
};

export default NewsByFilters;
