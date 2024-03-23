import style from "./footer.module.scss";

function Footer() {
  return (
    <footer className={style.footer}>
      <p>&#169; 2023 Voist. Allrights reserved.</p>
      <p>Term & Conditions</p>
      <p>Privacy Policy</p>
      <select className={style.languageChosen}>
        <option value="english">En</option>
        <option value="spanish">Sp</option>
      </select>
    </footer>
  );
}
export default Footer;
