import HeatmapChart from "../../../Charts/HeatMap";
import InfoIcon from "../../../Icon/InfoIcon";
import MoreVertIcon from "../../../Icon/MoreVertIcon";
import styles from "./index.module.scss";

const HeatMap = () => {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <p>Heatmap</p>
        <div>
          <InfoIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.heatmap}>
          <HeatmapChart />
        </div>
        <div className={styles.marks}>
          <div className={styles.gradient}></div>
          <div className={styles.text_div}>
            <p>Variable</p>
            <p>Other variable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeatMap;
