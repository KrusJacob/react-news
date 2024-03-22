import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList";
import { getLatestNews } from "../../api/ApiNews";
import { useFetch } from "../../helpers/hooks/useFetch";
import { NewsApiResponse } from "../../interfaces";

const LatestNews = () => {
  const { data, isLodaing } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLodaing={isLodaing} />
    </section>
  );
};

export default LatestNews;
