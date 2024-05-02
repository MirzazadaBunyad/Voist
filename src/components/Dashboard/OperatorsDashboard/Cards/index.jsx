import styles from "./index.module.scss";
import visitorsIcon from "../../../../assets/icons/visitorsIcon.svg";
import conversationsIcon from "../../../../assets/icons/conversationsIcon.svg";
import phoneCallsIcon from "../../../../assets/icons/phoneCallsIcon.svg";

const OperatorDashboardCards = () => {
  return (
    <div className={styles.cards}>
      <div className={`${styles.card}`}>
        <div>
          <img src={visitorsIcon} alt="" />
        </div>
        <div>
          <h3>50+</h3>
          <p>Visitors</p>
        </div>
      </div>
      <div className={`${styles.card}`}>
        <div>
          <img src={conversationsIcon} alt="" />
        </div>
        <div>
          <h3>87</h3>
          <p>Converstaions</p>
        </div>
      </div>
      <div className={`${styles.card}`}>
        <div>
          <img src={phoneCallsIcon} alt="" />
        </div>
        <div>
          <h3>72</h3>
          <p>Phone calls</p>
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboardCards;
