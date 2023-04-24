export interface EventType {
  description: string;
  outcome: {
    clue: number;
    injury: number;
    daylight: number;
  };
}

export type SetEventType = (e: EventType[]) => void

export interface EventsContextType {
  events: EventType[];
  setEvents: SetEventType;
}

export interface ScoreProps {
  title: string;
  tilesOn: number;
}