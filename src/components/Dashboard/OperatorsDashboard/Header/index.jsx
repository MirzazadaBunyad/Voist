// import UploadCall from "../../Icon/UploadCall";
import styles from "./index.module.scss";

const OperatorHeader = ({ operator }) => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.photo}>
          <img src={operator?.photo ?? "/img/user.png"} alt="" />
        </div>
        <div className={styles.text}>
          <h4>
            {operator && operator?.first_name + " " + operator?.last_name}
          </h4>
          <p>{operator && operator?.email}</p>
        </div>
        <div className={styles.availability}>
          <p
            className={`${
              operator && operator.availability.toLowerCase() == "available"
                ? styles.available
                : styles.unavailable
            }`}
          >
            {operator && operator.availability}
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
