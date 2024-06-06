import axios from "axios";
import UserGroupIcon from "../../../Icon/UserGroup";
import styles from "./index.module.scss";
// import { operators } from "../../../data/operators";
import { useEffect, useState } from "react";
const OpeatorRange = ({ operatorRange, setOperatorRange }) => {
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState(null);

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      if (!operatorRange.includes(id)) {
        setOperatorRange((prev) => [...prev, id]);
      }
    } else {
      setOperatorRange((prev) => prev.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    const getOperators = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/operators/`
        );
        setData(response.data.operators);
      } catch (error) {
        console.log(error);
      }
    };

    getOperators();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.select} onClick={() => setSelected(!selected)}>
        <UserGroupIcon color={selected ? "#2BB534" : "#1D2B21"} />
        <p>
          {operatorRange?.length > 0
            ? `${operatorRange?.length} Operator selected`
            : "Operators"}
        </p>
      </div>
      <div className={`${styles.options} ${selected ? styles.active : ""}`}>
        {data &&
          data?.map((operator) => (
            <div key={operator?.id}>
              <input
                type="checkbox"
                id={operator?.id}
                onChange={(e) => handleCheckboxChange(e, operator?.id)}
              />
              <img src={operator?.image_url ?? "/img/user.png"} alt="" />
              <label htmlFor={operator?.id}>
                {`${operator?.first_name} ${operator?.last_name}`.length > 18
                  ? `${operator?.first_name} ${operator?.last_name}`.slice(
                      0,
                      18
                    ) + "..."
                  : `${operator?.first_name} ${operator?.last_name}`}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default OpeatorRange;
