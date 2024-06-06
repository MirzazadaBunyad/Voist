import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MyBarChart = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getEmotions = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/calls/stats/emotion/`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getEmotions();
  }, []);
  return (
    <ResponsiveContainer width="100%" height={296}>
      <BarChart data={data}>
        <XAxis
          dataKey="day"
          tickFormatter={(value) => value}
          tickLine={false}
        />
        <YAxis width={40} axisLine={false} tickLine={false} />
        <Tooltip />
        <Bar dataKey="anger" fill="#FFA6A6" barSize={12} />
        <Bar dataKey="fear" fill="#A6BFFF" barSize={12} />
        <Bar dataKey="happy" fill="#A6FFAB" barSize={12} />
        <Bar dataKey="neutral" fill="#A8A6FF" barSize={12} />
        <Bar dataKey="sad" fill="#FFD6A6" barSize={12} />
        <Bar dataKey="surprise" fill="#F8A6FF" barSize={12} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;

// const callData = [
//   {
//     month: "Mon",
//     angry: 1.5,
//     fearful: 2,
//     happy: 2.5,
//     neutral: 1.4,
//     sad: 1,
//     surprised: 2.5,
//   },
//   {
//     month: "Thu",
//     angry: 3,
//     fearful: 1,
//     happy: 2,
//     neutral: 1.5,
//     sad: 2,
//     surprised: 3.5,
//   },
//   {
//     month: "Wed",
//     angry: 2,
//     fearful: 4,
//     happy: 3,
//     neutral: 1.5,
//     sad: 4,
//     surprised: 2,
//   },
//   {
//     month: "Thr",
//     angry: 1,
//     fearful: 3,
//     happy: 3,
//     neutral: 1.5,
//     sad: 4,
//     surprised: 2.5,
//   },
//   {
//     month: "Fri",
//     angry: 0,
//     fearful: 2,
//     happy: 4,
//     neutral: 1.5,
//     sad: 1,
//     surprised: 2.5,
//   },
//   {
//     month: "Sat",
//     angry: 1,
//     fearful: 4,
//     happy: 2,
//     neutral: 1.5,
//     sad: 4,
//     surprised: 2,
//   },
//   {
//     month: "Sun",
//     angry: 1.5,
//     fearful: 3,
//     happy: 2.5,
//     neutral: 1.5,
//     sad: 4,
//     surprised: 2.5,
//   },
// ];
