import styles from "./index.module.scss";
// import notificationIcon from "../../assets/icons/notificationIcon.svg";
import ArrowDown from "../Icon/ArrowDown";
import AddCircle from "../Icon/AddCircle";
import UserIcon from "../Icon/UserIcon";
import LogoutIcon from "../Icon/LogoutIcon";
import { useState } from "react";
import SearchIcon from "../Icon/SearchIcon";

const Navbar = ({ setComponent, profile }) => {
  const [activeDropdown, setActiveDropdown] = useState(false);
  const [activeLangDropdown, setActiveLangDropdown] = useState({
    open: false,
    name: "Azerbaijani",
  });

  const handleLang = (value) => {
    setActiveLangDropdown((prev) => ({
      ...prev,
      name: value,
    }));
  };
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <div className={styles.search_icon}>
          <SearchIcon />
        </div>
        <input type="text" placeholder="Search..." disabled />
      </div>
      <div className={styles.profile}>
        {/* <div className={styles.notification_icon}>
          <img src={notificationIcon} alt="" />
        </div> */}
        <div
          className={styles.user}
          onClick={() => {
            setActiveDropdown(!activeDropdown);
          }}
        >
          <div className={styles.left}>
            <img src={profile.image} alt="" />
          </div>
          <div className={styles.right}>
            <div>
              <p>
                {profile.name} {profile.surname}
              </p>
              <ArrowDown opacity="1" />
            </div>
            <p>{profile.email}</p>
          </div>
        </div>

        <div
          className={`${styles.dropdown} ${
            activeDropdown ? styles.active : ""
          }`}
        >
          <div>
            <AddCircle />
            <p>Add another account</p>
          </div>
          <div
            onClick={() => {
              setComponent("account");
              setActiveDropdown(!activeDropdown);
            }}
          >
            <UserIcon />
            <p>My account</p>
          </div>
          <div
            className={`${styles.lang} ${
              activeLangDropdown?.open ? styles.active : ""
            }`}
          >
            <div
              className={styles.selected_lang}
              onClick={() => {
                setActiveLangDropdown((prev) => ({
                  ...prev,
                  open: !prev.open,
                }));
              }}
            >
              <div>
                <img src="./img/azerbaijan.png" alt="" />
                <p>{activeLangDropdown?.name}</p>
              </div>
              <div>
                <ArrowDown opacity="1" />
              </div>
            </div>
            <div className={styles.ln}>
              <p onClick={() => handleLang("Azerbaijani")}>Azerbaijani</p>
              <p onClick={() => handleLang("English")}>English</p>
              <p onClick={() => handleLang("Russian")}>Russian</p>
            </div>
          </div>
          <div>
            <LogoutIcon />
            <p>Log out</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
