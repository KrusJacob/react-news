import React from "react";

import styles from "./styles.module.css";
import { formatDate } from "../../helpers/formatDate";

const Search = ({ keywords, setKeywords }) => {
  return (
    <div className={styles.search}>
      <input
        type="search"
        value={keywords}
        onChange={(e) => setKeywords(e.target.value)}
        className={styles.input}
        placeholder="search..."
      />
    </div>
  );
};

export default Search;
