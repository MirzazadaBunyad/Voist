import { useState } from "react";
import IncomingCall from "../../../Icon/Calls/IncomingCall";
import SortDown from "../../../Icon/SortDown";
import MyPagination from "../../../Pagination";
import styles from "./index.module.scss";
import { useEffect } from "react";
import { call_logs } from "../../../data/call_logs.data";
// import ChatAddIcon from "../../../Icon/ChatAdd";

const CallLogTable = ({
  startDateFilter,
  endDateFilter,
  setOpenSummary,
  operatorRange,
  intentionRange,
  setLog,
}) => {
  const [historyData, setHistoryData] = useState(call_logs);
  const [data, setData] = useState(historyData);

  useEffect(() => {
    setHistoryData(
      call_logs.filter((item) => {
        const itemDate = new Date(item.date);
        const startDate = new Date(startDateFilter);
        const endDate = new Date(endDateFilter);
        const isInRange = itemDate > startDate && itemDate < endDate;
        const isOperatorInRange =
          operatorRange.length === 0 ||
          operatorRange.includes(item.operator?.name);
        const isIntentionInRange =
          intentionRange.length === 0 ||
          intentionRange.includes(item?.call_intention);

        return isInRange && isOperatorInRange && isIntentionInRange;
      })
    );
  }, [startDateFilter, endDateFilter, operatorRange, intentionRange]);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Operator</th>
              <th>
                <p className={styles.th_sortdown}>
                  Call ID <SortDown />
                </p>
              </th>
              <th>
                <p className={styles.th_sortdown}>
                  Started at <SortDown />
                </p>
              </th>
              <th>Call intention</th>
              <th>Score</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {data?.map((dt) => (
              <tr
                key={dt.id}
                className={styles.tbody}
                onClick={() => {
                  setOpenSummary(true);
                  setLog(dt);
                }}
              >
                <td className={styles.operator}>
                  <img src={dt?.operator?.image} alt="" />
                  <p>{dt?.operator?.name}</p>
                </td>
                <td>{dt?.call_id}</td>
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
                <td style={{ textTransform: "capitalize", fontWeight: 700 }}>
                  {dt?.call_intention}
                </td>
                <td>{dt?.score}</td>
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

export default CallLogTable;
