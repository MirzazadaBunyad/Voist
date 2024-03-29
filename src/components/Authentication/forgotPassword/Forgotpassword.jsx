import styles from "./forgotPassword.module.scss";
import { useState } from "react";
import NewPassword from "./newPassword/NewPassword";
import Successfully from "./successfully/Successfully";
import CodeBelow from "./codeBelow/CodeBolow";
import SendToEmail from "./sendToEmail/SendToEmail";

export default function ForgotPassword({ backToLogin }) {
  const [currentComponent, setCurrentComponent] = useState("SendToEmail");
  const [sendInformation, setSendInformation] = useState({ input: "" });

  const handleComponentChange = (component) => {
    setCurrentComponent(component);
  };

  return (
    <section className={styles.container}>
      <div className={styles.loginContainer}>
        {currentComponent === "SendToEmail" && (
          <SendToEmail
            handleClickToLogin={backToLogin}
            handleClickToChange={() => handleComponentChange("CodeBelow")}
            setSendInformation={setSendInformation}
            initialData={sendInformation}
          />
        )}
        {currentComponent === "CodeBelow" && (
          <CodeBelow
            handleClickToChange={() => handleComponentChange("NewPassword")}
            handleGoBack={() => handleComponentChange("SendToEmail")}
            backToLogin={backToLogin}
          />
        )}
        {currentComponent === "NewPassword" && (
          <NewPassword
            handleClickToChange={() => handleComponentChange("Successfully")}
            handleGoBack={() => handleComponentChange("CodeBelow")}
            backToLogin={backToLogin}
          />
        )}
        {currentComponent === "Successfully" && <Successfully />}
      </div>
    </section>
  );
}
