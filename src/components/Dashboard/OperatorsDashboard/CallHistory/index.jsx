import { useState } from "react";
import IncomingCall from "../../../Icon/Calls/IncomingCall";
import SortDown from "../../../Icon/SortDown";
import MyPagination from "../../../Pagination";
import styles from "./index.module.scss";
import { useEffect } from "react";
import { call_logs } from "../../../data/call_logs.data";
// import ChatAddIcon from "../../../Icon/ChatAdd";

const CallHistory = ({ startDateFilter, endDateFilter }) => {
  const [historyData, setHistoryData] = useState(call_logs);
  const [data, setData] = useState(historyData);
  useEffect(() => {
    setHistoryData(
      call_logs.filter((item) => {
        const itemDate = new Date(item.date);
        const startDate = new Date(startDateFilter);
        const endDate = new Date(endDateFilter);
        return itemDate > startDate && itemDate < endDate;
      })
    );
  }, [startDateFilter, endDateFilter]);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th className={styles.th_sortdown}>
                <p>Started at</p>
                {/* <p onClick={() => setData((prev) => prev.reverse())}> */}
                <SortDown />
                {/* </p> */}
              </th>
              <th>Duration</th>
              <th>Call ID</th>
              <th>Score</th>
              <th>Call intention</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {data?.map((dt) => (
              <tr key={dt.id} className={styles.tbody}>
                <td className={styles.first}>
                  <IncomingCall color="#99A09B" />
                  <p>
                    {dt.date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </td>
                <td>{dt?.duration}min</td>
                <td>{dt?.call_id}</td>
                <td>{dt?.score}</td>
                <td style={{ textTransform: "capitalize" }}>
                  {dt?.call_intention}
                </td>
                {/* <td className={styles.actions}>
                  <ChatAddIcon />
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <MyPagination data={historyData} setData={setData} />
      </div>
    </div>
  );
};

export default CallHistory;
