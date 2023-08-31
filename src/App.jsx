import './App.css'
import { useState } from 'react';
import { Task } from './components/Task';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState('');
  // const [fineshed, setFineshed] = useState(false)

  const getNewTask = (event) => {
    setTask(event.target.value);
  }

  const addNewTask = () => {
    const newTask = {
      id: todoList.length + 1,
      taskName: task,
      isFinished: false 
    }
    setTodoList([...todoList, newTask]);
  }

  const removeTask = (id) => {
    setTodoList(todoList.filter((task) => {
      return task.id !== id;
    }))
  }

  const finishTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        return task.id === id ? { ...task, isFinished:true } : task
      })
    )
  }

  console.log(todoList)

  return (
    <div className="App">
      <div className='task'>
        <input type="text" onChange={ getNewTask }/>
        <button onClick={ addNewTask }> Add Task </button>
      </div>

      { todoList.map((task) => {
        return (
          <Task 
            name={task.taskName} 
            id={task.id} 
            isFinished={task.isFinished}
            delete={removeTask} 
            finish={finishTask}/>
        )
      }) }
    </div>
  )
}

export default App
