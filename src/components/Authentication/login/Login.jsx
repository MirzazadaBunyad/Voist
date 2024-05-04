import { useState } from "react";
import styles from "./login.module.scss";
import smile from "../../../assets/img/smile.gif";
import eyeClosedIcon from "../../../assets/img/eyeClosedIcon.svg";
import inputMessageIcon from "../../../assets/img/inputMessageIcon.svg";
import ayeOpen from "../../../assets/img/passwordEye.svg";
import arrowRightBlack from "../../../assets/img/arrowRightBlack.svg";
import { Link } from "react-router-dom";

export default function Login({ openForgetPassword, ChangeComponents }) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isTyping, setIsTyping] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setIsTyping(true);
  };

  const validatePassword = () => {
    return formData.password.length >= 8;
  };

  const sendInformation = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return;
    }

    if (!isValidEmail(formData.email)) {
      console.log("Invalid email format");
      return;
    }

    if (!validatePassword()) {
      alert("Password must be at least 8 characters long");
      return;
    }

    try {
      const response = await fetch("https://safaraliyev.live/api/user/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }

      console.log("Data sent successfully!");
    } catch (error) {
      console.error("Error sending data:", error.message);
    }

    setIsTyping(false);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const goToCreateAccount = () => {
    ChangeComponents();
  };

  const handleChangeForgetPassword = () => {
    openForgetPassword();
  };

  return (
    <section className={styles.container}>
      <main className={styles.info__main}>
        <div className={styles.login__header}>
          <h1 className={styles.headLine}>
            Hey there,<span>welcome</span> <br /> to voist!
          </h1>
          <div className={styles.accountСreation}>
            <p className={styles.accountСreationText}>
              Don't you have an account?
            </p>
            <span className={styles.accountСreationBtn}>
              <button className={styles.createBtn} onClick={goToCreateAccount}>
                Create account
              </button>
            </span>
            <img className={styles.smile} src={smile} alt="Smile" />
          </div>
        </div>
        <form
          className={styles.form}
          action="Submit"
          onSubmit={sendInformation}
        >
          <div className={styles.inputBox}>
            <label className={styles.loginLabel} htmlFor="email">
              E-mail*
            </label>
            <div
              className={`${styles.LoginInput} ${
                isTyping && !isValidEmail(formData.email) ? styles.invalid : ""
              }`}
            >
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <img
              className={styles.inputMessageIcon}
              src={inputMessageIcon}
              alt="Error"
            />
          </div>
          <div className={styles.password}>
            <label className={styles.loginLabel} htmlFor="password">
              Password*
            </label>
            <input
              className={styles.LoginInput}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            <img
              className={styles.passwordIcon}
              onClick={handleShowPassword}
              src={showPassword ? ayeOpen : eyeClosedIcon}
              alt="error"
            />
          </div>
          <div className={styles.rememberMe}>
            <div className={styles.rememberMeContainer}>
              <input
                className={styles.rememberMeInput}
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
              />
              <label className={styles.rememberMeLabel} htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            <div className={styles.forgotPasswordContainer}>
              <button
                onClick={handleChangeForgetPassword}
                className={styles.forgotPassword}
              >
                Forgot password?
              </button>
            </div>
          </div>
          <div className={styles.button}>
            <Link to="/dashboard" type="Submit" className={styles.buttonElement}>
              Let's go
              <img src={arrowRightBlack} alt="" />
            </Link>
          </div>
        </form>
      </main>
    </section>
  );
}
