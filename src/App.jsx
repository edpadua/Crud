import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "./reducers/Users";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("");

  return (
    <> 
     <div className="displayUsers">
     {userList.map((user) => {
          return <h1> {user.name}</h1>
     })}
     </div>
       
    </>
  )
}

export default App