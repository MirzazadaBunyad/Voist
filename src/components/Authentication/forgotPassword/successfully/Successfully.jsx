import React from "react";
import styles from "./successfully.module.scss";
import checkWhiteIcon from "../../../../assets/img/checkWhiteIcon.svg";
import { Link } from "react-router-dom";
function Successfully() {
  return (
    <div className={styles.activation}>
      <div className={styles.checkIcon}>
        <img src={checkWhiteIcon} alt="White check icon" />
      </div>
      <p className={styles.activateHeader}>Password changed succesfully</p>
      <p className={styles.checkEmail}>
        Now you can log in to your account with your new password.
      </p>
      <div className={styles.goHome}>
        <Link>
          <button className={styles.sendButton}>Go home</button>
        </Link>
      </div>
    </div>
  );
}

export default Successfully;
