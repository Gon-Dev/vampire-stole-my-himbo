import "./App.css";
import { createContext, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Roll from "./components/Roll/Roll";
import { useRef } from "react";
import { EventType, EventsContextType } from "./types/types";

export const EventsContext = createContext<EventsContextType>({
  events: [],
  setEvents: () => {},
});

function App() {
  const [events, setEvents] = useState<EventType[]>([]);
  const rollRef = useRef(null);
  return (
    <div className="App">
      <EventsContext.Provider value={{ events, setEvents }}>
        <Header />
        <Roll forwardedRef={rollRef} />
        <Main rollRef={rollRef} />
        <Footer />
      </EventsContext.Provider>
    </div>
  );
}

export default App;
