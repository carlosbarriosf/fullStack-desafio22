import React from 'react'
import '../styles/button.css'

function Button({type = 'button', label}) {
  return (
    <button type={type} className='btn'>{label}</button>
  )
}

export default Button