import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const line_data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sun", "Mon"],
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
      data: [100, 150, 50, 120, 100, 180, 70],
    },
  ],
};

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

const MyLineChart = () => {
  return <Line data={line_data} options={line_options} />;
};

export default MyLineChart;
