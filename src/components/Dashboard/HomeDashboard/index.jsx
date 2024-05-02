import styles from "./index.module.scss";
import HomeDashboardHeader from "./Header";
// import HomeDashboardCards from "./Cards";
import HomeDashboardCharts from "./Charts";
import RecentCalls from "./RecentCalls";
import AgentPerformance from "./AgentPerformance";
import BarChart from "./BarChart";
// import HeatMap from "./HeatMap";

const Home = () => {
  return (
    <div className={styles.container}>
      <HomeDashboardHeader />
      {/* <HomeDashboardCards /> */}
      <HomeDashboardCharts />
      <div className={styles.operators_and_calls}>
        <RecentCalls />
        <AgentPerformance />
      </div>
      <div className={styles.diagrams}>
        <BarChart />
        {/* <HeatMap /> */}
      </div>
    </div>
  );
};

export default Home;
