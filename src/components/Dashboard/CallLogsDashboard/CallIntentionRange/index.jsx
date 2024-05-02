import styles from "./index.module.scss";
import { useState } from "react";
import MaskIcon from "../../../Icon/MaskIcon";

const intentions = [
  {
    id: 1,
    name: "help",
  },
  {
    id: 2,
    name: "get information",
  },
  {
    id: 3,
    name: "other",
  },
  {
    id: 4,
    name: "other intention",
  },
];
const IntentionRange = ({ intentionRange, setIntentionRange }) => {
  const [selected, setSelected] = useState(false);

  const handleCheckboxChange = (e) => {
    const value = e.target.name;
    if (e.target.checked) {
      if (!intentionRange.includes(value)) {
        setIntentionRange((prev) => [...prev, value]);
      }
    } else {
      setIntentionRange((prev) => prev.filter((item) => item !== value));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.select} onClick={() => setSelected(!selected)}>
        <MaskIcon color={selected ? "#2BB534" : "#1D2B21"} />
        <p>
          {intentionRange?.length > 0
            ? `${intentionRange?.length} Call Intention selected`
            : "Call intention"}
        </p>
      </div>
      <div className={`${styles.options} ${selected ? styles.active : ""}`}>
        {intentions?.map((intention) => (
          <div key={intention?.id}>
            <input
              type="checkbox"
              name={intention?.name}
              id={intention?.id}
              onChange={handleCheckboxChange}
            />
            <label>{intention?.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IntentionRange;
