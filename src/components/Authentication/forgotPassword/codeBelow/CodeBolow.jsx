import BackButton from "../../../smallComponents/backButton/BackButton";
import styles from "./codeBelow.module.scss";
import img from "../../../../assets/img/smile.gif";
import arrowRightBlack from "../../../../assets/img/arrowRightBlack.svg";

function CodeBelow({ handleClickToChange, sendInformation }) {
  const handleGoBack = () => {
    handleClickToChange();
  };

  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <BackButton />
      </div>

      <div className={styles.accountСreation}>
        <h1>Enter the the code below</h1>
        <div className={styles.accountAlready}>
          <p>OTP code sent to ulya@company domein.com</p>
          <img src={img} className={styles.smile} alt="smile" loading="lazy" />
        </div>
        <form className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <input
              className={styles.LoginInput}
              type="number"
              id=""
              name="number"
              placeholder="•"
            />
            <input
              className={styles.LoginInput}
              type="number"
              id=""
              name="number"
              placeholder="•"
            />
            <input
              className={styles.LoginInput}
              type="number"
              id=""
              name="number"
              placeholder="•"
            />
            <input
              className={styles.LoginInput}
              type="number"
              id=""
              name="number"
              placeholder="•"
            />
          </div>
          <div className={styles.buttonElement}>
            <button type="submit" className={styles.sendButton}>
              Send code
              <img src={arrowRightBlack} alt="Error" />
            </button>

            <button className={styles.cancelButton}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CodeBelow;
