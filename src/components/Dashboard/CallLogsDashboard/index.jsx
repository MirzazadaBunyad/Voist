import { useState } from "react";
import DatePickerComponent from "../../DatePicker";
import CallLogHeader from "./CallLogHeader";
import styles from "./index.module.scss";
import CallLogTable from "./CallLogTable";
import OpeatorRange from "./OperatorRange";
import CallLogsSummary from "../CallLogsSummary";
import IntentionRange from "./CallIntentionRange";
const CallLogs = () => {
  const [startDateFilter, setStartDateFilter] = useState(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() - 1);
    return tomorrow;
  });

  const [endDateFilter, setEndDateFilter] = useState(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow;
  });

  const [operatorRange, setOperatorRange] = useState([]);
  const [intentionRange, setIntentionRange] = useState([]);

  const [openSummary, setOpenSummary] = useState(false);
  const [log, setLog] = useState(null);
  return (
    <div className={styles.container}>
      {!openSummary ? (
        <>
          <CallLogHeader />
          <div className={styles.range}>
            <div className={styles.date_picker}>
              <DatePickerComponent
                startDateFilter={startDateFilter}
                endDateFilter={endDateFilter}
                setStartDateFilter={setStartDateFilter}
                setEndDateFilter={setEndDateFilter}
              />
            </div>
            <div>
              <OpeatorRange
                operatorRange={operatorRange}
                setOperatorRange={setOperatorRange}
              />
            </div>
            <div>
              <IntentionRange
                intentionRange={intentionRange}
                setIntentionRange={setIntentionRange}
              />
            </div>
          </div>
          <div>
            <CallLogTable
              setOpenSummary={setOpenSummary}
              startDateFilter={startDateFilter}
              endDateFilter={endDateFilter}
              operatorRange={operatorRange}
              intentionRange={intentionRange}
              setLog={setLog}
            />
          </div>
        </>
      ) : (
        <>
          <CallLogsSummary log={log} />
        </>
      )}
    </div>
  );
};

export default CallLogs;
