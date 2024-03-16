import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/ApiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLodaing, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  const pageSize = 10;

  const fetchNews = async (currentPage) => {
    try {
      setIsLoading(true);
      const res = await getNews(currentPage, pageSize);
      setNews(res.news);
      setIsLoading(false);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, [currentPage]);

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
