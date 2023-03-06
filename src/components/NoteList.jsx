import Note from './Note'
import AddNotes from './AddNotes'

const NoteList = ({ notes, handleAddNotes, handleDeleteNotes}) => {
  return (
    <div className='note-list'>
    {notes.map((note)=> (
    <Note 
    id={note.id} 
    text={note.text} 
    date={note.date}
    handleDeleteNotes = {handleDeleteNotes}

    />))}

<AddNotes handleAddNotes={handleAddNotes} />
    </div>

    
    
  )
}

export default NoteList