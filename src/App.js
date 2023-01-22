import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from '../src/componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js'
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = valor => {
    setInput(input + valor);
  }

  const calcularInput = () =>{
    if (input){
      setInput(evaluate(input));
    } else {
      alert('Ingrese un valores para realizar los calculos');
    }
    
    
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className= 'freecodecamp-logo' src= {freeCodeCampLogo} alt= 'Logo freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
      
        <Pantalla input={input} />

        <div className='fila'>
          <Boton manejarClic={agregarInput} >1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularInput}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear = {() => setInput('')}>Clear</BotonClear>
        </div>
       
       
      </div>

    </div>
  );
}

export default App;
