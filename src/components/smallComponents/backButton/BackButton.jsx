import styles from "./backButton.module.scss";
import arrowLeftBlack from "../../../assets/img/arrowLeftBlack.svg";
import { Link } from "react-router-dom";

function BackButton({ handleBack }) {
  return (
    <>
      <Link to={"/authentication/login"} onClick={handleBack} className={styles.arrowLeft}>
        <img src={arrowLeftBlack} alt="" />
      </Link>
    </>
  );
}
export default BackButton;
