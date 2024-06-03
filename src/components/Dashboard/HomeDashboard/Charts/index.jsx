import InfoIcon from "../../../Icon/InfoIcon";
import MarkIcon from "../../../Icon/Mark";
import MoreVertIcon from "../../../Icon/MoreVertIcon";
import MyLineChart from "../../../Charts/Line";
import MyPieChart from "../../../Charts/Pie";
import styles from "./index.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getRandomColor } from "../../../../helpers/randomColor";

const HomeDashboardCharts = () => {
  const [data, setData] = useState(null);

  const getIntention = async (intention) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/intentions/`
      );
      return response.data?.filter((res) => res.id === intention);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getPercentages = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/calls/stats/intention`
        );
        if (response && response.data) {
          const updatedData = await Promise.all(
            response.data.map(async (value) => {
              const intent = await getIntention(value?.intention);
              return {
                name: intent?.[0]?.name,
                value: value?.percentage,
                fill: getRandomColor(),
              };
            })
          );

          setData(updatedData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getPercentages();
  }, []);

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
            <MyPieChart data={data && data} />
          </div>
          <div className={styles.marks}>
            {data &&
              data?.map((dt, index) => {
                return (
                  <div key={index}>
                    <MarkIcon color={dt.fill} />
                    <p style={{ textTransform: "capitalize" }}>
                      {dt.name} - {dt.value?.toFixed(2)}%
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className={styles.chart_line}>
        <div className={styles.label}>
          <p>Number of calls during the weekdays</p>
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

export default HomeDashboardCharts;
