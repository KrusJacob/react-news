import React from "react";

import styles from "./styles.module.css";
import BannersList from "../BannersList/BannersList";

const LatestNews = ({ banners, isLodaing }) => {
  return (
    <section className={styles.section}>
      <BannersList banners={banners} isLodaing={isLodaing} />
    </section>
  );
};

export default LatestNews;
