import React, { useState } from "react";
import BackButton from "../../../smallComponents/backButton/BackButton";
import gif from "../../../../assets/img/smile.gif";
import styles from "./newPassword.module.scss";
import checkGreenIcon from "../../../../assets/img/checkGreenIcon.svg";
import checkCrossIcon from "../../../../assets/img/checkCrossIcon.svg";
import checkGrayIcon from "../../../../assets/img/checkGrayIcon.svg";
import eyeClosedIcon from "../../../../assets/img/eyeClosedIcon.svg";
import passwordEye from "../../../../assets/img/passwordEye.svg";
import arrowRightBlack from "../../../../assets/img/arrowRightBlack.svg";

function NewPassword() {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };
  return (
    <div>
      <div>
        <div className={styles.backButton}>
          <BackButton />
        </div>
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
              <input
                className={styles.changePasswordInput}
                type={showPassword1 ? "text" : "password"}
                name="password"
                id="password1"
              />
              <img
                className={styles.passIconImg1}
                onClick={togglePasswordVisibility1}
                src={showPassword1 ? passwordEye : eyeClosedIcon}
                alt="Error"
              />
            </div>
            <div className={styles.repeatePassword}>
              <label className={styles.changePasswordLabel} htmlFor="password2">
                Repeat password*
              </label>
              <input
                className={styles.changePasswordInput}
                type={showPassword2 ? "text" : "password"}
                name="repeatPassword"
                id="password2"
              />
              <img
                className={styles.passIconImg2}
                onClick={togglePasswordVisibility2}
                src={showPassword2 ? passwordEye : eyeClosedIcon}
                alt="Error"
              />
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
                  <button type="submit" className={styles.setPassword}>
                    Set password
                    <img src={arrowRightBlack} alt="Error" />
                  </button>
                </div>
                <div>
                  <button className={styles.cancel}>Cancel</button>
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
