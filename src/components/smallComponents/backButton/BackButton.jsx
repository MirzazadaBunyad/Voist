import styles from "./backButton.module.scss";
import arrowLeftBlack from "../../../assets/img/arrowLeftBlack.svg";

function BackButton() {
  return (
    <>
      <button className={styles.arrowLeft}>
        <img src={arrowLeftBlack} alt="" />
      </button>
    </>
  );
}
export default BackButton;
