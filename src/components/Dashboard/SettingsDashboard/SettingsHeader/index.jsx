import { useState } from "react";
import PlusIcon from "../../../Icon/PlusIcon";
import styles from "./index.module.scss";
const SettingsHeader = ({ setActiveModal }) => {
  const [isHoveredButton, setIsHoveredButton] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Home / Settings / Call logs</p>
        <h3>Team members</h3>
      </div>
      <div
        className={styles.upload}
        onMouseEnter={() => setIsHoveredButton(true)}
        onMouseLeave={() => setIsHoveredButton(false)}
        onClick={() => setActiveModal("add")}
      >
        <PlusIcon color={isHoveredButton ? "#fff" : "black"} />
        <p>Add a member</p>
      </div>
    </div>
  );
};

export default SettingsHeader;
