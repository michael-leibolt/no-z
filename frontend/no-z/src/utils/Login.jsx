import { useContext } from "react";
import { LoginContext } from './LoginContext.jsx'

function Login(){
  const { users } = useContext(LoginContext)

  if(!users) {
    return <h1>Users Loading</h1>
  }

  return (
    <div>
      <h1>Login Page</h1>
      {/* Your login logic here */}
    </div>
  )
}

export default Login;