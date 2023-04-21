import styles from "./Score.module.css";
import { useRef, useEffect } from "react";
interface ScoreProps {
  title: string;
  tilesOn: number;
}

function Score(props: ScoreProps) {
  
  const tileRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    tileRefs.current = Array.from(
      document.querySelectorAll(".styles.tile")
    ) as Array<HTMLDivElement>;
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>{props.title}</p>
      <div className={styles.tileContainer}>
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            ref={(el) => (tileRefs.current[index] = el)}
            className={`${styles.tile} ${index < props.tilesOn ? styles.tileOn : styles.tile}`}
          />
        ))}
      </div>
    </div>
  );
}
export default Score;
