import React from "react";
import { Note, Scale as MusicScale } from "mtts";
import { useTranslation } from "react-i18next";

interface ScaleProps {
  root: Note;
  name: string;
}

const Scale: React.FC<ScaleProps> = props => {
  const { t, i18n } = useTranslation();

  const scale = new MusicScale({
    key: props.root
  });
  return (
    <div>
      {scale.notes.map(note => {
        return (
          <p key={note.name}>{`${t("notes." + note.name)}${
            note.hasAccidental() ? t("accidentals." + note.accidental.name) : ""
          }`}</p>
        );
      })}
    </div>
  );
};

export default Scale;
