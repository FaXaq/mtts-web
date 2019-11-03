import React from 'react';
import { NOTES } from 'mtts';

const NoteSelector: React.FC = () => (
  <p>
    {
      NOTES.map(n => (
        <span>{ n }</span>
      ))
    }
  </p>
);

export default NoteSelector;