import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <p className={styles.copyright}>&#169; 2023 Voist. Allrights reserved.</p>
      <div className={styles.termsPrivacy}>
        <button className={styles.term}>Term & Conditions</button>
        <button className={styles.privacy}>Privacy Policy</button>
      </div>
      <select className={styles.languageChosen}>
        <option value="english">En</option>
        <option value="spanish">Az</option>
      </select>
    </div>
  );
}
export default Footer;
