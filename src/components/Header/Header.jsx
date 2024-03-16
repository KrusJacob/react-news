import React from "react";

import styles from "./styles.module.css";
import { formatDate } from "../../helpers/formatDate";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>REACT NEWS</h1>
      <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  );
};

export default Header;
