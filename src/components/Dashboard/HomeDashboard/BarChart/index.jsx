import { useState } from "react";
import MyBarChart from "../../../Charts/Bar";
import InfoIcon from "../../../Icon/InfoIcon";
import MarkIcon from "../../../Icon/Mark";
import MoreVertIcon from "../../../Icon/MoreVertIcon";
import styles from "./index.module.scss";

const BarChart = () => {
  const [data, setData] = useState([
    {
      emotion: "Angry",
      color: "#FF3D3D",
    },
    {
      emotion: "Fearful",
      color: "#3D73FF",
    },
    {
      emotion: "Happy",
      color: "#3DFF49",
    },
    {
      emotion: "Neutral",
      color: "#5000FB",
    },
    {
      emotion: "Sad",
      color: "#FF8A00",
    },
    {
      emotion: "Surprised",
      color: "#EB00FF",
    },
  ]);
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
          {data?.map((dt, index) => (
            <div key={index}>
              <MarkIcon color={dt.color} />
              <p>{dt.emotion}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarChart;
