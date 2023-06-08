import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const aregarInput = val => {
    setInput(input + val);
  };

  const calcular = () => {
    if (input){
      setInput(evaluate(input));
    } else {
      alert("¡Ingrese valores!");
    }
  };

  return (
    <div className='App'>
      
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={aregarInput}>1</Boton>
          <Boton manejarClic={aregarInput}>2</Boton>
          <Boton manejarClic={aregarInput}>3</Boton>
          <Boton manejarClic={aregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={aregarInput}>4</Boton>
          <Boton manejarClic={aregarInput}>5</Boton>
          <Boton manejarClic={aregarInput}>6</Boton>
          <Boton manejarClic={aregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={aregarInput}>7</Boton>
          <Boton manejarClic={aregarInput}>8</Boton>
          <Boton manejarClic={aregarInput}>9</Boton>
          <Boton manejarClic={aregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcular}>=</Boton>
          <Boton manejarClic={aregarInput}>0</Boton>
          <Boton manejarClic={aregarInput}>.</Boton>
          <Boton manejarClic={aregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}
export default App;