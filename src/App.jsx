import styles from './App.module.css';
import { useState } from 'react';
import { Task } from './components/Task';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const length = todoList.length; 
    const task = { 
      id: length === 0 ? 1 : todoList[length - 1].id + 1,
      taskName: newTask,
      isCompleted: false
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (taskId) => {
    const newList = todoList.filter((task)=>{
      return task.id !== taskId;
    });

    setTodoList(newList)
  };

  const completeTask = (taskId) => {
    setTodoList(todoList.map((task) => {
      if (task.id === taskId) {
        return {...task, isCompleted: true};
      }else {
        return task;
      }
    }));
  };

  return (
    <div className={styles.App}>
      <div className={styles.addTask}>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className={styles.list}>
        {todoList.map((task) => {
          return (
            <Task 
              taskName={task.taskName} 
              id={task.id} 
              deleteTask={deleteTask} 
              completeTask={completeTask} 
              completed={task.isCompleted}
            />)
        })}
      </div>
    </div>
  )
}

export default App;
