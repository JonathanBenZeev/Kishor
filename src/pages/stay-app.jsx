import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { OrderForm } from '../cmps/order-form'
// import { stayService } from '../services/stay.service.local'
import { setStay, updateStay } from '../store/stay.actions'
import { loadUser, updateUser } from '../store/user.actions'
import { ImagGallery } from '../cmps/imag-gallery'
import { userService } from '../services/user.service'
import { useNavigate } from 'react-router-dom'
import { PlaceDetails } from '../cmps/place-details'
import { UserMsg } from '../cmps/user-msg'
import { addOrder, loadOrders } from '../store/order.actions'
import emailjs from '@emailjs/browser'
import { utilService } from '../services/util.service'
import { Loader } from '../cmps/loader'

export const StayApp = () => {
  const navigate = useNavigate()
  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false)
  const home = useSelector((storeState) => storeState.stayModule.stay)
  const user = useSelector((storeState) => storeState.userModule.user)
  const orders = useSelector((storeState) => storeState.orderModule.orders)
  const [isUserMsgOpen, setIsUserMsgOpen] = useState({
    isOpen: false,
    txt: '',
    status: '',
  })
  useEffect(() => {
    const loggedinUser = userService?.getLoggedinUser()
    if (!loggedinUser) navigate('/login')
    else loadStay()
  }, [user])

  useEffect(() => {
    loadUser(userService.getLoggedinUser()?._id)
    loadOrders()
  }, [])

  const loadStay = () => {
    setStay()
  }

  const onUpdateStay = async (inventaiton) => {
    try {
      await addOrder(inventaiton)
      // await emailjs.send(
      //   'service_fhsoi34',
      //   'template_o20ywjc',
      //   utilService.getOrderTemplate(),
      //   '2Ho_NuLz-ByuFz7Jw'
      // )
      setUserMsg('Order sent successfully', 'success')
    } catch (err) {
      console.log('Can not update stay', err)
    }
  }

  const setUserMsg = (txt, status) => {
    setIsUserMsgOpen({ isOpen: true, txt, status })
    setTimeout(() => {
      closeUserMsg()
    }, 5000)
  }

  const getBusyDates = () => {
    const busyDays = []
    const busy = orders.filter((inventaion) => inventaion.status === 'aproved')
    busy.forEach((day) => {
      let start = +day.startDate.split('/')[0]
      let end = +day.endDate.split('/')[0]
      let daysLength = end - start
      for (let i = 0; i <= daysLength; i++) {
        busyDays.push({
          date: start,
          monthDate: +day.startDate.split('/')[1] - 1,
          yearDate: +day.startDate.split('/')[2],
        })
        start++
      }
    })

    return busyDays
  }

  const closeUserMsg = () => {
    setIsUserMsgOpen({ isOpen: false, txt: '', status: '' })
  }

  const onTogglePicker = (ev) => {
    ev.stopPropagation()
    setIsDatepickerOpen(!isDatepickerOpen)
  }
  const onOpenPicker = (ev) => {
    ev.stopPropagation()
    setIsDatepickerOpen(true)
  }
  const onClosePicker = (ev) => {
    if (ev) ev.stopPropagation()
    setIsDatepickerOpen(false)
  }

  // console.log(user)

  if (!home || !user) return <Loader />
  return (
    <section className='stay-app' onClick={(ev) => onClosePicker(ev)}>
      <div className='date'></div>
      <h3>{home.name}</h3>

      <div className='img-list'>
        {home.imgs.map((img, idx) => (
          <div className={`img-preview img${idx}`} key={img.id}>
            <img className={` img${idx}`} src={img.img_url} alt='Loading' />
          </div>
        ))}
      </div>
      <ImagGallery imgs={home.imgs} />
      <section className='details-container'>
        <PlaceDetails />

        <OrderForm
          inventaions={getBusyDates()}
          isDatepickerOpen={isDatepickerOpen}
          onTogglePicker={onTogglePicker}
          onOpenPicker={onOpenPicker}
          onClosePicker={onClosePicker}
          onUpdateStay={onUpdateStay}
          homeId={home._id}
        />
      </section>
      {isUserMsgOpen.isOpen && (
        <UserMsg
          txt={isUserMsgOpen.txt}
          status={isUserMsgOpen.status}
          closeUserMsg={closeUserMsg}
        />
      )}
    </section>
  )
}
