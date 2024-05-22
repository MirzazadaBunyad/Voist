import { useState } from "react";
import styles from "./chooseTheme.module.scss";
import { FaCheck } from "react-icons/fa";
import Range from "../../smallComponents/onBoardRange/Range";
import smileGif from "../../../assets/img/smile.gif";
import arrowRightBlack from "../../../assets/img/arrowRightBlack.svg";
import arrowLeftBlack from "../../../assets/img/arrowLeftBlack.svg";
import coupleRightIcon from "../../../assets/img/coupleRightIcon.svg";
import themeCompBlackIcon from "../../../assets/img/themeCompBlackIcon.svg";
import themeCompWhiteIcon from "../../../assets/img/themeCompWhiteIcon.svg";

function ChooseTheme({ prevStep }) {
    const [activeBtn, setActiveBtn] = useState(null);
    const [currentStep, setCurrentStep] = useState(3);

    const handleBtnClick = (btnName) => {
        setActiveBtn(btnName);
    };

    const handleBackStep = () => {
        setCurrentStep(currentStep - 1);
        prevStep();
    };

    return (
        <div className={styles.container}>
            <Range currentStep={currentStep} totalSteps={3} />
            <div className={styles.fullForm}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Choose the theme</h1>
                    <div className={styles.subtitle}>
                        <p>Select which better suits you</p>
                        <img src={smileGif} className={styles.gif} alt="Smile" />
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.themeContainer}>
                        {["Light", "Dark", "System"].map((btnName) => (
                            <button
                                key={btnName}
                                className={`${styles[`${btnName.toLowerCase()}Btn`]}`}
                                onClick={() => handleBtnClick(btnName.toLowerCase())}
                            >
                                <div className={styles.checkIconContainer}>
                                    <FaCheck
                                        className={`${styles.checkIcon} ${activeBtn === btnName.toLowerCase() ? styles.active : ""
                                            }`}
                                    />
                                    <div className={styles[`${btnName.toLowerCase()}BtnText`]}>
                                        <p className={styles[`${btnName.toLowerCase()}BtnTitle`]}>
                                            {btnName === "System" ? "System default" : btnName}
                                        </p>
                                        <p className={styles[`${btnName.toLowerCase()}BtnDesc`]}>
                                            Click to choose
                                        </p>
                                    </div>
                                </div>
                                <img
                                    className={styles.computerIcon}
                                    src={btnName === "Dark" ? themeCompWhiteIcon : themeCompBlackIcon}
                                    alt="Computer icon"
                                />
                            </button>
                        ))}
                    </div>

                    <div className={styles.buttonContainer}>
                        <div className={styles.backAndContinueBtns}>
                            <button onClick={handleBackStep} className={styles.skipButton}>
                                <img src={arrowLeftBlack} alt="Back" />
                                Back
                            </button>
                            <button className={styles.continueButton}>
                                Continue
                                <img src={arrowRightBlack} alt="Continue" />
                            </button>
                        </div>
                        <button className={styles.skipButton}>
                            Skip for now
                            <img src={coupleRightIcon} alt="Skip" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseTheme;
