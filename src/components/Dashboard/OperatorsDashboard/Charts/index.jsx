import InfoIcon from "../../../Icon/InfoIcon";
import MarkIcon from "../../../Icon/Mark";
import MoreVertIcon from "../../../Icon/MoreVertIcon";
import MyLineChart from "../../../Charts/Line";
import MyPieChart from "../../../Charts/Pie";
import styles from "./index.module.scss";

const pie_data = [
  { name: "Answered", value: 45, fill: "#3D73FF" },
  { name: "Unaswered", value: 60, fill: "#FFA63D" },
];

const OperatorDashboardCharts = () => {
  return (
    <div className={styles.charts}>
      <div className={styles.chart_pie}>
        <div className={styles.label}>
          <p>Intention identification</p>
          <div>
            <InfoIcon />
            <MoreVertIcon />
          </div>
        </div>
        <div className={styles.main}>
          <div>
            <MyPieChart data={pie_data} />
          </div>
          <div className={styles.marks}>
            {pie_data?.map((data, index) => {
              return (
                <div key={index}>
                  <MarkIcon color={data.fill} />
                  <p>
                    {data.name} - {data.value}%
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.chart_line}>
        <div className={styles.label}>
          <p>Number of calls answered during the weekdays</p>
          <div>
            <InfoIcon />
            <MoreVertIcon />
          </div>
        </div>
        <div className={styles.main}>
          <MyLineChart />
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboardCharts;
