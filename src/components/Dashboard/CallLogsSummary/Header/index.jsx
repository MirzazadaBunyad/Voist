import { formattedTargetDate } from "../../../../helpers/formattedTargetDate";
import CalendarIcon from "../../../Icon/Calendar";
// import CopyIcon from "../../../Icon/CopyIcon";
// import DeleteIcon from "../../Icon/DeleteIcon";
// import DownloadIcon from "../../../Icon/DownloadIcon";
import styles from "./index.module.scss";

const SummaryHeader = ({ data }) => {
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>
          Home / Call logs /{" "}
          <span>
            {data &&
              `${data && data?.operator?.first_name} ${
                data && data?.operator?.last_name
              }`}
          </span>
        </p>
        <div className={styles.profile_detail}>
          <h3>Call ID: {data && data?.id}</h3>
          {/* <p className={`${styles.rude}`}>Rude</p> */}
          <p className={`${styles.intention}`}>
            #{data && data?.intention?.name}
          </p>
        </div>
        <div className={styles.operator_detail}>
          <div className={styles.calendar}>
            <CalendarIcon color="#3D73FF" />
            <p>{formattedTargetDate(data && data.started_at)}</p>
          </div>
          <div className={styles.operatore_field}>
            <img
              src={data && (data?.operator?.image_url ?? "/img/user.png")}
              alt=""
            />
            <p>
              {`${data && data?.operator?.first_name} ${
                data && data?.operator?.last_name
              }`}
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
