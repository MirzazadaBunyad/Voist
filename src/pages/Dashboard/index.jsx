import styles from "./index.module.scss";
import "./animations.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Home from "../../components/Dashboard/HomeDashboard";
import Operators from "../../components/Dashboard/OperatorsDashboard";
import { useState } from "react";
import CallLogs from "../../components/Dashboard/CallLogsDashboard";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Settings from "../../components/Dashboard/SettingsDashboard";
import Account from "../../components/Dashboard/Account";
import CompanySettings from "../../components/Dashboard/Company";

const profile = {
  id: 1,
  name: "Ulviyya",
  surname: "Imamova",
  email: "ulya@voist.com",
  image: "./img/profile.jpeg",
};

const company = {
  id: 1,
  nickname: "Uimway Ltd.",
  name: "ulya@domein.az",
  domain: "ulya@domein.az",
  phone: "50 222 22 22",
  description: `Semper iaculis pulvinar nunc eu sollicitudin tellus. Convallis erat phasellus sit in duis nunc nibh eget orci. Nulla sagittis eu bibendum felis in tincidunt ultricies viverra. Id a amet nunc massa cras tincidunt eu cursus. Porta nunc cursus faucibus duis fringilla.`,
  image: "./img/company.png",
  country: null,
  timeZone: null,
  count: "",
};

const Dashboard = () => {
  const [component, setComponent] = useState("home"); //home,operators,call_logs,settings,team_members,security

  const renderComponent = () => {
    switch (component) {
      case "home":
        return <Home />;
      case "operators":
        return <Operators />;
      case "call_logs":
        return <CallLogs />;
      case "settings":
        return <Settings />;
      case "account":
        return <Account profile={profile} />;
      case "company":
        return <CompanySettings company={company} />;
      default:
        return <Settings />;
    }
  };

  return (
    <div>
      <Sidebar
        setComponent={setComponent}
        component={component}
        company={company}
      />
      <div className={styles.main}>
        <div
          className={`${styles.navbar} ${
            component === "operators" ? styles.active_navbar : ""
          }`}
        >
          <Navbar setComponent={setComponent} profile={profile} />
        </div>
        <TransitionGroup>
          <CSSTransition
            key={component}
            classNames="dashboard"
            timeout={500}
            unmountOnExit
          >
            {renderComponent()}
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};
export default Dashboard;
