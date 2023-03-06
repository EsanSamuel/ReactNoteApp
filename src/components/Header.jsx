import React from 'react'

const header = ({ handleToggleDarkMode }) => {
  return (
    <div className='header'>
        <h1>Note App</h1>
        <button className='toggleBtn' onClick={()=> handleToggleDarkMode(
          (previousDarkMode)=> !previousDarkMode)
          }>
          Toggle Mode</button>
    </div>
  )
}

export default header