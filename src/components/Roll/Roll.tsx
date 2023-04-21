import styles from "./Roll.module.css"
import dice from "./../../assets/dice.svg"
import useRoll from "./../../hooks/useRoll"
import useEvent from "../../hooks/useEvent";
import event from "../../App"
import { MutableRefObject } from "react";

export type setEventStateType = React.Dispatch<React.SetStateAction<event[]>>;

interface event {
  description: string;
  outcome: {
    clue: number;
    injury: number;
    daylight: number;
  };
}

function Roll({setEvents, forwardedRef}: {setEvents: setEventStateType, forwardedRef: MutableRefObject<HTMLDivElement | null>}) {

  function handleButton() {
    const [newTypeRoll, newEventRoll] = useRoll();
    const newEvent = useEvent(newTypeRoll,newEventRoll);
    setEvents(prevEvents => [
      ...prevEvents,
      newEvent
    ])
  }

  return (
    <div className={styles.container} ref={forwardedRef}>
      <button onClick={handleButton} className={styles.button}>
        <img className={styles.image} src={dice} alt="" />
      </button>
    </div>
  )
}

export default Roll;