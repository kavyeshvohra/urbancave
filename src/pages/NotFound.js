import { findByLabelText } from '@testing-library/react'
import React from 'react'
import { Link } from 'react-router-dom'

const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column', 
    alignItems: 'center',
    height: '100vh'
}

const NotFound = () => {
  return (
    <>
        <div style={pageStyle}>
            <div className='textContent'>
                <h1 style={{color: "red"}}>404! Oops, That page doesn't exist!</h1>
                <p style={{textAlign: "center"}}>Go to <Link to='/'>Home</Link></p>
            </div>
        </div>
    </>
  )
}

export default NotFound