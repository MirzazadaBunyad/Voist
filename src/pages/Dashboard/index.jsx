import styles from "./index.module.scss";
import "./animations.scss";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Home from "../../components/Dashboard/HomeDashboard";
import Operators from "../../components/Dashboard/OperatorsDashboard";
import { useEffect, useState } from "react";
import CallLogs from "../../components/Dashboard/CallLogsDashboard";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Settings from "../../components/Dashboard/SettingsDashboard";
import Account from "../../components/Dashboard/Account";
import CompanySettings from "../../components/Dashboard/Company";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";
import CallLogsSummary from "../../components/Dashboard/CallLogsSummary";

const Dashboard = () => {
  const [company, setCompany] = useState(null);
  const [profile, setProfile] = useState(null);

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const getCompany = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/company/`
        );
        setCompany(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const getProfile = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/users/me/`
        );
        setProfile(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getCompany();
    getProfile();
  }, []);

  return (
    <div>
      <Sidebar company={company} />
      <div className={styles.main}>
        <div
          className={`${styles.navbar} ${
            currentPath === "/dashboard/operators" ? styles.active_navbar : ""
          }`}
        >
          <Navbar profile={profile} />
        </div>
        <TransitionGroup>
          <CSSTransition
            key={currentPath}
            classNames="dashboard"
            timeout={500}
            unmountOnExit
          >
            {/* Nested routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/operators" element={<Operators />} />
              <Route
                path="/account"
                element={<Account profile={profile} setProfile={setProfile} />}
              />
              <Route
                path="/company"
                element={
                  <CompanySettings company={company} setCompany={setCompany} />
                }
              />
              <Route path="/call_logs" element={<CallLogs />} />
              <Route path="/call_logs/:id" element={<CallLogsSummary />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};
export default Dashboard;
