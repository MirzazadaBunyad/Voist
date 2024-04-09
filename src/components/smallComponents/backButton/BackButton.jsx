import styles from "./backButton.module.scss";
import arrowLeftBlack from "../../../assets/img/arrowLeftBlack.svg";

function BackButton({ handleBack }) {
  return (
    <>
      <button onClick={handleBack} className={styles.arrowLeft}>
        <img src={arrowLeftBlack} alt="" />
      </button>
    </>
  );
}
export default BackButton;
