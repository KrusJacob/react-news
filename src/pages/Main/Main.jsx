import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getCatagories, getNews } from "../../api/ApiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useDebounce } from "../../helpers/hooks/useDebounce";

const Main = () => {
  const [news, setNews] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLodaing, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [keywords, setKeywords] = useState("");
  const totalPages = 10;
  const pageSize = 10;

  const debouncedKeywords = useDebounce(keywords);

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const res = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "All" ? null : selectedCategory,
        keywords: debouncedKeywords,
      });
      setNews(res.news);
      setIsLoading(false);
    } catch (error) {
      console.error();
    }
  };

  const fetchCategories = async (currentPage) => {
    try {
      const res = await getCatagories();
      setCategories(["All", ...res.categories]);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage, selectedCategory, debouncedKeywords]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <Search keywords={keywords} setKeywords={setKeywords} />

      {news.length > 0 && !isLodaing ? <NewsBanner item={news[0]} /> : <Skeleton type="banner" count={1} />}

      <Pagination
        totalPages={totalPages}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
      />
      {!isLodaing ? <NewsList news={news} /> : <Skeleton count={10} type="item" />}
      <Pagination
        totalPages={totalPages}
        handlePageClick={handlePageClick}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        currentPage={currentPage}
      />
    </main>
  );
};

export default Main;
