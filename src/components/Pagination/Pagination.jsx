import React from "react";
import styles from "./styles.module.css";

const Pagination = ({ totalPages, handlePageClick, handlePrevPage, handleNextPage, currentPage }) => {
  return (
    <div className={styles.pagination}>
      <button disabled={currentPage <= 1} onClick={handlePrevPage} className={styles.arrow}>
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          const numberPage = index + 1;
          return (
            <button
              disabled={numberPage === currentPage}
              onClick={() => handlePageClick(numberPage)}
              className={styles.pageNumber}
              key={index}
            >
              {numberPage}
            </button>
          );
        })}
      </div>
      <button disabled={currentPage >= totalPages} onClick={handleNextPage} className={styles.arrow}>
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
