// import { DatePicker } from './date-picker'
import { useState } from 'react'
import { OrderForm } from './order-form'
// import { ImagGallery } from './imag-gallery'
// import { CustomDatePicker } from './custom-date-picker'

export const StayApp = () => {
  const [isDatepickerOpen, setIsDatepickerOpen] = useState(false)

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
  const home = {
    id: '121',
    name: 'Kishor',
    imgs: [
      {
        id: 1,
        img_url:
          'https://res.cloudinary.com/dmldeettg/image/upload/v1674118717/WhatsApp_Image_2022-12-01_at_10.03.52_PM_1_plqzyq.jpg',
      },
      {
        id: 2,
        img_url:
          'https://res.cloudinary.com/dmldeettg/image/upload/v1674118717/WhatsApp_Image_2022-12-01_at_10.03.52_PM_d5sntg.jpg',
      },
      {
        id: 3,
        img_url:
          'https://res.cloudinary.com/dmldeettg/image/upload/v1674118716/WhatsApp_Image_2022-12-01_at_10.03.53_PM_xu4wij.jpg',
      },
      {
        id: 4,
        img_url:
          'https://res.cloudinary.com/dmldeettg/image/upload/v1674118716/WhatsApp_Image_2022-12-01_at_10.03.53_PM_1_f9nun9.jpg',
      },
      {
        id: 5,
        img_url:
          'https://res.cloudinary.com/dmldeettg/image/upload/v1674118717/WhatsApp_Image_2022-12-01_at_10.05.01_PM_mkw0ev.jpg',
      },
    ],
  }

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
          isDatepickerOpen={isDatepickerOpen}
          onTogglePicker={onTogglePicker}
          onOpenPicker={onOpenPicker}
          onClosePicker={onClosePicker}
        />
      </section>

      {/* <CustomDatePicker /> */}
    </section>
  )
}
