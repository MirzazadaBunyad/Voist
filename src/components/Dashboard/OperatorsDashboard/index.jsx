import { useState } from "react";
import OperatorsMenu from "./OperatorsMenu";
import styles from "./index.module.scss";
import OperatorHeader from "./Header";
// import OperatorDashboardCards from "./Cards";
import OperatorDashboardCharts from "./Charts";
import RecentCalls from "../HomeDashboard/RecentCalls";
import DatePickerComponent from "../../DatePicker";
import CallHistory from "./CallHistory";
// import { operators } from "../../data/operators";

const Operators = () => {
  const [operator, setOperator] = useState(null);
  const [activeAnalysis, setActiveAnalysis] = useState(true);
  const [startDateFilter, setStartDateFilter] = useState(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() - 30);
    return tomorrow;
  });

  const [endDateFilter, setEndDateFilter] = useState(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate());
    return tomorrow;
  });

  return (
    <div>
      <OperatorsMenu setOperator={setOperator} operatorMenu={operator} />
      <div className={styles.main}>
        <OperatorHeader operator={operator} />
        <div className={styles.frame}>
          <div className={styles.frame_option}>
            <div
              className={`${activeAnalysis && styles.active}`}
              onClick={() => setActiveAnalysis(true)}
            >
              <p>Overall analysis</p>
            </div>
            <div
              className={`${!activeAnalysis && styles.active}`}
              onClick={() => setActiveAnalysis(false)}
            >
              <p>Call history</p>
            </div>
          </div>
          {!activeAnalysis && (
            <div className={styles.date_picker}>
              <DatePickerComponent
                startDateFilter={startDateFilter}
                endDateFilter={endDateFilter}
                setStartDateFilter={setStartDateFilter}
                setEndDateFilter={setEndDateFilter}
              />
            </div>
          )}
        </div>

        {activeAnalysis ? (
          <>
            {/* <OperatorDashboardCards /> */}
            <OperatorDashboardCharts operator={operator} />
            <div className={styles.recent_calls}>
              <RecentCalls operator={operator} />
            </div>
          </>
        ) : (
          <CallHistory
            operator={operator}
            startDateFilter={startDateFilter}
            endDateFilter={endDateFilter}
          />
        )}
      </div>
    </div>
  );
};

export default Operators;
