import styles from "./descriptionPanel.module.css";
function DescriptionPanel( {isExpanded}: {isExpanded: boolean} ) {
  return (
    <div className={`${styles.container} ${isExpanded ? styles.panelOn : styles.panelOff}`}>
      <p className={styles.description}>{"v0.0.1 (beta)"}</p>
      <p className={styles.description}>{"Developed by Goni. More about me "} <a className={styles.link} target="_blank" href="https://gonzaloruiz.ar/">here</a>.</p>
      <p className={styles.description}>{"Check out more one page RPGs at Oliver's"} <a className={styles.link} target="_blank" href="https://www.patreon.com/deathbybadger">patreon</a> profile.</p>
    </div>
  );
}

export default DescriptionPanel;
