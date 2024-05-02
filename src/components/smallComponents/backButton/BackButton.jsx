import styles from "./backButton.module.scss";
import arrowLeftBlack from "../../../assets/icons/arrowLeftBlack.svg";

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
