import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>A VAMPIRE</h1>
      <h2 className={styles.subtitle}>STOLE MY HIMBO</h2>
      <p className={styles.credit}>A one page RPG by Oliver Darkshire</p>
    </div>
  );
}
export default Header;
