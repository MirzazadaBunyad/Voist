import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import MaskIcon from "../../../Icon/MaskIcon";
import axios from "axios";

const IntentionRange = ({ intentionRange, setIntentionRange }) => {
  const [selected, setSelected] = useState(false);
  const [data, setData] = useState(null);

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      if (!intentionRange.includes(id)) {
        setIntentionRange((prev) => [...prev, id]);
      }
    } else {
      setIntentionRange((prev) => prev.filter((item) => item !== id));
    }
  };

  useEffect(() => {
    const getIntentions = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/intentions/`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getIntentions();
  }, []);

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
        {data &&
          data?.map((intention) => (
            <div key={intention?.id}>
              <input
                type="checkbox"
                id={intention?.id}
                onChange={(e) => handleCheckboxChange(e, intention?.id)}
              />
              <label>{intention?.name}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default IntentionRange;
