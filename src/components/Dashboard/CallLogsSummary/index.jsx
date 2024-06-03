import { useEffect, useState } from "react";
import CallRecording from "./CallRecording";
import SummaryHeader from "./Header";
import styles from "./index.module.scss";
import SummaryTab from "./Tabs/Summary";
import ScorecardTab from "./Tabs/Scorecard";
// import QuestionsTab from "./Tabs/Questions";
// import ObjectionsTab from "./Tabs/Objections";
import { useParams } from "react-router-dom";
import axios from "axios";

const tabs = ["Summary", "Scorecard"]; //, "Questions", "Objections"

const CallLogsSummary = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Summary");
  const [log, setLog] = useState(null);

  useEffect(() => {
    const getCall = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/calls/${id}/`
        );
        setLog(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCall();
  }, [id]);

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
            <SummaryTab summary={log} />
          ) : activeTab === "Scorecard" ? (
            <ScorecardTab data={log} />
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
