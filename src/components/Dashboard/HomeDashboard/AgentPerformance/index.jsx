import { useState } from "react";
import InfoIcon from "../../../Icon/InfoIcon";
import MoreVertIcon from "../../../Icon/MoreVertIcon";
import RangeIcon from "../../../Icon/RangeIcon";
import styles from "./index.module.scss";

const agents = [
  {
    operator: "Kadin Schleifer",
    satisfaction: 30,
    avScore: "3/10",
    totalCalls: 120,
    aht: "3:40",
    image: "./img/profile.jpeg",
  },
  {
    operator: "Emery Rhiel",
    satisfaction: 70,
    avScore: "3/10",
    totalCalls: 120,
    aht: "3:40",
    image: "./img/profile.jpeg",
  },
  {
    operator: "Emery Rhiel",
    satisfaction: 90,
    avScore: "3/10",
    totalCalls: 120,
    aht: "3:40",
    image: "./img/profile.jpeg",
  },
  {
    operator: "Emery Rhiel",
    satisfaction: 33,
    avScore: "3/10",
    totalCalls: 120,
    aht: "3:40",
    image: "./img/profile.jpeg",
  },
  {
    operator: "Kadin Schleifer",
    satisfaction: 63,
    avScore: "3/10",
    totalCalls: 120,
    aht: "3:40",
    image: "./img/profile.jpeg",
  },
  {
    operator: "Emery Rhiel",
    satisfaction: 96,
    avScore: "3/10",
    totalCalls: 120,
    aht: "3:40",
    image: "./img/profile.jpeg",
  },
  {
    operator: "Emery Rhiel",
    satisfaction: 63,
    avScore: "3/10",
    totalCalls: 120,
    aht: "3:40",
    image: "./img/profile.jpeg",
  },
  {
    operator: "Emery Rhiel",
    satisfaction: 78,
    avScore: "3/10",
    totalCalls: 120,
    aht: "3:40",
    image: "./img/profile.jpeg",
  },
  {
    operator: "Emery Rhiel",
    satisfaction: 13,
    avScore: "3/10",
    totalCalls: 120,
    aht: "3:40",
    image: "./img/profile.jpeg",
  },
  {
    operator: "Emery Rhiel",
    satisfaction: 93,
    avScore: "3/10",
    totalCalls: 120,
    aht: "3:40",
    image: "./img/profile.jpeg",
  },
];

const AgentPerformance = () => {
  const [slice, setSlice] = useState(true);
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
            {agents.slice(0, slice ? 10 : agents.length).map((agent, index) => (
              <tr key={index} className={styles.tbody}>
                <td className={styles.first}>
                  <img src={agent.image} alt="" />
                  <p>
                    {agent.operator.length >= 11
                      ? agent.operator.slice(0, 11) + "..."
                      : agent.operator}
                  </p>
                </td>
                <td className={styles.satisfaction}>
                  <RangeIcon
                    width={`${agent?.satisfaction}%`}
                    color={
                      agent?.satisfaction > 75
                        ? "#2BB534"
                        : agent?.satisfaction > 45
                        ? "#FFA63D"
                        : "#FF3D3D"
                    }
                    fill={
                      agent?.satisfaction > 75
                        ? "#ECFFED"
                        : agent?.satisfaction > 45
                        ? "#FFF6EC"
                        : "#FFECEC"
                    }
                  />
                  {/* <p
                    className={`${
                      agent.satisfaction == "Available"
                        ? styles.available
                        : styles.unavailable
                    }`}
                  >
                    {agent.satisfaction}
                  </p> */}
                </td>
                <td>{agent.avScore}</td>
                <td className={styles.aht}>
                  <p>{agent.aht}</p>
                </td>
                <td>{agent.totalCalls}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgentPerformance;
