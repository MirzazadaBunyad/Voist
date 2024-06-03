import axios from "axios";
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const line_options = {
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  layout: {
    padding: {
      left: 50,
      right: 50,
      top: 50,
      bottom: 50,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
};

const MyLineChart = ({ operator }) => {
  const [data, setData] = useState({
    labels: [],
    value: [],
  });

  useEffect(() => {
    const getStatistics = async () => {
      setData({
        labels: [],
        value: [],
      });
      let query = "";
      if (operator) query += `?operator_id=${operator.id}`;

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/calls/stats/${query}`
        );
        response &&
          response?.data &&
          Object.entries(response?.data)?.map(([key, value]) => {
            setData((prev) => {
              return {
                labels: [...prev.labels, key.slice(0, 3)],
                value: [...prev.value, value],
              };
            });
          });
      } catch (error) {
        console.log("error", error);
      }
    };

    getStatistics();
  }, [operator]);

  const line_data = {
    labels: data && data?.labels,
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#3D73FF",
        borderColor: "#3D73FF",
        borderWidth: 1,
        borderCapStyle: "butt",
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#3D73FF",
        pointBackgroundColor: "#3D73FF",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHitRadius: 10,
        data: data && data?.value,
      },
    ],
  };

  return <Line data={line_data} options={line_options} />;
};

export default MyLineChart;
