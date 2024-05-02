import { useEffect, useState } from "react";
import SettingsHeader from "./SettingsHeader";
import SettingsTable from "./SettingsTable";
import styles from "./index.module.scss";
import SettingsModal from "./SettingsModal";

const Settings = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [activeModal]);

  return (
    <div className={styles.container}>
      <SettingsHeader setActiveModal={setActiveModal} />
      <SettingsTable
        setActiveUser={setActiveUser}
        setActiveModal={setActiveModal}
      />
      {activeModal ? (
        <SettingsModal
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          activeUser={activeUser}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Settings;
