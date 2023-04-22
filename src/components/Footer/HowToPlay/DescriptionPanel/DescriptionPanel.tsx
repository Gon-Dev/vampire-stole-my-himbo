import styles from "./descriptionPanel.module.css";
function DescriptionPanel( {isExpanded}: {isExpanded: boolean} ) {
  console.log();
  return (
    <div className={`${styles.container} ${isExpanded ? styles.panelOn : styles.panelOff}`}>
      <p className={styles.description}>
        To start the game, you generate a new Event by rolling a die (button in
        the right-bottom side of the screen). Keep making rolls until one of
        the following occurs:
      </p>
      <ul className={styles.unorderedList}>
        <li className={styles.listItem}>
          <p className={styles.listText}>Your <strong>INJURIES</strong> score reaches 10, then you <strong>DIE</strong>.</p>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listText}>Your <strong>CLUES</strong> score reaches 10, then you <strong>WIN</strong>.</p>
        </li>
        <li className={styles.listItem}>
          <p className={styles.listText}>Your <strong>DAYLIGHT</strong> score reaches 0, then you <strong>DIE</strong>.</p>
        </li>
      </ul>
    </div>
  );
}

export default DescriptionPanel;
