import { useState } from "react";
import IncomingCall from "../../../Icon/Calls/IncomingCall";
import SortDown from "../../../Icon/SortDown";
import MyPagination from "../../../Pagination";
import styles from "./index.module.scss";
import { useEffect } from "react";
// import { call_logs } from "../../../data/call_logs.data";
import axios from "axios";
import { formatDuration } from "../../../../helpers/formatDuration";
import { formattedTargetDate } from "../../../../helpers/formattedTargetDate";
import { useNavigate } from "react-router-dom";
// import ChatAddIcon from "../../../Icon/ChatAdd";

const CallHistory = ({ startDateFilter, endDateFilter, operator }) => {
  const [data, setData] = useState(null);
  const [totalPages, setTotalPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const getCalls = async () => {
      let query = `page=${currentPage}&limit=10`;
      if (operator) {
        query += `&operator_ids=${operator.id}`;
      }
      if (startDateFilter) {
        query += `&from_date=${formatDate(startDateFilter)}`;
      }
      if (endDateFilter) {
        query += `&to_date=${formatDate(endDateFilter)}`;
      }
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/calls/?${query}`
        );
        setData(response?.data?.calls);
        setTotalPages(response?.data?.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    getCalls();
  }, [currentPage, operator, startDateFilter, endDateFilter]);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th className={styles.th_sortdown}>
                <p>Started at</p>
                <p
                  onClick={() =>
                    setData((prev) =>
                      [...prev].sort(
                        (a, b) =>
                          new Date(a.started_at) - new Date(b.started_at)
                      )
                    )
                  }
                >
                  <SortDown />
                </p>
              </th>
              <th>Duration</th>
              <th>Call ID</th>
              <th>Score</th>
              <th>Call intention</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((dt) => {
                return (
                  <tr
                    key={dt.id}
                    className={styles.tbody}
                    onClick={() => {
                      navigate(`/dashboard/call_logs/${dt.id}`);
                    }}
                  >
                    <td className={styles.first}>
                      <IncomingCall color="#99A09B" />
                      <p>{formattedTargetDate(dt.started_at)}</p>
                    </td>
                    <td>{formatDuration(dt.duration)}</td>
                    <td>{dt?.id}</td>
                    <td>{dt?.score}</td>
                    <td style={{ textTransform: "capitalize" }}>
                      {dt?.intention?.name}
                    </td>
                    ;
                    {/* <td className={styles.actions}>
                  <ChatAddIcon />
                </td> */}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div>
        <MyPagination
          data={data}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default CallHistory;
