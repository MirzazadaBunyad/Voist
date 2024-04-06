import styles from "./createAccount.module.scss";
import img from "../../../assets/img/smile.gif";
import inputIcon from "../../../assets/img/inputIcon.svg";
import inputMessageIcon from "../../../assets/img/inputMessageIcon.svg";
import eyeClosedIcon from "../../../assets/img/eyeClosedIcon.svg";
import checkGreenIcon from "../../../assets/img/checkGreenIcon.svg";
import checkGrayIcon from "../../../assets/img/checkGrayIcon.svg";
import checkCrossIcon from "../../../assets/img/checkCrossIcon.svg";
import arrowRightBlack from "../../../assets/img/arrowRightBlack.svg";
import passwordEye from "../../../assets/img/passwordEye.svg";
import checkWhiteIcon from "../../../assets/img/checkWhiteIcon.svg";
import { useEffect, useState } from "react";

export default function CreateAccount({ ChangeComponents, show }) {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showActivation, setShowActivation] = useState(false);
  const [showMain, setShowMain] = useState(true);
  const [data, setData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  const goToLogin = () => {
    ChangeComponents();
  };
  const sendInformation = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://0ia78onnye.execute-api.eu-central-1.amazonaws.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            surname: data.surname,
            email: data.email,
            password: data.password,
            confirmPassword: data.confirmPassword,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }

      console.log("Data sent successfully!");
    } catch (error) {
      console.error("Error sending data:", error.message);
    }
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const toggleActivation = () => {
    setShowActivation(!showActivation);
    setShowMain(!showMain);
  };
  return (
    <section className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.headline}></div>
        {showMain && (
          <div className={styles.main}>
            <div className={styles.accountСreation}>
              <h1>
                Create <span>account</span>
              </h1>
              <div className={styles.accountAlready}>
                <p>Already have an account?</p>
                <button onClick={goToLogin} className={styles.loginButton}>
                  Login here
                </button>
                <img src={img} alt="smile" loading="lazy" />
              </div>
            </div>

            {/* Form section */}

            <div>
              <form className={styles.formContainer} onSubmit={sendInformation}>
                <div className={styles.nameSurname}>
                  <div className={styles.input}>
                    <label className={styles.label} htmlFor="Name">
                      Name*
                    </label>
                    <div className={styles.inputShow}>
                      <input
                        type="text"
                        placeholder="Enter name"
                        id="EnterName"
                        value={data.name}
                        name="name"
                        onChange={handleChange}
                      />

                      <img src={inputIcon} alt="" />
                    </div>
                  </div>
                  <div className={styles.input}>
                    <label className={styles.label} htmlFor="password">
                      Surname*
                    </label>
                    <div className={styles.inputShow}>
                      <input
                        type="text"
                        id="EnterSurname"
                        placeholder="Enter surname"
                        value={data.surname}
                        name="surname"
                        onChange={handleChange}
                      />

                      <img src={inputIcon} alt="" />
                    </div>
                  </div>
                </div>
                <div className={styles.inputEmail}>
                  <label className={styles.label} htmlFor="password">
                    E-mail*
                  </label>
                  <input
                    type="email"
                    placeholder="example@company.com"
                    id="EnterEmail"
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                  />

                  <img src={inputMessageIcon} alt="" />
                </div>
                <div className={styles.nameSurname}>
                  <div className={styles.input}>
                    <label className={styles.label} htmlFor="Password">
                      Password*
                    </label>
                    <div className={styles.inputShow}>
                      <input
                        type={showPassword1 ? "text" : "password"}
                        placeholder="Enter password"
                        id="password"
                        value={data.password}
                        name="password"
                        onChange={handleChange}
                      />

                      <img
                        src={showPassword1 ? passwordEye : eyeClosedIcon}
                        alt=""
                        onClick={togglePasswordVisibility1}
                      />
                    </div>
                  </div>
                  <div className={styles.input}>
                    <label className={styles.label} htmlFor="password">
                      Repeat password*
                    </label>
                    <div className={styles.inputShow}>
                      <input
                        type={showPassword2 ? "text" : "password"}
                        id="confirmPassword"
                        placeholder="Enter password"
                        value={data.confirmPassword}
                        name="confirmPassword"
                        onChange={handleChange}
                      />

                      <img
                        src={showPassword2 ? passwordEye : eyeClosedIcon}
                        alt=""
                        onClick={togglePasswordVisibility2}
                      />
                    </div>
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
                      At least one number and one character (@!$%& symbols
                      allowed)
                    </p>
                  </div>
                  <div>
                    <img src={checkGrayIcon} alt="Gray Icon" />
                    <p>Between 8 and 72 characters</p>
                  </div>
                </div>
                <div className={styles.buttonElement}>
                  <button onClick={toggleActivation} type="submit">
                    <p>Let’s go</p>
                    <img
                      className={styles.arrowRight}
                      src={arrowRightBlack}
                      alt="Error"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showActivation && (
          <div className={styles.activation}>
            <div className={styles.checkIcon}>
              <img src={checkWhiteIcon} alt="White check icon" />
            </div>
            <p className={styles.activateHeader}>Activate your account</p>
            <p className={styles.checkEmail}>
              Check your email <span>(ulya@domein.az)</span> to activate your
              recruitee account
            </p>
            <div className={styles.sendAgain}>
              <p>Didn’t receive e-mail?</p>
              <button className={styles.sendButton}>Send again</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
