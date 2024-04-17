import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import HeroImg from "../smallComponents/heroImg/HeroImg";
import styles from "./authentication.module.scss";
import gsap from "gsap";
import Login from "./login/Login";
import CreateAccount from "../Authentication/createAccount/CreateAccount";
import { CSSTransition } from "react-transition-group";
import "./animations.scss";
import ForgotPassword from "../Authentication/forgotPassword/Forgotpassword";
import voistLogo from "../../assets/img/voistLogo.svg";
function Authentication() {
  /* login ile Create Accountu deyismek ucun */
  const [show, setShow] = useState(true);
  /* jsap kitabxanasi ucun (animasiyalar) */
  const [tl, setTl] = useState(false);
  /* ekran sagdadn sola gedende qabag Forget passwordu Display none edir  */
  const [forgetPasswordVisible, setForgetPasswordVisible] = useState(false);
  const [showActivation, setShowActivation] = useState(false);
  const handleActivationComplete = () => {
    setShowActivation(false);
  };
  const openForgetPassword = () => {
    if (tl) {
      tl.to(".footer", { xPercent: 78, duration: 0.5, textAlign: "center" })
        .to(".formContainer", { opacity: 0, duration: 0.3 }, "<")
        .to(
          ".heroImg",
          { xPercent: -150, duration: 0.5, yoyo: true, zIndex: 1 },
          "<"
        )
        .to(
          ".logo",
          {
            filter:
              "invert(100%) hue-rotate(0deg) brightness(200%) contrast(100%)",
            duration: 0.5,
            zIndex: 2,
          },
          "<"
        )
        .then(() => {
          setForgetPasswordVisible(true);
        });
    }
  };

  const backToLogin = () => {
    if (tl) {
      tl.to(".footer", { xPercent: 0, duration: 0.5, textAlign: "left" })
        .to(".formContainer", { opacity: 1, duration: 0.3, zIndex: 1 }, "<")
        .to(".heroImg", { xPercent: 0, duration: 0.5, zIndex: 1 }, "<")
        .to(".active", { opacity: 0, duration: 0, xPercent: 0 }, "<")
        .to(".logo", { filter: "none", duration: 0, zIndex: 2 }, "<")
        .then(() => {
          setShow(true);
          setForgetPasswordVisible(false);
        });
    }
  };

  const handleChangeForm = () => {
    setShow(!show);
  };
  useEffect(() => {
    const timeline = gsap.timeline();
    setTl(timeline);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left__side}>
        <header className={styles.headerContainer}>
          <div className={`${styles.logo} logo`}>
            <img src={voistLogo} alt="" />
          </div>
        </header>
        <main className={`${styles.formContainer} formContainer`}>
          <CSSTransition
            in={show}
            timeout={500}
            classNames="login"
            unmountOnExit
          >
            <div className="login">
              <Login
                show={show}
                ChangeComponents={handleChangeForm}
                openForgetPassword={openForgetPassword}
              />
            </div>
          </CSSTransition>

          <CSSTransition
            in={!show}
            timeout={500}
            classNames="CreateAccount"
            unmountOnExit
          >
            <div>
              <CreateAccount
                show={!show}
                ChangeComponents={handleChangeForm}
                backToLogin={() => setShowActivation(false)}
              />
            </div>
          </CSSTransition>
        </main>
        <Footer />
      </div>
      <div className={`${styles.right__side} heroImg`}>
        <HeroImg />
      </div>

      {/*burda Forget Password Form Olacaq  */}
      {forgetPasswordVisible && (
        <div className={`active ${styles.forgetPasswordContainer}`}>
          <ForgotPassword backToLogin={backToLogin} />
        </div>
      )}
    </div>
  );
}
export default Authentication;
