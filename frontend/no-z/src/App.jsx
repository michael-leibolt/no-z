import { useState, useEffect } from 'react'
import Login from './utils/Login.jsx'
import LoggedIn from './components/LoggedIn.jsx'

function App() {
  let [ authUser, setAuthUser ] = useState(() => {
    const storedUser = localStorage.getItem('authUser')
    return storedUser ? JSON.parse(storedUser) : null
  })

  useEffect(() => {
    localStorage.setItem('authUser', JSON.stringify(authUser))
  }, [authUser])

  function logout(){
    setAuthUser(null)
  }
  if(!authUser){
    return (
      <Login setAuthUser={setAuthUser} authUser={authUser}/>
    )
  } else {
    return (
      <>
        <h1>Logged in for UIC:{`${authUser}`}</h1>
        <button onClick={logout}>Log Out</button>
        <LoggedIn uic={authUser}/>
      </>
    )
  }
}

export default App