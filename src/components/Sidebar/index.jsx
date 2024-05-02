import styles from "./index.module.scss";
import voistLogo from "../../assets/icons/voistLogo.svg";
import arrowRight from "../../assets/icons/arrowRightBlack.svg";
import ArrowDown from "../Icon/ArrowDown";
import HomeIcon from "../Icon/Dashboard/HomeIcon";
import SettingsIcon from "../Icon/Dashboard/SettingsIcon";
import OperatorIcon from "../Icon/Dashboard/OperatorIcon";
import CallIcon from "../Icon/Dashboard/CallIcon";
import { useState } from "react";
import CloseSidebarIcon from "../Icon/CloseSidebar";

const Sidebar = ({ component, setComponent, company }) => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [isHoveredButton, setIsHoveredButton] = useState(false);

  const handleClick = (val) => {
    setComponent(val);
    if (val !== "home" && val !== "operators" && val !== "call_logs") {
      setActiveDropdown(true);
    } else {
      setActiveDropdown(false);
    }
  };
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
          <div
            className={`${styles.item} ${
              component === "home" ? styles.active : ""
            }`}
            onClick={() => handleClick("home")}
          >
            <div className={`${styles.icon}`}>
              <HomeIcon color={component === "home" ? "white" : "#1A6B1F"} />
            </div>
            <div className={`${styles.text}`}>
              <p>Home dashboard</p>
            </div>
          </div>
          <div
            className={`${styles.item} ${
              component === "operators" ? styles.active : ""
            }`}
            onClick={() => {
              handleClick("operators");
            }}
          >
            <div className={`${styles.icon}`}>
              <OperatorIcon
                color={component === "operators" ? "white" : "#1A6B1F"}
              />
            </div>
            <div className={`${styles.text}`}>
              <p>Operators</p>
            </div>
          </div>
          <div
            className={`${styles.item} ${
              component === "call_logs" ? styles.active : ""
            }`}
            onClick={() => handleClick("call_logs")}
          >
            <div className={`${styles.icon}`}>
              <CallIcon
                color={component === "call_logs" ? "white" : "#1A6B1F"}
              />
            </div>
            <div className={`${styles.text}`}>
              <p>Call logs</p>
            </div>
          </div>
          <div
            className={`${styles.item_setting} ${
              component === "settings" ? styles.active : ""
            }`}
            onClick={() => {
              handleClick("settings");
            }}
          >
            <div className={styles.first}>
              <div className={`${styles.icon}`}>
                <SettingsIcon
                  color={component === "settings" ? "white" : "#1A6B1F"}
                />
              </div>
              <div className={`${styles.text}`}>
                <p>Settings</p>
              </div>
            </div>
            <div className={styles.arrow_down}>
              <ArrowDown opacity={activeDropdown ? "1" : "0.3"} />
            </div>
          </div>
          {activeDropdown && (
            <div className={styles.dropdown}>
              <div
                className={`${component === "settings" ? styles.active : ""}`}
                onClick={() => {
                  handleClick("settings");
                }}
              >
                <p>Team members</p>
              </div>
              <div
                className={`${component === "security" ? styles.active : ""}`}
                // onClick={() => {
                //   handleClick("security");
                // }}
              >
                <p>Security</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={styles.container_company_profile}
        onClick={() => setComponent("company")}
      >
        <div className={styles.image}>
          <img src={company.image} alt="" />
        </div>
        <div>
          <div className={styles.top}>
            <p>{company.nickname}</p>
            <div>
              <img src={arrowRight} alt="" />
            </div>
          </div>
          <div className={styles.bottom}>
            <p>Click to see profiles</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
