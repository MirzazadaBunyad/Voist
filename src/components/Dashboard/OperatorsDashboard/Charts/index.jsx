import InfoIcon from "../../../Icon/InfoIcon";
import MarkIcon from "../../../Icon/Mark";
import MoreVertIcon from "../../../Icon/MoreVertIcon";
import MyLineChart from "../../../Charts/Line";
import MyPieChart from "../../../Charts/Pie";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { getRandomColor } from "../../../../helpers/randomColor";

const OperatorDashboardCharts = ({ operator }) => {
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
      setData(null);
      let query = "";
      if (operator) {
        query += `?operator_id=${operator.id}`;
      }
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/calls/stats/intention${query}`
        );
        if (response && response?.data) {
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
        setData(null);
        console.log(error);
      }
    };

    getPercentages();
  }, [operator]);
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
              data?.map((data, index) => {
                return (
                  <div key={index}>
                    <MarkIcon color={data.fill} />
                    <p style={{ textTransform: "capitalize" }}>
                      {data.name} - {data.value.toFixed(2)}%
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
          <MyLineChart operator={operator} />
        </div>
      </div>
    </div>
  );
};

export default OperatorDashboardCharts;
