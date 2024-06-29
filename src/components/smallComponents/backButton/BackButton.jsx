import styles from "./backButton.module.scss";
import arrowLeftBlack from "../../../assets/img/arrowLeftBlack.svg";
import { Link } from "react-router-dom";

function BackButton() {
  return (
    <>
      <Link to={"/authentication/login"}  className={styles.arrowLeft}>
        <img src={arrowLeftBlack} alt="" />
      </Link>
    </>
  );
}
export default BackButton;
