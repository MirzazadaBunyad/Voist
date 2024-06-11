import styles from "./forgotPassword.module.scss";
import { useState } from "react";
import NewPassword from "./newPassword/NewPassword";
import Successfully from "./successfully/Successfully";
import CodeBelow from "./codeBelow/CodeBolow";
import SendToEmail from "./sendToEmail/SendToEmail";
import { CSSTransition } from "react-transition-group";
import HeroImg from "../../smallComponents/heroImg/HeroImg";
import { useLocation } from "react-router-dom";

export default function ForgotPassword() {
  const [currentComponent, setCurrentComponent] = useState("SendToEmail");
  const [sendInformation, setSendInformation] = useState({ email: "" });

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };
  const location = useLocation();


  return (
    <section className={styles.container}>
      <div className={styles.left__side}>
        <HeroImg />
      </div>
      <div className={styles.loginContainer}>
        <CSSTransition
          in={location.pathname === "/forgotPassword/SendToEmail"}
          timeout={300}
          classNames="sendToEmail"
          unmountOnExit
        >
          <SendToEmail
            setSendInformation={setSendInformation}
            initialData={sendInformation}
          />
        </CSSTransition>

        <CSSTransition
          in={location.pathname === "/forgotPassword/CodeBelow"}
          timeout={300}
          classNames="codeBelow"
          unmountOnExit
        >
          <CodeBelow
            sendInformation={sendInformation}
          />
        </CSSTransition>

        <CSSTransition
          in={location.pathname === "/forgotPassword/NewPassword"}
          timeout={300}
          classNames="newPassword"
          unmountOnExit
        >
          <NewPassword />
        </CSSTransition>

        <CSSTransition
          in={location.pathname === "/forgotPassword/Successfully"}
          timeout={300}
          classNames="successfully"
          unmountOnExit
        >
          <Successfully />
        </CSSTransition>
      </div>
    </section >
  );
}
