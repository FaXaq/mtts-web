import React from 'react';
import Logo from './components/images/Logo';
import NoteSelector from './components/NoteSelector';

const App: React.FC = () => (
  <div className="App">
    <div
      className="Header w-full h-screen bg-black"
    >
      <div className="container mx-auto p-16 w-full h-full flex flex-col">
        <Logo />
        <div className="text-white">
          <h1 className="text-6xl">MTTS Lab</h1>
          <p>Music Theory and Technology</p>
        </div>
      </div>
    </div>
    <div
      className="NoteSelector"
    >
      <NoteSelector />
    </div>
  </div>
);

export default App;
