import MyBarChart from "../../../Charts/Bar";
import InfoIcon from "../../../Icon/InfoIcon";
import MarkIcon from "../../../Icon/Mark";
import MoreVertIcon from "../../../Icon/MoreVertIcon";
import styles from "./index.module.scss";

const BarChart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <p>Number of calls answered during the weekdays</p>
        <div>
          <InfoIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.bar_chart}>
          <MyBarChart />
        </div>
        <div className={styles.marks}>
          <div>
            <MarkIcon color="#FF3D3D" />
            <p>Angry</p>
          </div>
          <div>
            <MarkIcon color="#3D73FF" />
            <p>Fearful</p>
          </div>
          <div>
            <MarkIcon color="#3DFF49" />
            <p>Happy</p>
          </div>
          <div>
            <MarkIcon color="#5000FB" />
            <p>Neutral</p>
          </div>
          <div>
            <MarkIcon color="#FF8A00" />
            <p>Sad</p>
          </div>
          <div>
            <MarkIcon color="#EB00FF" />
            <p>Surprised</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
