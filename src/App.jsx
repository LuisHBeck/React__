import './App.css'
import { useState } from 'react';

function App() {
  //  AGE
  // const [age, setAge] = useState(0);
  // const increaseAge = () => {
  //   setAge(age + 1)
  // }

  //  TEXT AREA
  // const [textArea, setTextArea] = useState('');
  // const handleInputChange = (event) => {
  //   setTextArea(event.target.value);
  // }

  // VISIBLE
  // const [visible, setVisible] = useState(true);

  // TEXT COLOR
  // const [textColor, setTextColor] = useState('green');

  // COUNT  
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* AGE */}
      {/* { age } <button onClick={ increaseAge }> Increase Age </button> */}

      {/* TEXT AREA */}
      {/* <input type="text" onChange={ handleInputChange }/>
      { textArea } */}

      {/* VISIBLE */}
      {/* <button
       onClick={() => {
        setVisible(!visible)
      }} > show/hide </button> */}

      {/* TEXT COLOR */}
      {/* <button 
        onClick={() => {
          // textColor == 'green'? setTextColor('black') : setTextColor('green'); 
          setTextColor(textColor === 'red' ? 'green' : 'red')
      }}> green / red </button> */}

      {/* { visible && <h1 style={{ color: textColor }}>Hi, my name is Beck!</h1>} */}

      <button onClick={() => {
        setCount(count+1);
      }}> Increase </button>

      <button onClick={() => {
        setCount(count-1);
      }}> Decrease </button>

      <button onClick={() => {
        setCount(0)
      }}> Set to Zero </button>

      {count}
    </div>
  )
}

export default App
