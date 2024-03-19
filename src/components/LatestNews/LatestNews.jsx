import React from "react";

import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList";
import { getLatestNews } from "../../api/ApiNews";
import { useFetch } from "../../helpers/hooks/useFetch";

const LatestNews = () => {
  const { data, isLodaing } = useFetch(getLatestNews);

  return (
    <section className={styles.section}>
      <BannersList banners={data && data.news} isLodaing={isLodaing} />
    </section>
  );
};

export default LatestNews;
