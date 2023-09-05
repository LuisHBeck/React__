import { useState } from "react"

export const ChangeProfile = (props) => {
  const [newUsername, setNewUsername] = useState('');
  const handleInput = (event) => {
    setNewUsername(event.target.value);
  } 
  return (
    <div>
      <input type="text" onChange={() => {handleInput()}}/>
      <button onClick={() => {
        props.setUsername(newUsername);
      }}>Change Username</button>
    </div>
  )
}