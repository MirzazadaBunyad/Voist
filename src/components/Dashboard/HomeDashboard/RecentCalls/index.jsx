import { useEffect, useState } from "react";
// import IncomingCall from "../../../Icon/Calls/IncomingCall";
import OutgoingCall from "../../../Icon/Calls/OutgoingCall";
// import SilentCall from "../../../Icon/Calls/SilentCall";
import InfoIcon from "../../../Icon/InfoIcon";
import MoreVertIcon from "../../../Icon/MoreVertIcon";
import styles from "./index.module.scss";
import axios from "axios";
import { formatDuration } from "../../../../helpers/formatDuration";

const RecentCalls = ({ operator }) => {
  const [slice, setSlice] = useState(true);
  const [data, setData] = useState(null);

  const formattedDateBefore1Week = () => {
    const date = new Date();

    date.setDate(date.getDate() - 7);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const getCalls = async () => {
      let query = `from_date=${formattedDateBefore1Week()}`;
      if (operator) query += `&operator_ids=${operator.id}`;

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/calls/?${query}`
        );
        setData(response && response?.data.calls);
      } catch (error) {
        console.log(error);
      }
    };

    getCalls();
  }, [operator]);

  const formattedDate = (dateStr) => {
    const date = new Date(dateStr);

    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${month}/${day}`;
  };

  const formattedTime = (dateTimeStr) => {
    const date = new Date(dateTimeStr);

    const hours = String(date.getUTCHours()).padStart(2, "0"); // Using getUTCHours() for the UTC time
    const minutes = String(date.getUTCMinutes()).padStart(2, "0"); // Using getUTCMinutes() for the UTC time

    return `${hours}:${minutes}`;
  };

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
            {data &&
              data?.slice(0, slice ? 10 : data.length)?.map((call) => (
                <tr key={call.id} className={styles.tbody}>
                  <td className={styles.first}>
                    <OutgoingCall />
                    {/* {call.status === "outgoing" ? (
                      <OutgoingCall />
                    ) : call.status === "incoming" ? (
                      <IncomingCall />
                    ) : (
                      <SilentCall />
                    )} */}
                    <p>
                      {call?.name.length > 20
                        ? call?.name.slice(0, 20) + "..."
                        : call?.name}
                    </p>
                  </td>
                  <td>{formattedDate(call.started_at.split("T")[0])}</td>
                  <td>{formattedTime(call.started_at)}</td>
                  <td>{formatDuration(call.duration)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCalls;
