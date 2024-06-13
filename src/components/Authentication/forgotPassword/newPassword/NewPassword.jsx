import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password1 === password2 && validatePassword(password1)) {
      navigate("/forgotPassword/successfully");
    } else {
      alert("Passwords do not match or do not meet the criteria");
    }
  };

  const validatePassword = (password) => {
    const lengthCheck = password.length >= 8 && password.length <= 72;
    const upperLowerCheck = /[a-z]/.test(password) && /[A-Z]/.test(password);
    const numberSymbolCheck = /[0-9]/.test(password) && /[@!$%&]/.test(password);
    return lengthCheck && upperLowerCheck && numberSymbolCheck;
  };

  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <BackButton link={"/forgotPassword/CodeBelow"} />
      </div>
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.title}>Set your new password</h2>
          <div className={styles.subtitle}>
            <p className={styles.text}>
              Make sure that you will not forget it again
            </p>
            <span className={styles.smileContainer}>
              <img className={styles.smile} src={gif} alt="Smile" />
            </span>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className={styles.ChangePasswordFormContainer}
        >
          <div className={styles.ChangePasswordInputs}>
            <div className={styles.newPasswordInputs__item}>
              <label
                className={styles.changePasswordLabel}
                htmlFor="password1"
              >
                Password*
              </label>
              <input
                className={styles.changePasswordInput}
                type={showPassword1 ? "text" : "password"}
                name="password"
                id="password1"
                placeholder="Enter password"
                autoComplete="new-password"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
              <img
                className={styles.passIconImg1}
                onClick={togglePasswordVisibility1}
                src={showPassword1 ? passwordEye : eyeClosedIcon}
                alt="Toggle visibility"
              />
            </div>
            <div className={styles.newPasswordInputs__item}>
              <label
                className={styles.changePasswordLabel}
                htmlFor="password2"
              >
                Repeat password*
              </label>
              <input
                className={styles.changePasswordInput}
                type={showPassword2 ? "text" : "password"}
                name="repeatPassword"
                id="password2"
                placeholder="Enter password"
                autoComplete="new-password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
              <img
                className={styles.passIconImg2}
                onClick={togglePasswordVisibility2}
                src={showPassword2 ? passwordEye : eyeClosedIcon}
                alt="Toggle visibility"
              />
            </div>
          </div>
          <div className={styles.characters}>
            <div>
              <img src={validatePassword(password1) ? checkGreenIcon : checkGrayIcon} alt="Check icon" />
              <p>Upper and lower case letters</p>
            </div>
            <div>
              <img src={validatePassword(password1) ? checkGreenIcon : checkCrossIcon} alt="Check icon" />
              <p>At least one number and one character (@!$%& symbols allowed)</p>
            </div>
            <div>
              <img src={validatePassword(password1) ? checkGreenIcon : checkGrayIcon} alt="Check icon" />
              <p>Between 8 and 72 characters</p>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.setPassword}>
              Set password
              <img src={arrowRightBlack} alt="Arrow right" />
            </button>
            <Link to={"/authentication/login"} className={styles.cancel}>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewPassword;
