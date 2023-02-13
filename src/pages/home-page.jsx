import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BackOfficeList } from '../cmps/back-office-list'
import { userService } from '../services/user.service'
import { setStay, updateStay } from '../store/stay.actions'
import { updateUser } from '../store/user.actions'

export const HomePage = () => {
  const navigate = useNavigate()
  const user = useSelector((storeState) => storeState.userModule.user)
  const home = useSelector((storeState) => storeState.stayModule.stay)

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

  async function setEvaluiation(ev, evaluiation, inventaiton) {
    try {
      const currInventaionIdx = home.inventaions.findIndex(
        (invent) => inventaiton.id === invent.id
      )
      home.inventaions[currInventaionIdx].status = evaluiation
      const currUser = await userService.get(inventaiton.byUser.id)
      const updatedInventaions = currUser.inventaions.map((invent) => {
        if (invent.id === inventaiton.id) return inventaiton
        else return invent
      })
      currUser.inventaions = updatedInventaions
      await updateStay(home)
      await updateUser(currUser)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (!user) navigate('/login')
  }, [])

  if (!user || !home) return <h1>Loading...</h1>
  return (
    <section className='home-page'>
      <h1>{user.fullname}</h1>
      <BackOfficeList
        user={user}
        inventaitons={home.inventaions}
        setEvaluiation={setEvaluiation}
      />
    </section>
  )
}
