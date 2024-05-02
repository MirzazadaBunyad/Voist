import { useState } from "react";
import CallRecording from "./CallRecording";
import SummaryHeader from "./Header";
import styles from "./index.module.scss";
import SummaryTab from "./Tabs/Summary";
import ScorecardTab from "./Tabs/Scorecard";
// import QuestionsTab from "./Tabs/Questions";
// import ObjectionsTab from "./Tabs/Objections";

const tabs = ["Summary", "Scorecard"]; //, "Questions", "Objections"

const CallLogsSummary = ({ log }) => {
  const [activeTab, setActiveTab] = useState("Summary");

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <SummaryHeader data={log} />
        <div className={styles.tabs}>
          {tabs?.map((tab, index) => {
            return (
              <div
                key={index}
                className={`${styles.tab} ${
                  activeTab === tab ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab)}
              >
                <p>{tab}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.slices}>
          {activeTab === "Summary" ? (
            <SummaryTab />
          ) : activeTab === "Scorecard" ? (
            <ScorecardTab />
          ) : (
            // activeTab === "Questions" ? (
            //   <QuestionsTab />
            // ) : activeTab === "Objections" ? (
            //   <ObjectionsTab />
            // ) :
            ""
          )}
        </div>
      </div>
      <div className={styles.record}>
        <CallRecording />
      </div>
    </div>
  );
};

export default CallLogsSummary;
