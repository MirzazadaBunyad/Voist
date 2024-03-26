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
  const [inputValue, setInputValue] = useState(initialData.input || "");

  useEffect(() => {
    setInputValue(initialData.input || "");
  }, [initialData]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setSendInformation({ ...initialData, input: inputValue });
      handleClickToChange();
      initialData.input = inputValue;
      console.log(initialData);
    }
  };
  const handleCancel = (e) => {
    e.preventDefault(); // Предотвращаем отправку формы
    handleClickToLogin(); // Вызываем функцию для возврата к предыдущему экрану
  };
  return (
    <>
      <div className={styles.container}>
        <div onClick={handleCancel} className={styles.backButton}>
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
                className={styles.LoginInput}
                type="email"
                id="email"
                name="email"
                placeholder="example@company.com"
                value={inputValue}
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
