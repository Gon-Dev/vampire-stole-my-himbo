import styles from "./ScoresModal.module.css";
import { MutableRefObject, useRef } from "react";
import { setEventStateType } from "../../../Roll/Roll";
import { resetScoresType } from "../Scores";

function ScoresModal({
  injuries,
  clues,
  daylight,
  setEvents,
  resetScores,
  rollRef,
}: {
  injuries: number;
  clues: number;
  daylight: number;
  setEvents: setEventStateType;
  resetScores: resetScoresType;
  rollRef: MutableRefObject<HTMLDivElement | null>;
}) {
  const modalEl = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    resetScores();
    setEvents([]);
    modalEl.current !== null ? (modalEl.current.style.display = "none") : null;
    if (rollRef.current) {
      rollRef.current.style.display = "flex";
    }
  };
  return (
    <div
      ref={modalEl}
      className={styles.container}
      style={
        injuries >= 9 || clues >= 9 || daylight <= 0
          ? { display: "flex" }
          : { display: "none" }
      }
    >
      <h4 className={styles.title}>
        {injuries >= 9 && "YOU DIED!"}
        {clues >= 9 && "FOUND YOUR HIMBO!"}
        {daylight <= 0 && "THE SUN IS GONE!"}
      </h4>
      <p className={styles.text}>
        {injuries >= 9
          ? "You meet a grisly end, doomed by your own heroism. Your body is unlikely to be recovered, but you'll make good money working in the afterlife as an undead servant."
          : null}
        {clues >= 9
          ? "You uncover your beloved in an enchanted stupor. You drag them from the castle, and resolve never to invite anyone into your house over again."
          : null}
        {daylight <= 0
          ? "The night falls. The vampire awakens. You are beguiled into the vampire's menagerie, to engage in recreational evil and the occasional cursed bacchanal."
          : null}
      </p>
      <button className={styles.button} onClick={handleClick}>
        PLAY AGAIN
      </button>
    </div>
  );
}

export default ScoresModal;
