import React from 'react';
import { IoAddOutline } from 'react-icons/io5';

const Folders = ({ CreateNewFolder }) => {
  const clickToCreate = () => {
    let name = prompt('Please enter folder name');
    if (name !== null && name.length > 0) {
      console.log(name);
      CreateNewFolder(name);
    }
  };
  return (
    <button onClick={() => clickToCreate()}>
      create Folder <IoAddOutline />
    </button>
  );
};

export default Folders;
