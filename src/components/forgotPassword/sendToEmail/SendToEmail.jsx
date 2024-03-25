import React, { useState, useEffect } from "react";
import img from "../../../assets/img/smile.gif";
import inputMessageIcon from "../../../assets/img/inputMessageIcon.svg";
import arrowRightBlack from "../../../assets/img/arrowRightBlack.svg";
import styles from "../sendToEmail/sendToEmail.module.scss";
import BackButton from "../../backButton/BackButton";

function SendToEmail({
  handleClickToLogin,
  handleClickToChange,
  setSendInformation,
  initialData,
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(initialData.input1);
  }, [initialData]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSendInformation({ ...initialData, input1: value });
    handleClickToChange();
  };

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
            <img
              src={img}
              className={styles.smile}
              alt="smile"
              loading="lazy"
            />
          </div>
          <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div>
              <label className={styles.loginLabel} htmlFor="email">
                Email*
              </label>
              <input
                autoComplete="off"
                className={styles.LoginInput}
                type="email"
                id="email"
                name="email"
                placeholder="example@company.com"
                value={value}
                onChange={handleChange}
              />
              <img
                className={styles.inputMessageIcon}
                src={inputMessageIcon}
                alt="Error"
              />
            </div>
            <div className={styles.buttonElement}>
              <button type="submit" className={styles.sendButton}>
                Send code
                <img src={arrowRightBlack} alt="Error" />
              </button>
              <button
                onClick={handleClickToLogin}
                className={styles.cancelButton}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SendToEmail;
