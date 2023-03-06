import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

const Note = ({id,text,date, handleDeleteNotes}) => {
  return (
    <div className="note"><span>{text}</span>
    <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever onClick={()=> handleDeleteNotes(id)} 
            className="button-icon"
        />
    </div>
    </div>
    
  )
}

export default Note