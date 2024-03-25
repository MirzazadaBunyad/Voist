import styles from "./login.module.scss";
import smile from "../../assets/img/smile.gif";
import eyeClosedIcon from "../../assets/img/eyeClosedIcon.svg";
import inputMessageIcon from "../../assets/img/inputMessageIcon.svg";
import ayeOpen from "../../assets/img/passwordEye.svg";
import arrowRightBlack from "../../assets/img/arrowRightBlack.svg";
import { useState } from "react";

export default function Login({ openForgetPassword, ChangeComponents }) {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  const goToCreateAccount = () => {
    ChangeComponents();
  };
  function handleSubmit(e) {
    e.preventDefault();
  }
  const handleChangeForgetPasword = () => {
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
            <p>Don't you have an account?</p>
            <span>
              <button onClick={goToCreateAccount}>Create account</button>
            </span>
            <img className={styles.smile} src={smile} alt="Smile" />
          </div>
        </div>
        <form className={styles.form} action="Submit" onSubmit={handleSubmit}>
          <div className={styles.email}>
            <label className={styles.loginLabel} htmlFor="email">
              E-mail*
            </label>
            <input
              className={styles.LoginInput}
              type="email"
              id="email"
              name="email"
              placeholder="example@company.com"
            />
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
            />
            <img
              className={styles.passwordIcon}
              onClick={handleShowPassword}
              src={showPassword ? ayeOpen : eyeClosedIcon}
              alt="error"
            />
          </div>
          <div className={styles.rememberMe}>
            <div>
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

            <div>
              <button
                onClick={handleChangeForgetPasword}
                className={styles.forgotPassword}
              >
                Forgot password?
              </button>
            </div>
          </div>

          <div>
            <button type="Submit" className={styles.buttonElement}>
              Let's go
              <img src={arrowRightBlack} alt="" />
            </button>
          </div>
        </form>
      </main>
    </section>
  );
}
