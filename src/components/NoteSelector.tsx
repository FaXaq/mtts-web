import React from "react";
import { NOTES, Note } from "mtts";
import classNames from "classnames";

interface NoteSelectorProps {
  onNoteSelect: React.Dispatch<React.SetStateAction<Note>>;
  currentNote: Note;
}

const NoteSelector: React.FC<NoteSelectorProps> = props => {
  return (
    <div className="inline-flex">
      {NOTES.map(n => {
        let classes = classNames(
          "font-bold",
          "py-2",
          "px-4",
          "transition-colors",
          props.currentNote.name === n
            ? ["text-white", "bg-gray-900", "hover:bg-gray-800"]
            : ["hover:bg-gray-400", "bg-gray-300", "text-gray-800"]
        );
        return (
          <button
            className={classes}
            onClick={() => props.onNoteSelect(new Note({ name: n }))}
            key={n}
          >
            {n}
          </button>
        );
      })}
    </div>
  );
};

export default NoteSelector;
