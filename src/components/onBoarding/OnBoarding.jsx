// import { useEffect, useState } from "react";
import Footer from "../footer/Footer";
import styles from "./onBoarding.module.scss";
// import gsap from "gsap";
// import Login from "../components/login/login";
// import CreateAccount from "../components/createAccount/CreateAccount";
import { CSSTransition } from "react-transition-group";
// import ForgotPassword from "../components/forgotPassword/Forgotpassword";
import voistWhiteLogo from "../../assets/img/voistWhiteLogo.svg";
import ConfigureAccount from "./configureAccount/configureAccount";
import HeroImg from "../smallComponents/heroImg/HeroImg";
function OnBoarding() {
  /* login ile Create Accountu deyismek ucun */
  //   const [show, setShow] = useState(true);
  /* jsap kitabxanasi ucun (animasiyalar) */
  //   const [tl, setTl] = useState(false);
  /* ekran sagdadn sola gedende qabag Forget passwordu Display none edir  */
  //   const [forgetPasswordVisible, setForgetPasswordVisible] = useState(false);
  //   const openForgetPassword = () => {
  //     if (tl) {
  //       tl.to(".footer", { xPercent: 53, duration: 0.5, textAlign: "center" })
  //         .to(".formContainer", { opacity: 0, duration: 0.3 }, "<")
  //         .to(
  //           ".heroImg",
  //           { xPercent: -150, duration: 0.5, yoyo: true, zIndex: 1 },
  //           "<"
  //         )
  //         .to(
  //           ".logo",
  //           {
  //             filter:
  //               "invert(100%) hue-rotate(0deg) brightness(200%) contrast(100%)",
  //             duration: 0.5,
  //             zIndex: 2,
  //           },
  //           "<"
  //         )
  //         .then(() => {
  //           setForgetPasswordVisible(true);
  //         });
  //     }
  //   };

  //   const backToLogin = () => {
  //     if (tl) {
  //       tl.to(".footer", { xPercent: 0, duration: 0.5, textAlign: "left" })
  //         .to(".formContainer", { opacity: 1, duration: 0.3, zIndex: 1 }, "<")
  //         .to(".heroImg", { xPercent: 0, duration: 0.5, zIndex: 1 }, "<")
  //         .to(".active", { opacity: 0, duration: 0, xPercent: 0 }, "<")
  //         .to(".logo", { filter: "none", duration: 0, zIndex: 2 }, "<")
  //         .then(() => {
  //           setForgetPasswordVisible(false);
  //         });
  //     }
  //   };

  //   const handleChangeForm = () => {
  //     setShow(!show);
  //   };
  //   useEffect(() => {
  //     const timeline = gsap.timeline();
  //     setTl(timeline);
  //   }, []);

  return (
    <div className={styles.container}>
      <div className={styles.rightImage}>
        <HeroImg />
      </div>
      <div className={styles.left__side}>
        <header>
          <div className={styles.logo}>
            <img src={voistWhiteLogo} alt="Voist Logo" />
          </div>
        </header>
        <main className="formContainer">
          <ConfigureAccount />
        </main>
        {/* <div className="footer"> */}
        <Footer />
        {/* </div> */}
      </div>
    </div>
  );
}
export default OnBoarding;
