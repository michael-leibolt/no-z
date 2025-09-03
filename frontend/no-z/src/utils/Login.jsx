import { useState } from "react";

function Login({ setAuthUser, authUser }){
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  function handleUser(event){
    setUsername(event.target.value)
  }
  function handlePass(event){
    setPassword(event.target.value)
  }
  async function clickHandler(){
    if(username && password ) {
      let form = {
        username: username,
        password: password
      }
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users`, {
          method: 'PATCH',
          headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          },
          body: JSON.stringify(form)
        })
        if(!res.ok) {
          throw new Error(`Server Error! Status ${res.status}`)
        }
        let data = await res.json()
        setAuthUser(data.uic)
      }
      catch (err) {
        console.error("Failed to fetch match in login:", err);
        setAuthUser(null)
      }
    }

  }
  if(!authUser) {
    return (
      <>
        <h1>Login</h1>
        <label>Enter Username
          <input type='text' value={username} onChange={handleUser}/>
        </label>
        <label>Enter Password
          <input type='text' value={password} onChange={handlePass}/>
        </label>
        <button onClick={clickHandler}>Submit</button>
      </>
    )
  } else {
    return (
    <h1>test</h1>
    )
  }
}



export default Login;