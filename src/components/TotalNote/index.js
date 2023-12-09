import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from '../NotesList';
import Header from '../Header';
import Folders from '../Folders';
import DisplayFolder from '../DisplayFolder';
import './index.css';

const TotalNote = () => {
  const [notes, setNotes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [folderList, setFolder] = useState([]);
  const [cur_folder, set_cur_folder] = useState('');
  const user = JSON.parse(localStorage.getItem('current'));
  console.log(user);
  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem(`${user}-${cur_folder}-data`, JSON.stringify(notes));
    }, 100);
  }, [notes, cur_folder, user]);

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem(`${user}-folder`, JSON.stringify(folderList));
    }, 100);
  }, [folderList]);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem(`${user}-${cur_folder}-data`)
    );
    const savedFolder = JSON.parse(localStorage.getItem(`${user}-folder`));
    if (savedNotes) {
      setNotes([...savedNotes]);
    }
    if (savedFolder) {
      setFolder(savedFolder);
    }
  }, []);

  const CreateNewFolder = (name) => {
    let newFolder = [...folderList, name];
    localStorage.setItem(`${user}-${name}-data`, JSON.stringify([]));
    setFolder(newFolder);
  };

  const createFolderContent = (name) => {
    set_cur_folder(name);
    let folderContent = JSON.parse(
      localStorage.getItem(`${user}-${name}-data`)
    );
    setNotes(folderContent);
  };

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const handleEditNote = (id) => {
    let cont = prompt('enter a new text hear');
    const date = new Date();
    const newNotes = notes.filter((note) => note.id !== id);
    const final = {
      id: id,
      text: cont,
      date: date.toLocaleDateString(),
    };
    const finalNote = [...newNotes, final];
    setNotes(finalNote);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header
          handleToggleDarkMode={setDarkMode}
          folderList={folderList}
          CreateNewFolder={CreateNewFolder}
          createFolderContent={createFolderContent}
        />
        <NotesList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={handleEditNote}
        />
      </div>
    </div>
  );
};

export default TotalNote;
