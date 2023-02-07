import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userService } from '../services/user.service'

export const HomePage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = () => {
    const currUser = userService.getLoggedinUser()
    if (!currUser) navigate('/login')
    setUser(currUser)
  }

  if (!user) return <h1>Loading...</h1>
  return <section className='home-page'><h1>{user.fullname}</h1></section>
}
