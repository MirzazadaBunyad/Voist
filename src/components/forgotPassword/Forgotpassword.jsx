import styles from "./forgotPassword.module.scss";
import SendToEmail from "../forgotPassword/sendToEmail/SendToEmail";
import { useState } from "react";
import CodeBelow from "./codeBelow/CodeBolow";

export default function ForgotPassword({ backToLogin }) {
  const [show, setShow] = useState(false);
  const [sendInformation, setSendInformation] = useState({ input: "" });

  function handleClickToChange() {
    setShow(!show);
  }

  function handleUpdateSendInformation(data) {
    setSendInformation(data);
  }

  return (
    <section className={styles.container}>
      <div className={styles.loginContainer}>
        {show ? (
          <CodeBelow
            sendInformation={sendInformation}
            handleClickToChange={handleClickToChange}
          />
        ) : (
          <SendToEmail
            handleClickToLogin={backToLogin}
            setSendInformation={handleUpdateSendInformation}
            handleClickToChange={handleClickToChange}
            initialData={sendInformation}
          />
        )}
      </div>
    </section>
  );
}
