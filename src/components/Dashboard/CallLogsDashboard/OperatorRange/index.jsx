import UserGroupIcon from "../../../Icon/UserGroup";
import styles from "./index.module.scss";
import { operators } from "../../../data/operators";
import { useState } from "react";
const OpeatorRange = ({ operatorRange, setOperatorRange }) => {
  const [selected, setSelected] = useState(false);

  const handleCheckboxChange = (e) => {
    const value = e.target.name;
    if (e.target.checked) {
      if (!operatorRange.includes(value)) {
        setOperatorRange((prev) => [...prev, value]);
      }
    } else {
      setOperatorRange((prev) => prev.filter((item) => item !== value));
    }
  };

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
        {operators?.map((operator) => (
          <div key={operator?.id}>
            <input
              type="checkbox"
              name={operator?.name}
              id={operator?.id}
              onChange={handleCheckboxChange}
            />
            <img src={operator?.image} alt="" />
            <label htmlFor={operator?.id}>{operator?.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpeatorRange;
