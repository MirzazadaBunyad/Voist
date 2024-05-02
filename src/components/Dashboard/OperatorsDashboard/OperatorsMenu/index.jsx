import styles from "./index.module.scss";
import MarkIcon from "../../../Icon/Mark";
import { useState } from "react";
import SearchIcon from "../../../Icon/SearchIcon";

const OperatorsMenu = ({ operators, setOperator, operatorMenu }) => {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(operators);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    const filtered = operators.filter((item) =>
      item.name.toLowerCase().includes(searchQuery)
    );
    setFilteredData(filtered);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Operators</h3>
      </div>
      <div className={styles.search}>
        <div className={styles.search_icon}>
          <SearchIcon />
        </div>
        <input
          type="text"
          placeholder="Search operators..."
          value={query}
          onChange={handleSearch}
        />
      </div>
      <div className={styles.main}>
        {filteredData?.map((operator) => {
          return (
            <div
              key={operator?.id}
              className={`${
                operatorMenu?.id === operator?.id ? styles.active : ""
              } ${styles.item}`}
              onClick={() => {
                setOperator(operator);
              }}
            >
              <div className={styles.photo}>
                <img src={operator?.image} alt="" />
              </div>
              <div className={styles.text}>
                <h4>{operator?.name}</h4>
                <p>{operator?.email}</p>
              </div>
              {operator?.active && (
                <div className={styles.mark}>
                  <MarkIcon color="#2BB534" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OperatorsMenu;
