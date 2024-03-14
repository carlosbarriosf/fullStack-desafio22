import React from 'react'
import '../styles/paragraph.css'

function Paragraph({content, className}) {
  return (
    <p className={className}>{content}</p>
  )
}

export default Paragraph