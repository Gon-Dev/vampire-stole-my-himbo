import styles from "./About.module.css"
import DescriptionPanel from "./DescriptionPanel/DescriptionPanel";
import { useState } from "react";
function About() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const handleClick = () => setIsExpanded(prevState => !prevState)
  return (
    <div className={styles.container}>
      <DescriptionPanel isExpanded={isExpanded}/>
      <button className={styles.button} onClick={handleClick}>ABOUT</button>
    </div>
  )
}
export default About;