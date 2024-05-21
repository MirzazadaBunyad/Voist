import styles from "./activateAccount.module.scss";
import checkWhiteIcon from "../../assets/img/checkWhiteIcon.svg";

function ActivateAccount({ data }) {
  return (
    <div className={styles.activation}>
      <div className={styles.checkIcon}>
        <img src={checkWhiteIcon} alt="White check icon" />
      </div>
      <p className={styles.activateHeader}>Activate your account</p>
      <p className={styles.checkEmail}>
        Check your email <span>({data.email})</span> to activate your recruitee
        account
      </p>
      <div className={styles.sendAgain}>
        <p>Didn’t receive e-mail?</p>
        <button className={styles.sendAgainButton}>Send again</button>
      </div>
    </div>
  );
}

export default ActivateAccount;
