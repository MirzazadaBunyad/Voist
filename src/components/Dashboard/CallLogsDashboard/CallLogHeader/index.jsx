// import UploadCall from "../../Icon/UploadCall";
import styles from "./index.module.scss";
const CallLogHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>Home / Call logs</p>
        <h3>Call logs</h3>
      </div>
      {/* <div className={styles.upload}>
        <UploadCall />
        <p>Upload a new call</p>
      </div> */}
    </div>
  );
};

export default CallLogHeader;
