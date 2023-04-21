import { useState } from "react";
import styles from "./EventLog.module.css";

interface Event {
  description: string;
  outcome: {
    clue: number;
    injury: number;
    daylight: number;
  };
}

function EventLog( { events }: {events: Event[]} ) {
  const reversedEvents = [];
  for(let i = events.length - 1; i >= 0; i--) {
    let eventAtIndex = events[i];
    reversedEvents.push(eventAtIndex)
  }
  return (
    <div className={styles.eventLogContainer}>
      {reversedEvents.map((event: Event,index) => {
        return (
          <div className={styles.eventContainer} key={index}>
            <p className={styles.description}>{event.description}</p>
            <div className={styles.outcomeContainer}>
              <p className={styles.outcome}>
                <strong>
                  {event.outcome.clue ? `+${event.outcome.clue} CLUE` : ""}
                </strong>
              </p>
              <p className={styles.outcome}>
                <strong>
                  {event.outcome.injury ? `${event.outcome.injury === -1 ? "-1" : "+" + event.outcome.injury} INJURY` : ""}
                </strong>
              </p>
              <p>
                <strong>
                  {event.outcome.daylight ? `${event.outcome.daylight} DAYLIGHT` : ""}
                </strong>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default EventLog;
