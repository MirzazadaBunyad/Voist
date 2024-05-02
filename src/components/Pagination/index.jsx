import { useState } from "react";
import ArrowDown from "../Icon/ArrowDown";
import PaginationArrowUpLeft from "../Icon/PaginationArrowUpLeft";
import PaginationArrowUpRight from "../Icon/PaginationArrowUpRight";
import styles from "./index.module.scss";
import { useEffect } from "react";

const itemsPerPage = 10; // Number of items to display per page

const MyPagination = ({ data, setData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(
    (currentPage - 1) * itemsPerPage
  );
  const [endIndex, setEndIndex] = useState(
    Math.min(startIndex + itemsPerPage, data.length)
  );

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setStartIndex((currentPage - 1) * itemsPerPage);
    setEndIndex(
      Math.min((currentPage - 1) * itemsPerPage + itemsPerPage, data.length)
    );
  }, [currentPage, itemsPerPage, data.length]);

  useEffect(() => {
    setData(data.slice(startIndex, endIndex));
  }, [startIndex, endIndex, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <div>
          <p>
            {currentPage} of {totalPages}
          </p>
        </div>
        <div className={styles.show_range}>
          <p>
            Show:{" "}
            <span>{Math.min(itemsPerPage * currentPage, data.length)}</span>
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

        {Array.from({ length: totalPages }, (_, index) => (
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
            color={currentPage === totalPages ? "#855FCC" : "black"}
          />
        </div>
      </div>
    </div>
  );
};

export default MyPagination;
