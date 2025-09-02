import { createContext, useState, useEffect } from 'react'

export const LoginContext = createContext()

export default function LoginProvider({ children }) {
  const [ users, setUsers ] = useState(null)

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/users`)

        if(!res.ok){
          throw new Error(`Server Error! Status ${res.status}`)
        }
        const data = await res.json()
        console.log(data)
        setUsers(data)
      }
      catch (err) {
          console.error("Failed to fetch users:", err);
        }
    }
    fetchApi()
  },[])
  return (
    <LoginContext.Provider value={{ users }}>
      {children}
    </LoginContext.Provider>
  )

}