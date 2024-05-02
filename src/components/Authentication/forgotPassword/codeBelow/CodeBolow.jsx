import BackButton from "../../../smallComponents/backButton/BackButton";
import styles from "./codeBelow.module.scss";
import img from "../../../../assets/icons/smile.gif";
import arrowRightBlack from "../../../../assets/icons/arrowRightBlack.svg";
import { useRef, useState } from "react";

function CodeBelow({ handleClickToChange }) {
  const [show, setShow] = useState(false);

  const input1 = useRef(null),
    input2 = useRef(null),
    input3 = useRef(null),
    input4 = useRef(null);
  function handleInput(event) {
    const maxLength = parseInt(event.target.getAttribute("maxlength"));
    if (event.target.value.length >= maxLength) {
      input1.current.focus();
      if (event.target === input1.current) {
        input2.current.focus();
      } else if (event.target === input2.current) {
        input3.current.focus();
      } else if (event.target === input3.current) {
        input4.current.focus();
      }
    }
  }
  const handleClickToNewPassword = () => {};

  const handleGoBack = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickToChange();
  };
  return (
    <div className={styles.container}>
      <div className={styles.backButton} onClick={handleGoBack}>
        <BackButton />
      </div>

      <div className={styles.accountСreation}>
        <h1>Enter the the code below</h1>
        <div className={styles.accountAlready}>
          <p>OTP code sent to ulya@company domein.com</p>
          <img src={img} className={styles.smile} alt="smile" loading="lazy" />
        </div>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              className={styles.LoginInput}
              type="number"
              id=""
              name="number"
              placeholder="•"
              ref={input1}
              maxLength={1}
              onInput={handleInput}
            />
            <input
              className={styles.LoginInput}
              type="number"
              id=""
              name="number"
              placeholder="•"
              ref={input2}
              maxLength={1}
              onInput={handleInput}
            />
            <input
              className={styles.LoginInput}
              type="number"
              id=""
              name="number"
              placeholder="•"
              ref={input3}
              maxLength={1}
              onInput={handleInput}
            />
            <input
              className={styles.LoginInput}
              type="number"
              id=""
              name="number"
              placeholder="•"
              ref={input4}
              maxLength={1}
            />
          </div>
          <div className={styles.buttonElement}>
            <button type="submit" className={styles.sendButton}>
              Send code
              <img src={arrowRightBlack} alt="Error" />
            </button>

            <button onClick={handleGoBack} className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CodeBelow;
