import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ handleSearchNotes }) => {
  return (
    <div className='search'>
        <MdSearch className="search-icon" />
        <input 
          onChange={(event)=>
        handleSearchNotes(event.target.value)
        } 
        type="text" placeholder='      Type to Search...' />
    </div>
  )
}

export default Search