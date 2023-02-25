import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BackOfficeList } from '../cmps/back-office-list'
import { FilterBy } from '../cmps/filter-by'
import { Loader } from '../cmps/loader'
import { userService } from '../services/user.service'
import { utilService } from '../services/util.service'
import { loadOrders, setOrders } from '../store/order.actions'
import { setStay, updateStay } from '../store/stay.actions'
// import emailjs from '@emailjs/browser'

export const Dashboard = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const home = useSelector((storeState) => storeState.stayModule.stay)
  const orders = useSelector((storeState) => storeState.orderModule.orders)
  const [filterBy, setFilterBy] = useState({
    txt: '',
  })
  useEffect(() => {
    loadStay()
    if (!orders.length) loadOrders()
  }, [])

  useEffect(() => {
    loadUser()
  }, [])

  async function loadStay() {
    try {
      await setStay()
    } catch (err) {
      console.log(err)
    }
  }

  const loadUser = async () => {
    try {
      const updateUser = await userService.get(
        userService.getLoggedinUser()?._id
      )
      if (!updateUser) navigate('/login')
      setUser(updateUser)
    } catch (err) {
      console.log(err)
    }
  }

  const inventaionsToShow = () => {
    const ordersToShow = orders
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      return ordersToShow?.filter(
        (invent) =>
          regex.test(invent.byUser.fullname) || regex.test(invent.status)
      )
    }
    return ordersToShow
  }

  const onFilterBy = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    setFilterBy((prevFields) => ({ ...prevFields, [field]: value }))
  }

  async function setEvaluiation(ev, evaluiation, inventaiton) {
    try {
      let ordersToUpdate = [...orders]
      const currInventaionIdx = ordersToUpdate.findIndex(
        (invent) => inventaiton._id === invent._id
      )
      ordersToUpdate[currInventaionIdx].status = evaluiation
      let updatedOrders = utilService.statusValidiation(
        ordersToUpdate,
        inventaiton
      )
      ordersToUpdate = updatedOrders

      setOrders(ordersToUpdate)

      // if (evaluiation === 'aproved') {
      //   await emailjs.send(
      //     'service_fhsoi34',
      //     'template_z5xanmq',
      //     utilService.getConfirmationTemplate(inventaiton),
      //     '2Ho_NuLz-ByuFz7Jw'
      //   )
      // }
    } catch (err) {
      console.log(err)
    }
  }
  // async function setEvaluiation(ev, evaluiation, inventaiton) {
  //   try {
  //     // change the evaluiation in the home-inventaitions:
  //     const currInventaionIdx = home.inventaions.findIndex(
  //       (invent) => inventaiton.id === invent.id
  //     )
  //     home.inventaions[currInventaionIdx].status = evaluiation
  //     let updatedOrders = utilService.statusValidiation(
  //       home.inventaions,
  //       inventaiton
  //     )
  //     home.inventaions = updatedOrders

  //     //change the evaluiation in all users-inventaitions:
  //     // let users = await userService.getUsers()
  //     // console.log(users)
  //     // users = users.map((user) => {

  //     // })

  //     // console.log(users)
  //     const currUser = await userService.get(inventaiton.byUser.id)

  //     updatedOrders = updatedOrders.filter(
  //       (invent) => invent.byUser.id === currUser._id
  //     )
  //     currUser.inventaions = updatedOrders
  //     // setUser(currUser)
  //     await updateStay(home, inventaiton)
  //     await userService.updateUser(currUser, inventaiton)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  if (!user || !home || !orders?.length) return <Loader />
  return (
    <section className='home-page'>
      <h1>{user.fullname}</h1>
      <FilterBy filterBy={filterBy} onFilterBy={onFilterBy} />
      <BackOfficeList
        user={user}
        inventaitons={inventaionsToShow()}
        setEvaluiation={setEvaluiation}
      />
    </section>
  )
}
