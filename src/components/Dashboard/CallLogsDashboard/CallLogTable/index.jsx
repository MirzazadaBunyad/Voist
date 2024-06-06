import { useState } from "react";
import IncomingCall from "../../../Icon/Calls/IncomingCall";
import SortDown from "../../../Icon/SortDown";
import MyPagination from "../../../Pagination";
import styles from "./index.module.scss";
import { useEffect } from "react";
import axios from "axios";
import { formattedTargetDate } from "../../../../helpers/formattedTargetDate";
import { useNavigate } from "react-router-dom";
// import { call_logs } from "../../../data/call_logs.data";
// import ChatAddIcon from "../../../Icon/ChatAdd";

const CallLogTable = ({
  startDateFilter,
  endDateFilter,
  operatorRange,
  intentionRange,
}) => {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
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
      if (startDateFilter) {
        query += `&from_date=${formatDate(startDateFilter)}`;
      }
      if (endDateFilter) {
        query += `&to_date=${formatDate(endDateFilter)}`;
      }
      if (operatorRange.length > 0) {
        query += `&operator_ids=${operatorRange.join().trim()}`;
      }
      if (intentionRange.length > 0) {
        query += `&intentions=${intentionRange.join().trim()}`;
      }
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/calls/?${query}`
        );
        setData(response.data.calls);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.log(error);
      }
    };
    getCalls();
  }, [
    currentPage,
    startDateFilter,
    endDateFilter,
    operatorRange,
    intentionRange,
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Operator</th>
              <th>
                <p className={styles.th_sortdown}>
                  Call ID
                  <div
                    onClick={() =>
                      setData((prev) => [...prev].sort((a, b) => a.id - b.id))
                    }
                  >
                    <SortDown />
                  </div>
                </p>
              </th>
              <th>
                <p className={styles.th_sortdown}>
                  Started at
                  <div
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
                  </div>
                </p>
              </th>
              <th>Call intention</th>
              <th>Score</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {data &&
              data?.map((dt) => (
                <tr
                  key={dt.id}
                  className={styles.tbody}
                  onClick={() => {
                    navigate(`/dashboard/call_logs/${dt.id}`);
                  }}
                >
                  <td className={styles.operator}>
                    <img
                      src={dt?.operator?.image_url ?? "/img/user.png"}
                      alt=""
                    />
                    <p>
                      {`${dt?.operator?.first_name} ${dt?.operator?.last_name}`
                        .length > 20
                        ? `${dt?.operator?.first_name} ${dt?.operator?.last_name}`.slice(
                            0,
                            20
                          ) + "..."
                        : `${dt?.operator?.first_name} ${dt?.operator?.last_name}`}
                    </p>
                  </td>
                  <td>{dt?.id}</td>
                  <td className={styles.first}>
                    <IncomingCall color="#99A09B" />
                    <p>{formattedTargetDate(dt.started_at)}</p>
                  </td>
                  <td style={{ textTransform: "capitalize", fontWeight: 700 }}>
                    {dt?.intention?.name}
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

export default CallLogTable;
