import { MutableRefObject, useContext, useMemo, useState } from "react";
import styles from "./Scores.module.css";
import Score from "./Score/Score";
import ScoresModal from "./ScoresModal/ScoresModal";
import { EventsContext } from "../../../App";
import { EventsContextType } from "../../../types/types";

function Scores({
  rollRef,
}: {
  rollRef: MutableRefObject<HTMLDivElement | null>;
}) {
  const { events, setEvents } = useContext<EventsContextType>(EventsContext);
  let lastEvent = events.length > 0 ? events[events.length - 1] : null;
  const [injuries, setInjuries] = useState(0);
  const [clues, setClues] = useState(0);
  const [daylight, setDaylight] = useState(9);

  const resetScores = () => {
    setInjuries(0);
    setClues(0);
    setDaylight(9);
  };

  useMemo(() => {
    if (lastEvent) {
      let eventInjuries = lastEvent?.outcome.injury;
      let eventClues = lastEvent?.outcome.clue;
      let eventDaylight = lastEvent?.outcome.daylight;
      lastEvent.outcome.injury &&
        setInjuries((prevScore) =>
          prevScore + eventInjuries >= 0 ? prevScore + eventInjuries : 0
        );
      lastEvent.outcome.clue &&
        setClues((prevScore) =>
          prevScore + eventClues <= 10 ? prevScore + eventClues : 10
        );
      lastEvent.outcome.daylight &&
        setDaylight((prevScore) =>
          prevScore + eventDaylight <= 10 ? prevScore + eventDaylight : 10
        );
    }
  }, [lastEvent]);
  if (rollRef.current) {
    injuries >= 9 || clues >= 9 || daylight <= 0
      ? (rollRef.current.style.display = "none")
      : null;
  }
  return (
    <div className={styles.container}>
      <ScoresModal
        injuries={injuries}
        clues={clues}
        daylight={daylight}
        resetScores={resetScores}
        rollRef={rollRef}
      />
      <Score title={"INJURIES"} tilesOn={injuries} />
      <Score title={"CLUES"} tilesOn={clues} />
      <Score title={"DAYLIGHT"} tilesOn={daylight} />
    </div>
  );
}
export default Scores;
