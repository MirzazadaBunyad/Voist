import BackButton from "../../../smallComponents/backButton/BackButton";
import styles from "./codeBelow.module.scss";
import img from "../../../../assets/img/smile.gif";
import arrowRightBlack from "../../../../assets/img/arrowRightBlack.svg";
import { useRef, useState } from "react";

function CodeBelow({ handleClickToChange, handleGoBack, backToLogin }) {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState(["", "", "", ""]);

  const input1 = useRef(null),
    input2 = useRef(null),
    input3 = useRef(null),
    input4 = useRef(null);

  function handleInput(event, index) {
    const value = event.target.value;
    const maxLength = parseInt(event.target.getAttribute("maxlength"));

    if (value.length <= maxLength) {
      setInputs((prevInputs) => {
        const newInputs = [...prevInputs];
        newInputs[index] = value;
        return newInputs;
      });

      if (value.length >= maxLength && index < 3) {
        if (index === 0) {
          input2.current.focus();
        } else if (index === 1) {
          input3.current.focus();
        } else if (index === 2) {
          input4.current.focus();
        }
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClickToChange();
    const combinedInputs = inputs.join("");
    console.log(combinedInputs);
  };

  return (
    <div className={styles.container}>
      <div className={styles.backButton} onClick={handleGoBack}>
        <BackButton />
      </div>

      <div className={styles.accountСreation}>
        <h1>Enter the code below</h1>
        <div className={styles.accountAlready}>
          <p>OTP code sent to ulya@company domain.com</p>
          <img src={img} className={styles.smile} alt="smile" loading="lazy" />
        </div>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            {inputs.map((value, index) => (
              <input
                key={index}
                className={styles.LoginInput}
                type="number"
                id={`belowInput-${index}`}
                name="number"
                placeholder="•"
                ref={
                  index === 0
                    ? input1
                    : index === 1
                    ? input2
                    : index === 2
                    ? input3
                    : input4
                }
                maxLength={1}
                value={value}
                onChange={(e) => handleInput(e, index)}
              />
            ))}
          </div>
          <div className={styles.buttonElement}>
            <button type="submit" className={styles.sendButton}>
              Send code
              <img src={arrowRightBlack} alt="Error" />
            </button>
            <button onClick={backToLogin} className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CodeBelow;
