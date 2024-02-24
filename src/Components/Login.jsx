import React from 'react'
import { useState, useContext } from 'react'
import User from '../context/UserContext'

function Login() {
  
    const [username , setUsername]=useState("")
    const [password, setPassword] = useState('')
    
    const {setUser} = useContext(User)

    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
    return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='username' 
      value={username}
      onChange={(e) => {setUsername(e.target.value)}}
      />
      <br />
      <input type="text" placeholder='Password'
      value={password}
      onChange={(e) => {setPassword(e.target.value)}}  />
      <br />
      <button type="submit"
      onClick={handlesubmit}
      >Submit</button>
    </div>
  )
}

export default Login
