import styles from "./styles.module.css";

function Pagination({
  totalPages,
  currentPage,
  handlePreviousPage,
  handleToPageNumber,
  handleNextPage,
}) {
  return (
    <div className={styles.pagination}>
      <button
        className={styles.arrow}
        onClick={handlePreviousPage}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array.from({ length: totalPages }, (_, i) => i + 1)].map(
          (_, index) => {
            return (
              <button
                key={index}
                className={styles.pageNumber}
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
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= 10}
      >
        {">"}
      </button>
    </div>
  );
}

export default Pagination;
