import styles from "./Roll.module.css";
import dice from "./../../assets/dice.svg";
import useRoll from "./../../hooks/useRoll";
import useEvent from "../../hooks/useEvent";
import { EventsContext } from "../../App";
import { MutableRefObject, useContext } from "react";
import { SetEventType, EventType } from "../../types/types";

function Roll({
  forwardedRef,
}: {
  forwardedRef: MutableRefObject<HTMLDivElement | null>;
}) {
  const { setEvents }:{ setEvents: SetEventType  } = useContext(EventsContext);

  function handleButton() {
    const [newTypeRoll, newEventRoll] = useRoll();
    const newEvent: EventType = useEvent(newTypeRoll, newEventRoll);
    setEvents((prevEvents) => [...prevEvents, newEvent]);
  }

  return (
    <div className={styles.container} ref={forwardedRef}>
      <button onClick={handleButton} className={styles.button}>
        <img className={styles.image} src={dice} alt="" />
      </button>
    </div>
  );
}

export default Roll;
