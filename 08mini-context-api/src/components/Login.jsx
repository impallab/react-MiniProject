import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }
  return (
    <div>
      <h2>Login</h2>
      
        <label htmlFor="username">Username: </label>
        <input type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          placeholder='username'
          id="username" /><br />
        <label htmlFor="password">Password: </label>
        <input type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password" /><br />
        <input type="submit" onClick={handleSubmit} value="Submit" />
      
    </div>
  )
}

export default Login