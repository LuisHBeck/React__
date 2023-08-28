import './App.css'

function App() {

  const age = 19;
  const isGreen = false;

  const names = ['Peter', 'Jake', 'Mike', 'Dustin', 'Carl'];

  const users = [
    { name: 'Peter', age:25 },
    { name: 'Jake', age:15 },
    { name: 'Carl', age:19 }
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

      { users.map((user, key) => {
        return (
          <User name={user.name} age={user.age} />
        )
      }) }

    </div>
  )
}

const User = (props) => {
  return (
    <div>
      <h1>{ props.name } { props.age }</h1>
    </div>
  )
}

export default App
