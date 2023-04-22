import events from "../data/events"

function useEvent(typeRoll: number, eventRoll: number) {
  const eventType = events[typeRoll];
  const resultEvent = eventType.results[eventRoll]
  return resultEvent;
}

export default useEvent;