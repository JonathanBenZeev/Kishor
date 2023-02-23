import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userService } from '../services/user.service'

export const HomePage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(userService.getLoggedinUser())

  useEffect(() => {
    if (!user) navigate('/login')
  }, [])

  return (
    <section
      className='home-page'
      style={{
        background: `url(https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80) center center / cover  `,
      }}
    >
      <div className='welcome-section'>
        <h1>Wellcome to Kishor</h1>
      </div>
    </section>
  )
}
