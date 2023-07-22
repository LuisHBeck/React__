import styles from './App.module.css';
import { User } from './components/User';

function App() {
  const users = [
    {name: 'Pedro', age: 21},
    {name: 'Luís', age: 19},
    {name: 'Daniel', age: 50},
  ];

  return (
    <div className={styles.App}>
      {users.map((user, key) => {
        return (
        <User name={user.name} age={user.age}/>
        )
      })}
    </div>
  )
}

export default App;
