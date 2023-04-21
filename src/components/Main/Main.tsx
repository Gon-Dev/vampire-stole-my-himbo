import styles from "./Main.module.css";
import Quest from "./Quest/Quest";
import Scores from "./Scores/Scores";
import EventLog from "./EventLog/EventLog";
import {setEventStateType} from "../Roll/Roll"
import { MutableRefObject } from "react";

interface event {
  description: string;
  outcome: {
    clue: number;
    injury: number;
    daylight: number;
  };
}

function Main({ events, setEvents, rollRef }: { events: event[], setEvents: setEventStateType, rollRef: MutableRefObject< HTMLDivElement | null>}) {

  return (
    <div className={styles.container}>
      <Quest />
      <Scores events={events} setEvents={setEvents} rollRef={rollRef}/>
      <EventLog events={events} />
    </div>
  );
}
export default Main;
