import React from 'react'

function Input({type, label, className, required}) {


    return (
        <input 
            type={type} 
            name={label} 
            id={label} 
            placeholder={label} 
            className={className}
            required={required}
        />
    )
}

export default Input