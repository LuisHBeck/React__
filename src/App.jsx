import './App.css'
import { User } from './components/User';
import { Planet } from './components/Planet';

function App() {

  const age = 19;
  const isGreen = false;

  const names = ['Peter', 'Jake', 'Mike', 'Dustin', 'Carl'];

  const users = [
    { name: 'Peter', age:25 },
    { name: 'Jake', age:15 },
    { name: 'Carl', age:19 }
  ]

  const planets = [
    { name: 'Mars', isGasPlanet: false },
    { name: 'Earth', isGasPlanet: false },
    { name: 'Jupiter', isGasPlanet: true },
    { name: 'Venus', isGasPlanet: false },
    { name: 'Neptune', isGasPlanet: true },
    { name: 'Uranus', isGasPlanet: true },
  ]

  return (
    <div className="App">
      {/*
      <h2>{age >= 18 ? "Over age" : "Under age"}</h2>
      <h1 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h1>
      { isGreen && <button>Here</button> } */}

      {/* {names.map((name, key) => {
        return <h2 key={key}>{ name }</h2>;
      })} */}

      {/* { users.map((user, key) => {
        return (
          <User name={user.name} age={user.age} />
        )
      }) } */}

      { planets.map((planet, key) => {
        return (
          planet.isGasPlanet ? <Planet name={planet.name}/> : ''
        )
      }
      ) }

    </div>
  )
}

export default App
