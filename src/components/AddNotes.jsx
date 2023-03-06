import { useState} from 'react'

const AddNotes = ({handleAddNotes}) => {
    const [noteText, setNoteText] = useState('')
    const characterLimit = 200

    const handleChange=(event)=>{
        if(characterLimit - event.target.value.length >=0){
            setNoteText(event.target.value) 
        }
    }

    const handleSaveClick=()=>{
        if(noteText.trim().length > 0){
            handleAddNotes(noteText)
            setNoteText('')
        }
    }
  return (
    <div className='note new'>
        <textarea rows="8" cols="10"placeholder='Write Something...' value={noteText} onChange={handleChange}></textarea>
    <div class="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>Save</button>
    </div>
    </div>
  )
}

export default AddNotes