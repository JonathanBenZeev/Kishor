import { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BackOfficeList } from '../cmps/back-office-list'
import { userService } from '../services/user.service'

export const HomePage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const inventaitons = [
    {
      id: '1',
      status: 'pending',
      startDate: '22/01/2023',
      endDate: '23/01/2023',
      guests: 2
    },
    {
      id: '2',
      status: 'aproved',
      startDate: '22/01/2023',
      endDate: '23/01/2023',
      guests: 1
    },
    {
      id: '3',
      status: 'pending',
      startDate: '22/01/2023',
      endDate: '23/01/2023',
      guests: 4
    },
    {
      id: '4',
      status: 'rejected',
      startDate: '22/01/2023',
      endDate: '23/01/2023',
      guests: 3
    },
  ]

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = () => {
    const currUser = userService.getLoggedinUser()
    if (!currUser) navigate('/login')
    setUser(currUser)
  }

  if (!user) return <h1>Loading...</h1>
  return (
    <section className='home-page'>
      <h1>{user.fullname}</h1>
      <BackOfficeList user={user} inventaitons={inventaitons} />
    </section>
  )
}
