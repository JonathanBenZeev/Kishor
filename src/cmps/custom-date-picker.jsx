import { useEffect } from 'react'
import { useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'

export const CustomDatePicker = ({ onClosePicker, start, end, setDates }) => {
  const [currYear, setCurrYear] = useState(new Date().getFullYear())
  const [currMonth, setCurrMonth] = useState(new Date().getMonth())
  const [startDate, setStartDate] = useState(start)
  const [endDate, setEndDate] = useState(end)

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  useEffect(() => {
    checkYear()
  }, [currMonth])

  useEffect(() => {
    setDates(startDate, endDate)
  }, [startDate, endDate])

  const checkYear = () => {
    if (currMonth < 0 || currMonth > 11) {
      var date = new Date(currYear, currMonth)
      setCurrYear(date.getFullYear())
      setCurrMonth(date.getMonth())
    }
  }
  const getLastDateOfMonth = () => {
    return new Date(currYear, currMonth + 1, 0).getDate()
  }
  const getLastDayOfMonth = () => {
    return new Date(currYear, currMonth, getLastDateOfMonth()).getDay()
  }
  const getFirstDayOfMonth = () => {
    return new Date(currYear, currMonth, 1).getDay()
  }
  const getLastDateOfLastMonth = () => {
    return new Date(currYear, currMonth, 0).getDate()
  }
  const getLoopDateNums = (status) => {
    let nums = []
    if (status === 'currDate') {
      for (let i = 1; i <= getLastDateOfMonth(); i++) {
        nums.push(i)
      }
    }
    if (status === 'lastDate') {
      for (let i = getFirstDayOfMonth(); i > 0; i--) {
        nums.push(i)
      }
    }

    if (!status) {
      for (let i = getLastDayOfMonth(); i < 6; i++) {
        nums.push(i)
      }
    }
    return nums
  }

  const moveMonth = (ev, icon) => {
    ev.stopPropagation()
    setCurrMonth((prevMonth) => {
      return icon === 'prev' ? prevMonth - 1 : prevMonth + 1
    })
  }
  const chooseDays = (ev, day, month, year) => {
    ev.stopPropagation()
    if (
      (day < new Date().getDate() &&
        year === new Date().getFullYear() &&
        month === new Date().getMonth()) ||
      month < new Date().getMonth() ||
      year < new Date().getFullYear()
    )
      return

    if (startDate && endDate) {
      setStartDate({ day, month, year })
      setEndDate(null)
      return
    }
    if (
      startDate &&
      day > startDate.day &&
      month >= startDate.month &&
      year >= startDate.year
    ) {
      setEndDate({ day, month, year })
      return
    } else setStartDate({ day, month, year })
  }

  const getDateRange = (day, month, year) => {
    if (
      day > startDate?.day &&
      day < endDate?.day &&
      month >= startDate?.month &&
      month <= endDate?.month &&
      year >= startDate?.year &&
      year <= endDate?.year
    ) {
      if (startDate.day + 1 === endDate.day - 1) return 'range one'
      if (day === startDate.day + 1) return 'range first'
      else if (day === endDate.day - 1) return 'range last'

      return 'range'
    }
  }

  return (
    <section className='custom-date-picker'>
      <header>
        <p className='current-date'>
          {months[currMonth]} {currYear}
        </p>
        <div className='icons'>
          <span
            onClick={(ev) => moveMonth(ev, 'prev')}
            className='symbols-rounded'
          >
            <FiChevronLeft />
          </span>
          <span
            onClick={(ev) => moveMonth(ev, 'next')}
            className='symbols-rounded'
          >
            <FiChevronRight />
          </span>
        </div>
      </header>
      <div className='calender'>
        <ul className='weeks'>
          <li>Sun</li>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
        </ul>
        <ul className='days'>
          {getLoopDateNums('lastDate').map((dateNum, index) => {
            return (
              <li key={index} className='inactive'>
                {getLastDateOfLastMonth() - dateNum + 1}
              </li>
            )
          })}
          {getLoopDateNums('currDate').map((dateNum, index) => {
            return (
              <li
                onClick={(ev) => chooseDays(ev, dateNum, currMonth, currYear)}
                className={`
                 ${
                   (dateNum === startDate?.day &&
                     currMonth === startDate?.month &&
                     currYear === startDate?.year) ||
                   (dateNum === endDate?.day &&
                     currMonth === endDate?.month &&
                     currYear === endDate?.year)
                     ? 'active'
                     : ''
                 }
                 ${getDateRange(dateNum, currMonth, currYear)}
                 ${
                   currMonth < new Date().getMonth() ||
                   currYear < new Date().getFullYear() ||
                   (dateNum < new Date().getDate() &&
                     currYear === new Date().getFullYear() &&
                     currMonth === new Date().getMonth())
                     ? 'inactive'
                     : ''
                 }
                   `}
                key={index}
              >
                {dateNum}
              </li>
            )
          })}
          {getLoopDateNums().map((dateNum, index) => {
            return (
              <li className='inactive' key={index}>
                {dateNum - getLastDayOfMonth() + 1}
              </li>
            )
          })}
        </ul>
      </div>
      <button
        className='clear-calender'
        onClick={(ev) => {
          onClosePicker(ev)
        }}
      >
        Done
      </button>
    </section>
  )
}
