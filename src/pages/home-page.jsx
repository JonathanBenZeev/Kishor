import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userService } from '../services/user.service'

export const HomePage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(userService.getLoggedinUser())

  useEffect(() => {
    if (!user) navigate('/login')
  }, [])

  return <section className='home-page'>hello</section>
}
