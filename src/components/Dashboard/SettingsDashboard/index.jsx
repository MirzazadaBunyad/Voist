import { useEffect, useState } from "react";
import SettingsHeader from "./SettingsHeader";
import SettingsTable from "./SettingsTable";
import styles from "./index.module.scss";
import SettingsModal from "./SettingsModal";
import axios from "axios";

const Settings = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState({
    admins: [],
    operators: [],
  });

  useEffect(() => {
    if (activeModal) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [activeModal]);

  useEffect(() => {
    const getMembers = async () => {
      let query = "";
      if (searchValue.length > 0) {
        query += `?search=${searchValue}`;
      }
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/company/members/all${query}`
        );
        const adminsWithRole = (response?.data?.admins ?? []).map((admin) => ({
          ...admin,
          role: "admin",
        }));

        const operatorsWithRole = (response?.data?.operators ?? []).map(
          (operator) => ({
            ...operator,
            role: "operator",
          })
        );

        setData({
          admins: adminsWithRole,
          operators: operatorsWithRole,
        });
      } catch (error) {
        console.log(error);
      }
    };

    getMembers();
  }, [searchValue]);

  return (
    <div className={styles.container}>
      <SettingsHeader setActiveModal={setActiveModal} />
      <SettingsTable
        members={data}
        setActiveUser={setActiveUser}
        setActiveModal={setActiveModal}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
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
