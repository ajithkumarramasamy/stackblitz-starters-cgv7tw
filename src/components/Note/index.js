import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

const Note = ({ id, text, date, handleDeleteNote, handleEditNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <FaEdit onClick={() => handleEditNote(id)} />
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
