import React from "react";
import Logo from "./components/images/Logo";
import NoteSelector from "./components/NoteSelector";

import { Note } from "mtts";
import Scale from "./components/Scale";

const App: React.FC = () => {
  const DEFAULT_NOTE = new Note({ name: "C" });
  const [note, setNote] = React.useState(DEFAULT_NOTE);

  return (
    <div className="App">
      <div className="Header w-full h-screen bg-black">
        <div className="container mx-auto p-16 w-full h-full flex flex-col">
          <Logo />
          <div className="text-white">
            <h1 className="text-6xl">MTTS Lab</h1>
            <p>Music Theory and Technology</p>
          </div>
        </div>
      </div>
      <div className="NoteSelector">
        <NoteSelector currentNote={note} onNoteSelect={setNote} />
      </div>
      <Scale root={note} name={"major"} />
    </div>
  );
};

export default App;
