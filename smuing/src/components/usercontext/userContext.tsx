import { ReactNode, createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type User = {
  name: string
  role: string
}

type UserContextType = {
  user: User | null
  setUserContext: (userData: User | null) => void
}

const UserContext = createContext<UserContextType>({
  user: null,
  setUserContext: () => {},
})

export const useUser = () => useContext(UserContext)

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const navigate = useNavigate()

  const setUserContext = (userData: User | null) => {
    setUser(userData)
  }

  if (!user || user.role !== 'manager') {
    navigate('/login')
  }

  return <UserContext.Provider value={{ user, setUserContext }}>{children}</UserContext.Provider>
}

export default UserContext
