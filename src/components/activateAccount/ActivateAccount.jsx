import React, { useRef, useState } from "react";
import styles from "./activateAccount.module.scss";
import checkWhiteIcon from "../../assets/img/checkWhiteIcon.svg";
import arrowRightBlack from "../../assets/img/arrowRightBlack.svg";

function ActivateAccount({ data }) {
  const [inputs, setInputs] = useState(["", "", "", "", "", ""]);

  const handleSubmit = async (e) => {
    e && e.preventDefault();
    const combinedInputs = inputs.join("");

    try {
      const response = await fetch(
        `https://safaraliyev.live/api/user/verify/${combinedInputs}/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }

      console.log("Data sent successfully!");
      setActivationCodeSent(true);
      setShowActivation(true);
    } catch (error) {
      console.error("Error sending data:", error.message);
      // Add error handling logic here
    }
  };
  const input1 = useRef(null),
    input2 = useRef(null),
    input3 = useRef(null),
    input4 = useRef(null),
    input5 = useRef(null),
    input6 = useRef(null);

  function handleInput(event, index) {
    const value = event.target.value;
    const maxLength = parseInt(event.target.getAttribute("maxlength"));

    if (value.length <= maxLength) {
      setInputs((prevInputs) => {
        const newInputs = [...prevInputs];
        newInputs[index] = value;
        return newInputs;
      });

      if (index < 5) {
        if (value.length >= maxLength) {
          if (index === 0) {
            input2.current.focus();
          } else if (index === 1) {
            input3.current.focus();
          } else if (index === 2) {
            input4.current.focus();
          } else if (index === 3) {
            input5.current.focus();
          } else if (index === 4) {
            input6.current.focus();
          }
        }
      }
    }
  }
  return (
    <div className={styles.activation}>
      <div className={styles.checkIcon}>
        <img src={checkWhiteIcon} alt="White check icon" />
      </div>
      <p className={styles.activateHeader}>Activate your account</p>
      <p className={styles.checkEmail}>
        Check your email <span>({data.email})</span> to activate your recruitee
        account
      </p>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          {inputs.map((value, index) => (
            <input
              key={index}
              className={styles.LoginInput}
              type="number"
              id="belowInput"
              name="number"
              placeholder="•"
              ref={
                index === 0
                  ? input1
                  : index === 1
                  ? input2
                  : index === 2
                  ? input3
                  : index === 3
                  ? input4
                  : index === 4
                  ? input5
                  : input6
              }
              maxLength={1}
              value={value}
              onChange={(e) => handleInput(e, index)}
            />
          ))}
        </div>
        <div className={styles.buttonElement}>
          <button type="submit" className={styles.sendButton}>
            Confirm Verification <img src={arrowRightBlack} alt="Error" />
          </button>
        </div>
      </form>
      <div className={styles.sendAgain}>
        <p>Didn’t receive e-mail?</p>
        <button className={styles.sendAgainButton}>Send again</button>
      </div>
    </div>
  );
}

export default ActivateAccount;
