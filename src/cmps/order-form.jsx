

import React, { useState } from 'react'



export const OrderForm = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [focusedInput, setFocusedInput] = useState(null)

  const isBlocked = (day) => {
    const busyDays = ['2023-02-02', '2023-02-03', '2023-02-04', '2023-02-08']
    const formattedDate = day.format('YYYY-MM-DD')
    return busyDays.some((day) => day === formattedDate)
  }

  const setDates = (ev) => {
    ev.preventDefault()
    console.log(startDate, endDate)
  }

  return (
    <section className='order-form'>

      <form onSubmit={setDates}>

        <button>Reserve</button>
      </form>
    </section>
  )
}
