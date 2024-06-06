import { useState } from "react";
import DatePickerComponent from "../../DatePicker";
import CallLogHeader from "./CallLogHeader";
import styles from "./index.module.scss";
import CallLogTable from "./CallLogTable";
import OpeatorRange from "./OperatorRange";
import IntentionRange from "./CallIntentionRange";
const CallLogs = () => {
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

  const [operatorRange, setOperatorRange] = useState([]);
  const [intentionRange, setIntentionRange] = useState([]);
  return (
    <div className={styles.container}>
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
          startDateFilter={startDateFilter}
          endDateFilter={endDateFilter}
          operatorRange={operatorRange}
          intentionRange={intentionRange}
        />
      </div>
    </div>
  );
};

export default CallLogs;
