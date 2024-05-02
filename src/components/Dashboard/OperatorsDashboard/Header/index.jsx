// import UploadCall from "../../Icon/UploadCall";
import styles from "./index.module.scss";

const OperatorHeader = ({ operator }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.photo}>
          <img src={operator?.image} alt="" />
        </div>
        <div className={styles.text}>
          <h4>{operator?.name}</h4>
          <p>{operator?.email}</p>
        </div>
        <div className={styles.availability}>
          <p
            className={`${
              operator.availability == "Available"
                ? styles.available
                : styles.unavailable
            }`}
          >
            {operator.availability}
          </p>
        </div>
      </div>
      {/* <div className={styles.upload}>
        <UploadCall />
        <p>Upload a call</p>
      </div> */}
    </div>
  );
};
export default OperatorHeader;
