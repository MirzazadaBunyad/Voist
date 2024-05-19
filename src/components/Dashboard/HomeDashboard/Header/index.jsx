import styles from "./index.module.scss";
// import filterIcon from "../../../../assets/icons/filterIcon.svg";

const HomeDashboardHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>Welcome to</p>
        <h3>Home dashboard</h3>
      </div>
      {/* <div className={styles.filter}>
        <div>
          <img src={filterIcon} alt="" />
        </div>
        <p>Filter</p>
      </div> */}
    </div>
  );
};

export default HomeDashboardHeader;
