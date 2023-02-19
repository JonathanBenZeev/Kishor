import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { OrderForm } from '../cmps/order-form'
// import { stayService } from '../services/stay.service.local'
import { setStay, updateStay } from '../store/stay.actions'
import { updateUser } from '../store/user.actions'
// import { ImagGallery } from '../cmps/imag-gallery'
import { userService } from '../services/user.service'
import { useNavigate } from 'react-router-dom'

export const StayApp = () => {
  const navigate = useNavigate()
  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false)
  const home = useSelector((storeState) => storeState.stayModule.stay)
  const user = useSelector((storeState) => storeState.userModule.user)
  
  useEffect(() => {
    const loggedinUser = userService.getLoggedinUser()
    if (!loggedinUser) navigate('/login')
    else loadStay()
  }, [user])

  const loadStay = () => {
    setStay()
  }

  const onUpdateStay = async (inventaiton) => {
    try {
      home.inventaions.unshift(inventaiton)
      user.inventaions.unshift(inventaiton)
      await updateStay(home)
      await updateUser(user)
    } catch (err) {
      console.log('Can not update stay', err)
    }
  }

  const getBusyDates = () => {
    const busyDays = []
    const busy = home.inventaions.filter(
      (inventaion) => inventaion.status === 'aproved'
    )
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

  if (!home ) return <h1>Loading..</h1>
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
      {/* <ImagGallery imgs={home.imgs} /> */}
      <section className='details-container'>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          veritatis aliquid officia necessitatibus vitae pariatur quis placeat.
          Aut accusamus, nobis modi ea eligendi perspiciatis quae laboriosam
          ullam adipisci omnis! Nesciunt.
        </div>
        <OrderForm
          inventaions={getBusyDates()}
          isDatepickerOpen={isDatepickerOpen}
          onTogglePicker={onTogglePicker}
          onOpenPicker={onOpenPicker}
          onClosePicker={onClosePicker}
          onUpdateStay={onUpdateStay}
        />
      </section>
    </section>
  )
}
