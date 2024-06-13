import { useLocation } from "react-router-dom";
import Footer from "../footer/Footer";
import HeroImg from "../smallComponents/heroImg/HeroImg";
import styles from "./authentication.module.scss";
import CreateAccount from "./createAccount/CreateAccount";
import Login from "./login/Login";
import checkCrossIcon from "../../assets/img/checkCrossIcon.svg";
import logo from "../../assets/img/voistLogo.svg";
import { CSSTransition } from "react-transition-group";
import "./animations.scss";
function Authentication() {
  const location = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.left__side}>

        <header className={styles.logo}>
          <img src={logo} alt="Error" />
        </header>

        <main className={`${styles.formContainer} formContainer`}>

          <div className={styles.mobileInfo}>
            <img src={checkCrossIcon} alt="Cross icon" />
            <div className={styles.mobileInfoText}>
              <h2 className={styles.title}> Currently, the current version does not support mobile devices. </h2>
            </div>
          </div>
          <CSSTransition
            in={location.pathname === '/authentication/createaccount'}
            timeout={300}
            classNames="CreateAccount"
            unmountOnExit
            key="CreateAccount"
          >
            <CreateAccount />
          </CSSTransition>
          <CSSTransition
            in={location.pathname === '/authentication/login'}
            timeout={300}
            classNames="login"
            unmountOnExit
            key="login"
          >
            <Login />
          </CSSTransition>
        </main>
        <Footer />
      </div>
      <div className={`${styles.right__side} heroImg`}>
        <HeroImg />
      </div>
    </div>

  );
}

export default Authentication;