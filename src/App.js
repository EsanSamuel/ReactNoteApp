import React from 'react'
import NoteList from './components/NoteList'
import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Search from './components/Search'
import Header from './components/Header'

const App = () => {
  const [notes, setNotes] = useState([])

  const [searchText, setSearchText] = useState('')

  const [darkMode, setdarkMode] = useState(false)


  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    )
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    )
  }, [notes])

  const AddNotes = (text) => {
    const date = new Date()
    const newNote = {
      id: nanoid,
      text: text,
      date: date.toLocaleDateString(),
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        < Header handleToggleDarkMode={setdarkMode} />
        < Search handleSearchNotes={setSearchText} />
        <NoteList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
          handleAddNotes={AddNotes}
          handleDeleteNotes={deleteNote}
        />
      </div>
    </div>
  )
}

export default App