import BackButton from "../../../smallComponents/backButton/BackButton";
import styles from "./codeBelow.module.scss";
import img from "../../../../assets/img/smile.gif";
import arrowRightBlack from "../../../../assets/img/arrowRightBlack.svg";
import { useState } from "react";
import OTPInput from "react-otp-input";

function CodeBelow({
  handleClickToChange,
  handleGoBack,
  backToLogin,
  sendInformation,
}) {
  const [otp, setOtp] = useState('');

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
          <p>OTP code sent to {sendInformation.input} </p>
          <img src={img} className={styles.smile} alt="smile" loading="lazy" />
        </div>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderInput={(props) => <input {...props} className={styles.LoginInput} placeholder="•" inputMode="numeric" />}
            />

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
