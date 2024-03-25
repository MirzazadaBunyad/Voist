import img from "../../../assets/img/smile.gif";
import inputMessageIcon from "../../../assets/img/inputMessageIcon.svg";
import arrowRightBlack from "../../../assets/img/arrowRightBlack.svg";
import styles from "../sendToEmail/sendToEmail.module.scss";
import BackButton from "../../backButton/BackButton";
function SendToEmail({
  handleClickToLogin,
  toggleActivation,
  sendInformation,
}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.backButton}>
          <BackButton />
        </div>

        <div className={styles.accountСreation}>
          <h1>Let’s change the password</h1>
          <div className={styles.accountAlready}>
            <p>Enter your email first</p>
            <img src={img} alt="smile" loading="lazy" />
          </div>
          <form className={styles.formContainer} onSubmit={sendInformation}>
            <div className={styles.inputEmail}>
              <label className={styles.label} htmlFor="password">
                E-mail*
              </label>
              <input type="email" placeholder="example@company.com" id="" />
              <img src={inputMessageIcon} alt="" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default SendToEmail;
