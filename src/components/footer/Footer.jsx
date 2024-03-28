import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <p>&#169; 2023 Voist. Allrights reserved.</p>
      <button className={styles.term}>Term & Conditions</button>
      <button className={styles.privacy}>Privacy Policy</button>
      <select className={styles.languageChosen}>
        <option value="english">En</option>
        <option value="spanish">Sp</option>
      </select>
    </div>
  );
}
export default Footer;
