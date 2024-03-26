import styles from "./configureAccount.module.scss";
import greenRangeOne from "../../assets/img/greenRangeOne.svg";
import grayRangeOne from "../../assets/img/grayRangeOne.svg";
import smileGif from "../../assets/img/smile.gif";
import companyIcon from "../../assets/img/companyIcon.svg";
import domainIcon from "../../assets/img/domainIcon.svg";
import companyNumber from "../../assets/img/companyNumber.svg";
import azerbaijanFlag from "../../assets/img/azerbaijan.svg";
import arrowRightBlack from "../../assets/img/arrowRightBlack.svg";
import coupleRightIcon from "../../assets/img/coupleRightIcon.svg";
import { useState } from "react";

function ConfigureAccount() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const calculateGreenWidth = () => {
    return `${(currentStep / totalSteps) * 100}%`;
  };

  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.range}>
        <p className={styles.totalCount}>
          {currentStep}/{totalSteps}
        </p>
        <div className={styles.rangeColors}>
          <img
            src={greenRangeOne}
            className={styles.greenRange}
            alt="Green range"
            style={{ width: calculateGreenWidth() }}
          />
          <img
            src={grayRangeOne}
            className={styles.grayRange}
            alt="Gray range"
            style={{ width: `calc(100% - ${calculateGreenWidth()})` }}
          />
        </div>
      </div>
      <div className={styles.fullForm}>
        <div className={styles.header}>
          <h1>Let’s configure your account</h1>
          <div className={styles.subtitle}>
            <p>Please, fill the information below.</p>
            <img src={smileGif} className={styles.gif} alt="" />
          </div>
        </div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.formName}>
              <div className={styles.companyName}>
                <label>Company name*</label>
                <input placeholder="Enter company name" type="text" />
                <img src={companyIcon} alt="" />
              </div>
              <div className={styles.companyName}>
                <label>Company domain*</label>
                <input placeholder="Enter company domain" type="text" />
                <img src={domainIcon} alt="" />
              </div>
            </div>
            <div className={styles.formNumber}>
              <div className={styles.companyNumber}>
                <label>Company phone number*</label>
                <img className={styles.flag} src={azerbaijanFlag} alt="" />
                <input placeholder="Phone number" type="text" />
                <img
                  className={styles.companyNumber}
                  src={companyNumber}
                  alt=""
                />
              </div>
            </div>
            <div className={styles.formDescription}>
              <div className={styles.companyNumber}>
                <label>Company Description Shortly*</label>
                <input placeholder="Describe your company..." type="text" />
              </div>
            </div>
          </form>
          <div className={styles.buttonContainer}>
            <button onClick={goToNextStep} className={styles.continueButton}>
              Continue
              <img src={arrowRightBlack} alt="" />
            </button>
            <button className={styles.skipButton}>
              Skip for now
              <img src={coupleRightIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ConfigureAccount;
