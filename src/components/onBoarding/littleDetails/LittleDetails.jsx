import { useState } from 'react';
import styles from "./littleDetails.module.scss";
import smileGif from "../../../assets/img/smile.gif";
import arrowRightBlack from "../../../assets/img/arrowRightBlack.svg";
import arrowLeftBlack from "../../../assets/img/arrowLeftBlack.svg";
import coupleRightIcon from "../../../assets/img/coupleRightIcon.svg";
import Range from '../../smallComponents/onBoardRange/Range';
// import { useNavigate } from "react-router-dom";

function LittleDetails({ nextStep, prevStep }) {
    const [activeOperator, setActiveOperator] = useState(null);
    const [activeLang, setActiveLang] = useState(null);
    // const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(2);
    const totalSteps = 3;

    const goToNextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
            nextStep();
        }
    };

    const handleActOperators = (buttonId, e) => {
        e.preventDefault();
        setActiveOperator(activeOperator === buttonId ? null : buttonId);
    };

    const handleActLanguages = (buttonId, e) => {
        e.preventDefault();
        setActiveLang(activeLang === buttonId ? null : buttonId);
    };

    const handleBackStep = () => {
        prevStep();
    };

    return (
        <div className={styles.container}>
            <Range currentStep={currentStep} totalSteps={totalSteps} />
            <div className={styles.fullForm}>
                <div className={styles.header}>
                    <h1>Other little details</h1>
                    <div className={styles.subtitle}>
                        <p>Select which better suits you</p>
                        <img src={smileGif} className={styles.gif} alt="" />
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <form className={styles.form}>
                        <div className={styles.formName}>
                            <div className={styles.companyName}>
                                <label>Country*</label>
                                <select placeholder="Choose one" name="Choose one" id="">
                                    <option value="">Choose one</option>
                                    <option value="">Choose one</option>
                                    <option value="">Choose one</option>
                                    <option value="">Choose one</option>
                                </select>
                            </div>
                            <div className={styles.companyName}>
                                <label>Time zone*</label>
                                <select placeholder="Choose one" name="Choose one" id="">
                                    <option value="">Choose one</option>
                                    <option value="">Choose one</option>
                                    <option value="">Choose one</option>
                                    <option value="">Choose one</option>
                                </select>
                            </div>
                        </div>
                        <div className={styles.formNumber}>
                            <div className={styles.companyNumber}>
                                <label>How many operators do your company have?</label>
                                <div className={styles.operators}>
                                    <button
                                        className={activeOperator === 1 ? styles.active : ""}
                                        onClick={(e) => handleActOperators(1, e)}
                                    >
                                        1-10
                                    </button>
                                    <button
                                        className={activeOperator === 2 ? styles.active : ""}
                                        onClick={(e) => handleActOperators(2, e)}
                                    >
                                        11-20
                                    </button>
                                    <button
                                        className={activeOperator === 3 ? styles.active : ""}
                                        onClick={(e) => handleActOperators(3, e)}
                                    >
                                        21-50
                                    </button>
                                    <button
                                        className={activeOperator === 4 ? styles.active : ""}
                                        onClick={(e) => handleActOperators(4, e)}
                                    >
                                        51-100
                                    </button>
                                    <button
                                        className={activeOperator === 5 ? styles.active : ""}
                                        onClick={(e) => handleActOperators(5, e)}
                                    >
                                        More than 100
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formDescription}>
                            <div className={styles.companyNumber}>
                                <label>Company Description Shortly*</label>
                                <div className={styles.languages}>
                                    <button
                                        className={activeLang === 1 ? styles.active : ""}
                                        onClick={(e) => handleActLanguages(1, e)}
                                    >
                                        Azerbaijani
                                    </button>
                                    <button
                                        className={activeLang === 2 ? styles.active : ""}
                                        onClick={(e) => handleActLanguages(2, e)}
                                    >
                                        English
                                    </button>
                                    <button
                                        className={activeLang === 3 ? styles.active : ""}
                                        onClick={(e) => handleActLanguages(3, e)}
                                    >
                                        Russian
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className={styles.buttonContainer}>
                        <div className={styles.backAndContinueBtns}>
                            <button onClick={handleBackStep} className={styles.skipButton}>
                                <img src={arrowLeftBlack} alt="" />
                                Back
                            </button>
                            <button onClick={goToNextStep} className={styles.continueButton}>
                                Continue
                                <img src={arrowRightBlack} alt="" />
                            </button>
                        </div>
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

export default LittleDetails;
