import styles from "./heroImg.module.scss";
import rightImg from "../../assets/img/loginImg.jpg";
import arrowRightWhite from "../../assets/img/arrowRightWhite.svg";

function HeroImg() {
  return (
    <div className={styles.right__banner}>
      <img className={styles.rightImg} src={rightImg} alt="Error" />
      <div className={styles.rightBannerText}>
        <h2>AI’s touch on your calls</h2>
        <button>
          learn more <img src={arrowRightWhite} alt="error" />
        </button>
      </div>
    </div>
  );
}
export default HeroImg;
