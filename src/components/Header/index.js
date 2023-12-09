import React from 'react';
import {useNavigate} from "react-router-dom";
import DisplayFolder from '../DisplayFolder';
import Folders from '../Folders';
const Header = ({ handleToggleDarkMode,createFolderContent,CreateNewFolder,folderList}) => {
	let navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("current")
		navigate("/",{replace: true})
	  };
	return (
		<div className='header'>
			<ul>
                {folderList.map((fol) => {
					return (
						<DisplayFolder folder = {fol} key = {fol} createFolderContent = {createFolderContent}/>
					)
				})}
			</ul>
			<Folders CreateNewFolder = {CreateNewFolder}/>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				Toggle Mode
			</button>
			<button onClick={()=> handleLogout()}>Logout</button>
		</div>
	);
};

export default Header;