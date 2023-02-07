import React, { useState } from 'react'
// import { BsPlusCircle } from 'react-icons/bs'
import { HiOutlineMinusCircle, HiOutlinePlusCircle } from 'react-icons/hi'

import { CustomDatePicker } from './custom-date-picker'

export const OrderForm = ({
  isDatepickerOpen,
  onTogglePicker,
  onOpenPicker,
  onClosePicker,
}) => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [guestCount, setGuestCount] = useState(1)

  const setDates = (start, end) => {
    setStartDate(start)
    setEndDate(end)
  }

  const onSetGuestNum = (diff) => {
    if (diff === -1 && guestCount <= 1) return
    setGuestCount((prevCount) => prevCount + diff)
  }

  const getDate = (diff) => {
    if (diff === 'start')
      return `${startDate.day}/${startDate.month + 1}/${startDate.year}`
    else return `${endDate.day}/${endDate.month + 1}/${endDate.year}`
  }

  return (
    <section className='order-form'>
      <form>
        <div className='date-piker'>
          <div
            onClick={(ev) => onTogglePicker(ev)}
            className='picker-box checkin'
          >
            <span>CHECK-IN</span>
            <span> {startDate ? getDate('start') : 'Add date'} </span>
          </div>
          <div
            onClick={(ev) => onTogglePicker(ev)}
            className='picker-box checkout'
          >
            <span>CHECKOUT</span>
            <span> {endDate ? getDate() : 'Add date'} </span>
          </div>
          <div className='picker-box guests'>
            <span>GUESTS</span>
            <span>{guestCount} guest</span>
          </div>
          <div className='guest-count'>
            <span
              className={`minus ${guestCount <= 1 ? 'prevent' : ''}`}
              onClick={() => {
                onSetGuestNum(-1)
              }}
            >
              <HiOutlineMinusCircle />
            </span>
            <span
              className='plus'
              onClick={() => {
                onSetGuestNum(1)
              }}
            >
              <HiOutlinePlusCircle />
            </span>
          </div>
          <div className='picker' onClick={(ev) => onOpenPicker(ev)}>
            {isDatepickerOpen && (
              <CustomDatePicker
                setDates={setDates}
                onClosePicker={onClosePicker}
                start={startDate}
                end={endDate}
              />
            )}
          </div>
        </div>
        <button>Reserve</button>
      </form>
    </section>
  )
}
