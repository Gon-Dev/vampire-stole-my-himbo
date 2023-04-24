import styles from "./Main.module.css";
import Quest from "./Quest/Quest";
import Scores from "./Scores/Scores";
import EventLog from "./EventLog/EventLog";
import { MutableRefObject } from "react";

function Main({
  rollRef,
}: {
  rollRef: MutableRefObject<HTMLDivElement | null>;
}) {
  return (
    <div className={styles.container}>
      <Quest />
      <Scores rollRef={rollRef} />
      <EventLog />
    </div>
  );
}
export default Main;
