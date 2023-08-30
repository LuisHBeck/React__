import './App.css'
import { useState } from 'react';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState('');

  const getNewTask = (event) => {
    setTask(event.target.value);
  }

  const addNewTask = () => {
    const newTask = {
      id: todoList.length + 1,
      taskName: task 
    }
    setTodoList([...todoList, newTask]);
    console.log(newTask.id)
  }

  const removeTask = () => {
    
  }

  return (
    <div className="App">
      <div className='task'>
        <input type="text" onChange={ getNewTask }/>
        <button onClick={ addNewTask }> Add Task </button>
      </div>

      { todoList.map((task) => {
        return (
          <div>
            <h1> { task.taskName } </h1>
            <h2> { task.id } </h2>
            <button onClick={ removeTask }> X </button>
          </div>
        )
      }) }
    </div>
  )
}

export default App
