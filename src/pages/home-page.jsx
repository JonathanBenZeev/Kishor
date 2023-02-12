import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BackOfficeList } from '../cmps/back-office-list'
import { setStay } from '../store/stay.actions'

export const HomePage = () => {
  const navigate = useNavigate()
  const user = useSelector((storeState) => storeState.userModule.user)
  const home = useSelector((storeState) => storeState.stayModule.stay)
  const [isScrollOpen, setIsScrollOpen] = useState(false)

  useEffect(() => {
    loadStay()
  }, [])


  async function loadStay() {
    try {
      await setStay()
    } catch (err) {
      console.log(err)
    }
  }

  const toggleScrollOpen = ()=>{
     setIsScrollOpen(!isScrollOpen)
  }
    
  useEffect(() => {
    if (!user) navigate('/login')
  }, [])

  if (!user || !home) return <h1>Loading...</h1>
  return (
    <section className='home-page'>
      <h1>{user.fullname}</h1>
      <BackOfficeList user={user} inventaitons={home.inventaions} isScrollOpen={isScrollOpen} toggleScrollOpen={toggleScrollOpen} />
    </section>
  )
}
