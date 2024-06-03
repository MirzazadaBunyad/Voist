import ArrowDown from "../Icon/ArrowDown";
import PaginationArrowUpLeft from "../Icon/PaginationArrowUpLeft";
import PaginationArrowUpRight from "../Icon/PaginationArrowUpRight";
import styles from "./index.module.scss";

const itemsPerPage = 10; // Number of items to display per page

const MyPagination = ({ data, totalPages, currentPage, setCurrentPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (totalPages && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div>
          <p>
            {currentPage} of {totalPages && totalPages}
          </p>
        </div>
        <div className={styles.show_range}>
          <p>
            Show:{" "}
            <span>
              {Math.min(itemsPerPage * currentPage, data && data.length)}
            </span>
          </p>
          <ArrowDown />
        </div>
      </div>
      <div className={styles.right}>
        <div onClick={handlePrevPage}>
          <PaginationArrowUpLeft
            color={currentPage === 1 ? "#855FCC" : "black"}
          />
        </div>

        {Array.from({ length: totalPages && totalPages }, (_, index) => (
          <p
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`${currentPage === index + 1 ? styles.active : ""}`}
          >
            {index + 1}
          </p>
        ))}
        <div onClick={handleNextPage}>
          <PaginationArrowUpRight
            color={
              totalPages && currentPage === totalPages ? "#855FCC" : "black"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MyPagination;
