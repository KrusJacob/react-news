import { useEffect, useState } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getNews } from "../../api/ApiNews";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";

const Main = () => {
  const [news, setNews] = useState([]);
  const [isLodaing, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        const res = await getNews();
        setNews(res.news);
        setIsLoading(false);
      } catch (error) {
        console.error();
      }
    };
    fetchNews();
  }, []);

  return (
    <main className={styles.main}>
      {news.length > 0 && !isLodaing ? <NewsBanner item={news[0]} /> : <Skeleton type="banner" count={1} />}

      {!isLodaing ? <NewsList news={news} /> : <Skeleton count={10} type="item" />}
    </main>
  );
};

export default Main;
