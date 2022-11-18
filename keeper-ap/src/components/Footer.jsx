import React from 'react'

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className='footer'>
      <p>{date}</p> 
      </footer>
  )
}

export default Footer