import React from "react";
import BackButton from "../../../smallComponents/backButton/BackButton";
import gif from "../../../../assets/img/smile.gif";
import styles from "./newPassword.module.scss";
import checkGreenIcon from "../../../../assets/img/checkGreenIcon.svg";
import checkCrossIcon from "../../../../assets/img/checkCrossIcon.svg";
import checkGrayIcon from "../../../../assets/img/checkGrayIcon.svg";

function NewPassword() {
  return (
    <div>
      <div>
        <BackButton />
        <div className={styles.textContainer}>
          <h2>Set your new password</h2>
          <div>
            <p>Make sure that you will not forget it again</p>
            <span>
              <img src={gif} alt="Error" />
            </span>
          </div>
        </div>
        <form className={styles.ChangePasswordFormContainer}>
          <div className={styles.ChangePasswordInputs}>
            <div>
              <label className={styles.changePasswordLabel} htmlFor="password1">
                Password*
              </label>
              <input  className={styles.changePasswordInput} type="number" name="password" id="password1" />
            </div>
            <div>
              <label className={styles.changePasswordLabel} htmlFor="password2">
                Repeat password*
              </label>
              <input className={styles.changePasswordInput} type="number" name="repeatPassword" id="password2" />
            </div>
          </div>
          <div className={styles.characters}>
            <div>
              <img src={checkGreenIcon} alt="Green Icon" />
              <p>Upper and lower case letters</p>
            </div>
            <div>
              <img src={checkCrossIcon} alt="Cross Icon" />
              <p>
                At least one number and one character (@!$%& symbols allowed)
              </p>
            </div>
            <div>
              <img src={checkGrayIcon} alt="Gray Icon" />
              <p>Between 8 and 72 characters</p>
            </div>
            <div>
              <div className={styles.buttonContainer}>
                <div>
                  <button>Set Password</button>
                </div>
                <div>
                  <button>Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPassword;
