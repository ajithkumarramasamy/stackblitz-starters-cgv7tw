import React from "react"
import './index.css'
const DisplayFolder = ({folder,createFolderContent}) => {
    const clickFolder = (event) => {
        createFolderContent(event.target.value)
    }

    return (
          <button className = "file-edit" onClick = {(event) => clickFolder(event)} value = {folder}>{folder}</button>
    )
}

export default DisplayFolder