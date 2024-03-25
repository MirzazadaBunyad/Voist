import styles from "./forgotPassword.module.scss";

import SendToEmail from "../forgotPassword/sendToEmail/SendToEmail";
import { useState } from "react";
import CodeBelow from "./codeBelow/CodeBolow";

export default function ForgotPassword({ backToLogin }) {
  const [show, setShow] = useState(false);
  const [sendInformation, setSendInformation] = useState({
    input1: "",
    input2: "",
  });
  function handleClickToChange() {
    setShow(!show);
  }
  return (
    <section className={styles.container}>
      <div className={styles.loginContainer}>
        <button onClick={handleClickToChange}>change</button>
        {show ? (
          <CodeBelow />
        ) : (
          <SendToEmail
            handleClickToLogin={backToLogin}
            setSendInformation={setSendInformation}
          />
        )}
      </div>
    </section>
  );
}
