import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon"/>
    </div>
  )
}

const Job = (props) => {
  return (
    <div>
      <h1>{ props.salary }</h1>
      <h1>{ props.position }</h1>
      <h1>{ props.company }</h1>
    </div>
  )
}

export default App
