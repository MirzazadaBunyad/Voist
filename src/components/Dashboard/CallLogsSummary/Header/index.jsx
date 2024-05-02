import CalendarIcon from "../../../Icon/Calendar";
// import CopyIcon from "../../../Icon/CopyIcon";
// import DeleteIcon from "../../Icon/DeleteIcon";
// import DownloadIcon from "../../../Icon/DownloadIcon";
import styles from "./index.module.scss";

const SummaryHeader = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>
          Home / Call logs / <span>Ulviyya Imamova</span>
        </p>
        <div className={styles.profile_detail}>
          <h3>Call ID: {data?.call_id}</h3>
          <p className={`${styles.rude}`}>Rude</p>
          <p className={`${styles.intention}`}>#{data?.call_intention}</p>
        </div>
        <div className={styles.operator_detail}>
          <div className={styles.calendar}>
            <CalendarIcon color="#3D73FF" />
            <p>
              {data.date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
          <div className={styles.operatore_field}>
            <img src={data?.operator?.image} alt="" />
            <p>
              Operator <span>{data?.operator?.name}</span>
            </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.right}>
        <DownloadIcon />
        <CopyIcon />
        <DeleteIcon />
      </div> */}
    </div>
  );
};

export default SummaryHeader;
