import { useState } from "react";
import IncomingCall from "../../../Icon/Calls/IncomingCall";
import OutgoingCall from "../../../Icon/Calls/OutgoingCall";
import SilentCall from "../../../Icon/Calls/SilentCall";
import InfoIcon from "../../../Icon/InfoIcon";
import MoreVertIcon from "../../../Icon/MoreVertIcon";
import styles from "./index.module.scss";

const calls = [
  {
    id: 1,
    operator: "Kadin Schlei...",
    date: "12/02",
    time: "16:30",
    duration: "1h 32min",
    status: "outgoing",
  },
  {
    id: 2,
    operator: "Emery Rhiel",
    date: "12/02",
    time: "16:30",
    duration: "1h 32min",
    status: "incoming",
  },
  {
    id: 3,
    operator: "Martin Botosh",
    date: "12/02",
    time: "16:30",
    duration: "1h 32min",
    status: "outgoing",
  },
  {
    id: 4,
    operator: "Lydia Bothman",
    date: "12/02",
    time: "16:30",
    duration: "1h 32min",
    status: "silent",
  },
  {
    id: 5,
    operator: "Makenna Carder",
    date: "12/02",
    time: "16:30",
    duration: "1h 32min",
    status: "outgoing",
  },
  {
    id: 6,
    operator: "Wilson Schleifer",
    date: "12/02",
    time: "16:30",
    duration: "1h 32min",
    status: "silent",
  },
  {
    id: 7,
    operator: "Martin Botosh",
    date: "12/02",
    time: "16:30",
    duration: "1h 32min",
    status: "outgoing",
  },
  {
    id: 8,
    operator: "Lydia Bothman",
    date: "12/02",
    time: "16:30",
    duration: "1h 32min",
    status: "incoming",
  },
  {
    id: 9,
    operator: "Makenna Carder",
    date: "12/02",
    time: "16:30",
    duration: "1h 32min",
    status: "incoming",
  },
  {
    id: 10,
    operator: "Wilson Schleifer",
    date: "12/02",
    time: "16:30",
    duration: "1h 32min",
    status: "outgoing",
  },
];

const RecentCalls = () => {
  const [slice, setSlice] = useState(true);
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <p>Latest Analyses</p>
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
              <th>Date</th>
              <th>Time</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {calls.slice(0, slice ? 10 : calls.length).map((call) => (
              <tr key={call.id} className={styles.tbody}>
                <td className={styles.first}>
                  {call.status === "outgoing" ? (
                    <OutgoingCall />
                  ) : call.status === "incoming" ? (
                    <IncomingCall />
                  ) : (
                    <SilentCall />
                  )}
                  <p>{call.operator}</p>
                </td>
                <td>{call.date}</td>
                <td>{call.time}</td>
                <td>{call.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCalls;
