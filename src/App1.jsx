import './App.css'
import { useState, useEffect} from 'react';
import Axios from 'axios';
import { Person } from './components/Person';


function App() {

  const [personName, setPersonName] = useState('luis');
  const [personAge, setPersonAge] = useState({});

  const handleInput = (event) => {
    setPersonName(event.target.value);
  }

  const fetchPersonData = async () => {
    try {
      if (personName) {
        const data = await Axios.get(`https://api.agify.io/?name=${personName}`);
      setPersonAge(data.data);
      }
    }catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchPersonData()
  }, [])

  return (
    <div className="App">

      <input type="text" onChange={handleInput} value={personName}/>

      <button onClick={fetchPersonData}> Predict Age </button>
      
      <Person 
        name={personAge?.name} 
        age={personAge?.age} 
        count={personAge?.count}
      />

    </div>
  )
}

export default App
