import styles from "./index.module.scss";
import voistLogo from "../../assets/img/voistLogo.svg";
import arrowRight from "../../assets/img/arrowRightBlack.svg";
import ArrowDown from "../Icon/ArrowDown";
import HomeIcon from "../Icon/Dashboard/HomeIcon";
import SettingsIcon from "../Icon/Dashboard/SettingsIcon";
import OperatorIcon from "../Icon/Dashboard/OperatorIcon";
import CallIcon from "../Icon/Dashboard/CallIcon";
import { useState } from "react";
import CloseSidebarIcon from "../Icon/CloseSidebar";
import { useLocation } from "react-router-dom";

const Sidebar = ({ company }) => {
  const [isHoveredButton, setIsHoveredButton] = useState(false);

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className={styles.container}>
      <div className={styles.container_menu}>
        <div className={styles.container_menu_header}>
          <div>
            <img src={voistLogo} alt="logo" />
          </div>
          <div
            className={`${styles.close_sidebar}`}
            onMouseEnter={() => setIsHoveredButton(true)}
            onMouseLeave={() => setIsHoveredButton(false)}
          >
            <CloseSidebarIcon
              color={isHoveredButton ? " #3d73ff" : "#1D2B21"}
            />
          </div>
        </div>
        <div className={styles.container_menu_items}>
          <a
            className={`${styles.item} ${
              currentPath === "/dashboard" ? styles.active : ""
            }`}
            href="/dashboard"
          >
            <div className={`${styles.icon}`}>
              <HomeIcon
                color={currentPath === "/dashboard" ? "white" : "#1A6B1F"}
              />
            </div>
            <div className={`${styles.text}`}>
              <p>Home dashboard</p>
            </div>
          </a>
          <a
            className={`${styles.item} ${
              currentPath === "/dashboard/operators" ? styles.active : ""
            }`}
            href="/dashboard/operators"
          >
            <div className={`${styles.icon}`}>
              <OperatorIcon
                color={
                  currentPath === "/dashboard/operators" ? "white" : "#1A6B1F"
                }
              />
            </div>
            <div className={`${styles.text}`}>
              <p>Operators</p>
            </div>
          </a>
          <a
            className={`${styles.item} ${
              currentPath === "/dashboard/call_logs" ? styles.active : ""
            }`}
            href="/dashboard/call_logs"
          >
            <div className={`${styles.icon}`}>
              <CallIcon
                color={
                  currentPath === "/dashboard/call_logs" ? "white" : "#1A6B1F"
                }
              />
            </div>
            <div className={`${styles.text}`}>
              <p>Call logs</p>
            </div>
          </a>
          <a
            className={`${styles.item_setting} ${
              currentPath === "/dashboard/settings" ? styles.active : ""
            }`}
            href="/dashboard/settings"
          >
            <div className={styles.first}>
              <div className={`${styles.icon}`}>
                <SettingsIcon
                  color={
                    currentPath === "/dashboard/settings" ? "white" : "#1A6B1F"
                  }
                />
              </div>
              <div className={`${styles.text}`}>
                <p>Settings</p>
              </div>
            </div>
            <div className={styles.arrow_down}>
              <ArrowDown
                opacity={currentPath === "/dashboard/settings" ? "1" : "0.3"}
              />
            </div>
          </a>
          {currentPath === "/dashboard/settings" && (
            <div className={styles.dropdown}>
              <div
                className={`${
                  currentPath === "/dashboard/settings" ? styles.active : ""
                }`}
              >
                <p>Team members</p>
              </div>
              {/* <div
                className={`${component === "security" ? styles.active : ""}`}
                onClick={() => {
                  handleClick("security");
                }}
              >
                <p>Security</p>
              </div> */}
            </div>
          )}
        </div>
      </div>
      <a className={styles.container_company_profile} href="/dashboard/company">
        <div className={styles.image}>
          <img
            src={company && (company?.photo ?? "./img/company.png")}
            alt=""
          />
        </div>
        <div>
          <div className={styles.top}>
            <p>{company && company.name}</p>
            <div>
              <img src={arrowRight} alt="" />
            </div>
          </div>
          <div className={styles.bottom}>
            <p>Click to see profiles</p>
          </div>
        </div>
      </a>
    </div>
  );
};
export default Sidebar;
