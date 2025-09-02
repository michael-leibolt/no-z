// App.jsx
import LoginProvider from './utils/LoginContext.jsx'
import Login from './utils/Login.jsx'

function App() {
  return (
    <LoginProvider>
      <Login />
      {/* Other components that need access to LoginContext */}
    </LoginProvider>
  )
}

export default App