import styles from "./forgotPassword.module.scss";
import { useState } from "react";
import NewPassword from "./newPassword/NewPassword";
import Successfully from "./successfully/Successfully";
import CodeBelow from "./codeBelow/CodeBolow";
import SendToEmail from "./sendToEmail/SendToEmail";
import { CSSTransition } from "react-transition-group";
import "../animations.scss";
import HeroImg from "../../smallComponents/heroImg/HeroImg";

export default function ForgotPassword({ backToLogin }) {
  const [currentComponent, setCurrentComponent] = useState("SendToEmail");
  const [sendInformation, setSendInformation] = useState({ email: "" });

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  return (
    <section className={styles.container}>
      <HeroImg />
      <div className={styles.loginContainer}>
        <CSSTransition
          in={currentComponent === "SendToEmail"}
          timeout={300}
          classNames="sendToEmail"
          unmountOnExit
        >
          <SendToEmail
            handleClickToLogin={backToLogin}
            handleClickToChange={() => handleComponentChange("CodeBelow")}
            setSendInformation={setSendInformation}
            initialData={sendInformation}
          />
        </CSSTransition>

        <CSSTransition
          in={currentComponent === "CodeBelow"}
          timeout={300}
          classNames="codeBelow"
          unmountOnExit
        >
          <CodeBelow
            handleClickToChange={() => handleComponentChange("NewPassword")}
            handleGoBack={() => handleComponentChange("SendToEmail")}
            backToLogin={backToLogin}
            sendInformation={sendInformation}
          />
        </CSSTransition>

        <CSSTransition
          in={currentComponent === "NewPassword"}
          timeout={300}
          classNames="newPassword"
          unmountOnExit
        >
          <NewPassword
            handleClickToChange={() => handleComponentChange("Successfully")}
            handleGoBack={() => handleComponentChange("CodeBelow")}
            backToLogin={backToLogin}
          />
        </CSSTransition>

        <CSSTransition
          in={currentComponent === "Successfully"}
          timeout={300}
          classNames="successfully"
          unmountOnExit
        >
          <Successfully />
        </CSSTransition>
      </div>
    </section>
  );
}
