import styles from "./Quest.module.css"
function Quest() {
  return (
    <div className={styles.container}>
      <p className={styles.quest}><strong>{"YOUR BOYFRIEND HAS BEEN STOLEN BY A VAMPIRE !"}</strong></p>
      <p className={styles.subquest}>{"You must enter the creature's abode by stealth and get him out before nightfall when the vampire wakes."}</p>
      <p className={styles.subquest}>{"(On no account fall in love with the vampire. DO NOT.)"}</p>
    </div>
  )
}
export default Quest;