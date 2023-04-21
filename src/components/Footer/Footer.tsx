import styles from "./Footer.module.css"
import About from "./About/About"
import HowToPlay from "./HowToPlay/HowToPlay";
function Footer() {
  return (
    <div className={styles.container}>
      <HowToPlay />
      <About />
    </div>
  )
}
export default Footer;