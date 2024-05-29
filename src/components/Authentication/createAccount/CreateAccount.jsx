import { useState } from "react";
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
import ActivateAccount from "../../activateAccount/ActivateAccount";

const CreateAccount = ({ ChangeComponents, show /* , backToLogin */ }) => {
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showActivation, setShowActivation] = useState(false);
  const [activationCodeSent, setActivationCodeSent] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e && e.preventDefault();

    if (data.password !== data.confirm_password) {
      setPasswordError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://46.101.152.88:8000/api/v1/auth/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.password,
          }),
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
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setIsTyping(true);

    if (name === "email") {
      setEmailValid(isValidEmail(value));
      setEmailError(isValidEmail(value) ? "" : "Invalid email format");
    }
    if (name === "password" || name === "confirm_password") {
      if (data.password !== data.confirm_password) {
        setPasswordError("Passwords do not match");
      } else {
        setPasswordError("");
      }
    }
  };

  const goToLogin = () => {
    ChangeComponents();
  };

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  return (
    <section className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.headline}></div>
        {show && !showActivation && (
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
            <form className={styles.formContainer} onSubmit={handleSubmit}>
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
                      value={data.first_name}
                      name="first_name"
                      onChange={handleChange}
                      autoComplete="given-name"
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
                      value={data.last_name}
                      name="last_name"
                      onChange={handleChange}
                      autoComplete="family-name"
                    />
                    <img src={inputIcon} alt="" />
                  </div>
                </div>
              </div>
              <div className={styles.inputEmail}>
                <label className={styles.label} htmlFor="password">
                  E-mail*
                </label>
                <div
                  className={`${styles.inputE} ${isTyping && !emailValid ? styles.invalid : ""
                    }`}
                >
                  <input
                    type="email"
                    placeholder="example@company.com"
                    id="EnterEmail"
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>
                <img src={inputMessageIcon} alt="" />
                {!emailValid && <p className={styles.error}>{emailError}</p>}
              </div>
              <div className={styles.nameSurname}>
                <div className={styles.input}>
                  <label className={styles.label} htmlFor="password">
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
                      value={data.confirm_password}
                      name="confirm_password"
                      onChange={handleChange}
                    />
                    <img
                      src={showPassword2 ? passwordEye : eyeClosedIcon}
                      alt=""
                      onClick={togglePasswordVisibility2}
                    />
                  </div>
                  {/* {passwordError && <p className={styles.error}>{passwordError}</p>} */}
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
                <button className={styles.letsGoButton} type="submit">
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
        )}
        {showActivation && activationCodeSent && (
          <ActivateAccount
            data={data}
            backToLogin={() => setShowActivation(false)}
            goToLogin={goToLogin}
          />
        )}
      </div>
    </section>
  );
};

export default CreateAccount;
