import { useState } from "react";
import styles from "./HowToPlay.module.css";
import DescriptionPanel from "./DescriptionPanel/DescriptionPanel";

function HowToPlay() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleClick = () => setIsExpanded(prevState => !prevState)
  return (
    <div className={styles.rules}>
      <DescriptionPanel isExpanded={isExpanded}/>
      <button className={styles.button} onClick={handleClick}>HOW TO PLAY</button>
    </div>
  );
}
export default HowToPlay;
