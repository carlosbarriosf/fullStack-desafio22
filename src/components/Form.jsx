import React from 'react'
import Input from './Input'
import '../styles/form.css'
import Button from './Button'

function Form({className, onSubmit}) {



  return (
    <div className='form-container'>
      <form action="" className={className} onSubmit={onSubmit}>
        <Input type='text' label='nombre' className='form__input' required={true}></Input>
        <Input type='number' label='edad' className='form__input' required={true}></Input>
        <Button label='Enviar' type='submit'></Button>
      </form>
    </div>
  )
}

export default Form