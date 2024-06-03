import styles from "./index.module.scss";
import MarkIcon from "../../../Icon/Mark";
import { useEffect, useState } from "react";
import SearchIcon from "../../../Icon/SearchIcon";
import axios from "axios";

const OperatorsMenu = ({ setOperator, operatorMenu }) => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const getOperators = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/operators/`
        );
        setData(response.data.operators);
        console.log(response.data.operators[0]);
        setOperator(response.data.operators[0]);
        setFilteredData(response.data.operators);
      } catch (error) {
        console.log(error);
      }
    };

    getOperators();
  }, []);

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase();
    setQuery(searchQuery);
    const filtered = data.filter((item) =>
      (item?.first_name + " " + item?.last_name)
        .toLowerCase()
        .includes(searchQuery)
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
        {filteredData &&
          filteredData?.map((operator) => {
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
                  <img src={operator?.image_url ?? "/img/user.png"} alt="" />
                </div>
                <div className={styles.text}>
                  <h4>
                    {`${operator?.first_name} ${operator?.last_name}`.length >
                    18
                      ? `${operator?.first_name} ${operator?.last_name}`.slice(
                          0,
                          18
                        ) + "..."
                      : `${operator?.first_name} ${operator?.last_name}`}
                  </h4>
                  <p>
                    {operator?.email?.length > 20
                      ? operator?.email?.slice(0, 20) + "..."
                      : operator?.email}
                  </p>
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
