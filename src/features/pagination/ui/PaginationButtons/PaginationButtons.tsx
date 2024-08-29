import { useTheme } from "@/app/providers/ThemeProvider.js";
import { IPaginationProps } from "../../model/types.js";
import styles from "./styles.module.css";

function PaginationButtons({
  totalPages,
  currentPage,
  handlePreviousPage,
  handleToPageNumber,
  handleNextPage,
}: IPaginationProps) {
  const { isDark } = useTheme();
  return (
    <div className={`${styles.pagination} ${isDark ? "dark" : "light"}`}>
      <button
        className={`${styles.arrow} ${isDark ? "dark" : "light"}`}
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <div className={`${styles.list} ${isDark ? "dark" : "light"}`}>
        {[...Array.from({ length: totalPages }, (_, i) => i + 1)].map(
          (_, index) => {
            return (
              <button
                key={index}
                className={`${styles.pageNumber} ${isDark ? "dark" : "light"}`}
                onClick={() => handleToPageNumber(index + 1)}
                disabled={currentPage == index + 1}
              >
                {index + 1}
              </button>
            );
          }
        )}
      </div>
      <button
        className={`${styles.arrow} ${isDark ? "dark" : "light"}`}
        onClick={handleNextPage}
        disabled={currentPage >= 10}
      >
        {">"}
      </button>
    </div>
  );
}

export default PaginationButtons;
