import "./App.css";
import { MutableRefObject, useContext, useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Roll from "./components/Roll/Roll";
import { useRef } from "react";

export interface event {
  description: string;
  outcome: {
    clue: number;
    injury: number;
    daylight: number;
  };
}


function App() {
  const [events, setEvents] = useState<event[]>([]);
  const rollRef = useRef(null);
  return (
  <div className="App">
      <Header />
      <Roll forwardedRef={rollRef} setEvents={setEvents}/>
      <Main events={events} setEvents={setEvents} rollRef={rollRef}/>
      <Footer />
  </div>
  );
}

export default App;
