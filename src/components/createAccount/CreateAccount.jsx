import style from "./createAccount.module.scss";
import img from "../../assets/img/smile.gif";
import rightImg from "../../assets/img/loginImg.jpg";
import inputIcon from "../../assets/img/inputIcon.svg";
import inputMessageIcon from "../../assets/img/inputMessageIcon.svg";
import eyeClosedIcon from "../../assets/img/eyeClosedIcon.svg";
import checkGreenIcon from "../../assets/img/checkGreenIcon.svg";
import checkGrayIcon from "../../assets/img/checkGrayIcon.svg";
import checkCrossIcon from "../../assets/img/checkCrossIcon.svg";
import arrowRightBlack from "../../assets/img/arrowRightBlack.svg";
import arrowRightWhite from "../../assets/img/arrowRightWhite.svg";
import passwordEye from "../../assets/img/passwordEye.svg";
import checkWhiteIcon from "../../assets/img/checkWhiteIcon.svg";
import Footer from "../footer/Footer";
import { useState } from "react";

export default function CreateAccount({ ChangeComponents, show }) {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const goToLogin = () => {
    ChangeComponents();
  };
  function sendInformation(e) {
    e.preventDefault();
  }

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const [showActivation, setShowActivation] = useState(false);
  const [showMain, setShowMain] = useState(true);

  const toggleActivation = () => {
    setShowActivation(!showActivation);
    setShowMain(!showMain);
  };
  return (
    <section className={style.container}>
      <div className={style.loginContainer}>
        <div className={style.headline}></div>
        {showMain && (
          <div className={style.main}>
            <div className={style.accountСreation}>
              <h1>
                Create <span>account</span>
              </h1>
              <div className={style.accountAlready}>
                <p>Already have an account?</p>
                <button onClick={goToLogin} className={style.loginButton}>
                  Login here
                </button>
                <img src={img} alt="smile" loading="lazy" />
              </div>
            </div>

            {/* Form section */}

            <div>
              <form className={style.formContainer} onSubmit={sendInformation}>
                <div className={style.nameSurname}>
                  <div className={style.input}>
                    <label className={style.label} htmlFor="Name">
                      Name*
                    </label>
                    <div className={style.inputShow}>
                      <input type="text" placeholder="Enter name" id="email" />
                      <img src={inputIcon} alt="" />
                    </div>
                  </div>
                  <div className={style.input}>
                    <label className={style.label} htmlFor="password">
                      Surname*
                    </label>
                    <div className={style.inputShow}>
                      <input
                        type="text"
                        id="password"
                        placeholder="Enter surname"
                      />
                      <img src={inputIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className={style.inputEmail}>
                  <label className={style.label} htmlFor="password">
                    E-mail*
                  </label>
                  <input type="email" placeholder="example@company.com" id="" />
                  <img src={inputMessageIcon} alt="" />
                </div>
                <div className={style.nameSurname}>
                  <div className={style.input}>
                    <label className={style.label} htmlFor="Password">
                      Password*
                    </label>
                    <div className={style.inputShow}>
                      <input
                        type={showPassword1 ? "text" : "password"}
                        placeholder="Enter password"
                        id="password1"
                      />
                      <img
                        src={showPassword1 ? passwordEye : eyeClosedIcon}
                        alt=""
                        onClick={togglePasswordVisibility1}
                      />
                    </div>
                  </div>
                  <div className={style.input}>
                    <label className={style.label} htmlFor="password">
                      Repeat password*
                    </label>
                    <div className={style.inputShow}>
                      <input
                        type={showPassword2 ? "text" : "password"}
                        id="password"
                        placeholder="Enter password"
                      />
                      <img
                        src={showPassword2 ? passwordEye : eyeClosedIcon}
                        alt=""
                        onClick={togglePasswordVisibility2}
                      />
                    </div>
                  </div>
                </div>
                <div className={style.characters}>
                  <div>
                    <img src={checkGreenIcon} alt="Green Icon" />
                    <p>Upper and lower case letters</p>
                  </div>
                  <div>
                    <img src={checkCrossIcon} alt="Cross Icon" />
                    <p>
                      At least one number and one character (@!$%& symbols
                      allowed)
                    </p>
                  </div>
                  <div>
                    <img src={checkGrayIcon} alt="Gray Icon" />
                    <p>Between 8 and 72 characters</p>
                  </div>
                </div>
                <div className={style.buttonElement}>
                  <button type="submit">
                    <p>Let’s go</p>
                    <img src={arrowRightBlack} alt="" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showActivation && (
          <div className={style.activation}>
            <div className={style.checkIcon}>
              <img src={checkWhiteIcon} alt="White check icon" />
            </div>
            <p className={style.activateHeader}>Activate your account</p>
            <p className={style.checkEmail}>
              Check your email <span>(ulya@domein.az)</span> to activate your
              recruitee account
            </p>
            <div className={style.sendAgain}>
              <p>Didn’t receive e-mail?</p>
              <button className={style.sendButton}>Send again</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
