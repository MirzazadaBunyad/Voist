import BackButton from "../../../smallComponents/backButton/BackButton";
import styles from "./codeBelow.module.scss";
import img from "../../../../assets/img/smile.gif";
import arrowRightBlack from "../../../../assets/img/arrowRightBlack.svg";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";

function CodeBelow({ sendInformation }) {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const combinedInputs = otp;


    console.log(combinedInputs);
    navigate("/forgotPassword/NewPassword");
  };

  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <BackButton link={"/forgotPassword/SendToEmail"} />
      </div>

      <div className={styles.accountСreation}>
        <h1>Enter the code below</h1>
        <div className={styles.accountAlready}>
          <p>OTP code sent to {sendInformation.input}</p>
          <img src={img} className={styles.smile} alt="smile" loading="lazy" />
        </div>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderInput={(props) => <input {...props} className={styles.LoginInput} placeholder="•" inputMode="numeric" />}
              inputType="number"
            />
          </div>
          <div className={styles.buttonElement}>
            <button type="submit" className={styles.sendButton}>
              Continue
              <img src={arrowRightBlack} alt="Error" />
            </button>
            <Link to={"/authentication/login"} className={styles.cancelButton}>
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CodeBelow;
