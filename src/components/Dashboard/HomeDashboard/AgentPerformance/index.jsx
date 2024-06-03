import { useEffect, useState } from "react";
import InfoIcon from "../../../Icon/InfoIcon";
import MoreVertIcon from "../../../Icon/MoreVertIcon";
import RangeIcon from "../../../Icon/RangeIcon";
import styles from "./index.module.scss";
import axios from "axios";

// const agents = [
//   {
//     operator: "Kadin Schleifer",
//     satisfaction: 30,
//     avScore: "3/10",
//     totalCalls: 120,
//     aht: "3:40",
//     image: "./img/profile.jpeg",
//   },
//   {
//     operator: "Emery Rhiel",
//     satisfaction: 70,
//     avScore: "3/10",
//     totalCalls: 120,
//     aht: "3:40",
//     image: "./img/profile.jpeg",
//   },
//   {
//     operator: "Emery Rhiel",
//     satisfaction: 90,
//     avScore: "3/10",
//     totalCalls: 120,
//     aht: "3:40",
//     image: "./img/profile.jpeg",
//   },
//   {
//     operator: "Emery Rhiel",
//     satisfaction: 33,
//     avScore: "3/10",
//     totalCalls: 120,
//     aht: "3:40",
//     image: "./img/profile.jpeg",
//   },
//   {
//     operator: "Kadin Schleifer",
//     satisfaction: 63,
//     avScore: "3/10",
//     totalCalls: 120,
//     aht: "3:40",
//     image: "./img/profile.jpeg",
//   },
//   {
//     operator: "Emery Rhiel",
//     satisfaction: 96,
//     avScore: "3/10",
//     totalCalls: 120,
//     aht: "3:40",
//     image: "./img/profile.jpeg",
//   },
//   {
//     operator: "Emery Rhiel",
//     satisfaction: 63,
//     avScore: "3/10",
//     totalCalls: 120,
//     aht: "3:40",
//     image: "./img/profile.jpeg",
//   },
//   {
//     operator: "Emery Rhiel",
//     satisfaction: 78,
//     avScore: "3/10",
//     totalCalls: 120,
//     aht: "3:40",
//     image: "./img/profile.jpeg",
//   },
//   {
//     operator: "Emery Rhiel",
//     satisfaction: 13,
//     avScore: "3/10",
//     totalCalls: 120,
//     aht: "3:40",
//     image: "./img/profile.jpeg",
//   },
//   {
//     operator: "Emery Rhiel",
//     satisfaction: 93,
//     avScore: "3/10",
//     totalCalls: 120,
//     aht: "3:40",
//     image: "./img/profile.jpeg",
//   },
// ];

const AgentPerformance = () => {
  const [slice, setSlice] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getOperators = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/operators/`
        );
        setData(response.data.operators);
      } catch (error) {
        console.log(error);
      }
    };

    getOperators();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <p>Agent performance</p>
        <div>
          <p onClick={() => setSlice(false)}>See all</p>
          <InfoIcon />
          <MoreVertIcon />
        </div>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Operator</th>
              <th>Satisfaction</th>
              <th>Av. Score</th>
              <th>AHT</th>
              <th>Total calls</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.slice(0, slice ? 10 : data.length).map((agent, index) => (
                <tr key={index} className={styles.tbody}>
                  <td className={styles.first}>
                    <img src={agent?.photo ?? "/img/user.png"} alt="" />
                    <p>
                      {}
                      {(agent.first_name + " " + agent.last_name).length >= 11
                        ? (agent.first_name + " " + agent.last_name).slice(
                            0,
                            11
                          ) + "..."
                        : agent.first_name + " " + agent.last_name}
                    </p>
                  </td>
                  <td className={styles.satisfaction}>
                    <RangeIcon
                      width={`${agent?.average_score}%`}
                      color={
                        agent?.average_score > 75
                          ? "#2BB534"
                          : agent?.average_score > 45
                          ? "#FFA63D"
                          : "#FF3D3D"
                      }
                      fill={
                        agent?.average_score > 75
                          ? "#ECFFED"
                          : agent?.average_score > 45
                          ? "#FFF6EC"
                          : "#FFECEC"
                      }
                    />
                  </td>
                  <td>{agent.average_score}</td>
                  <td className={styles.aht}>
                    <p>{agent.aht}</p>
                  </td>
                  <td>{agent.total_calls}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentPerformance;
