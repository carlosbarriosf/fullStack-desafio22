
import { useState } from 'react';
import Form from './components/Form';
import './styles/App.css';
import Paragraph from './components/Paragraph';

function App() {

  const [name, setName] = useState('');
  const [age, setAge] = useState(0);

  let string = '';

  const generateString = (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('nombre');
    const nameValue = nameInput.value;
    const ageInput = document.getElementById('edad');
    const ageValue = ageInput.value;
    setName(nameValue);
    setAge(ageValue);
    nameInput.value = '';
    ageInput.value = '';
    return
  }

  string = age >= 18 ? `Bienvenido ${name}, gracias por usar nuestra aplicación.` : `Hola ${name}, eres muy joven para usar esta aplicación`;
  console.log(string)


  return (
    <div className="App">
      <Form className='form' onSubmit = {(e) => generateString(e)}/>
      <Paragraph content={string} className={age && name ? 'show' : 'hide'}/>
    </div>
  );
}

export default App;
