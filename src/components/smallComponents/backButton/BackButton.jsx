import styles from "./backButton.module.scss";
import arrowLeftBlack from "../../../assets/img/arrowLeftBlack.svg";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <>
      <Link to={"/authentication/login"} onClick={handleBack} className={styles.arrowLeft}>
        <img src={arrowLeftBlack} alt="" />
      </Link>
      </Link>
    </>
  );
}
export default BackButton;
