import { useTheme } from "@/app/providers/ThemeProvider";
import styles from "./styles.module.css";
import { IPaginationProps } from "../../model/types";

const PaginationButtons = ({
  totalPages,
  handlePageClick,
  handlePrevPage,
  handleNextPage,
  currentPage,
}: IPaginationProps) => {
  const { isDark } = useTheme();

  return (
    <div className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}>
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

export default PaginationButtons;
