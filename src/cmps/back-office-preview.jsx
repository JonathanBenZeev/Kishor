import { useEffect, useState } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'
import { IoChevronUpOutline } from 'react-icons/io5'

export const BackOfficePreview = ({ inventaiton, user, setEvaluiation }) => {
  const [isOpen, setIsOpen] = useState(true)
  const evaluations = [
    { id: 1, title: 'pending', back: { backgroundColor: 'orange' } },
    { id: 2, title: 'aproved', back: { backgroundColor: 'rgb(28, 189, 50)' } },
    { id: 3, title: 'rejected', back: { backgroundColor: 'rgb(255, 60, 0)' } },
  ]
  useEffect(() => {
    window.addEventListener('click', (ev) => {
      setIsOpen(false)
    })
  }, [])
  return (
    <section className='back-office-preview'>
      <div className='name-prev'>{inventaiton.byUser.fullname}</div>
      <div
        className={`status-prev ${
          inventaiton.status === 'pending'
            ? 'pending'
            : inventaiton.status === 'aproved'
            ? 'aproved'
            : 'rejected'
        } ${user.isAdmin ? 'admin' : ''}`}
      >
        <h4>{inventaiton.status}</h4>
        {user.isAdmin && (
          <span
            onClick={(ev) => {
              ev.stopPropagation()
              setIsOpen(!isOpen)
            }}
          >
            {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </span>
        )}
        {user.isAdmin && isOpen && (
          <div className='scroll-opt'>
            {evaluations.map((evaluation) => {
              return (
                <div
                  className='evaluation'
                  style={evaluation.back}
                  key={evaluation.id}
                  onClick={(ev) =>
                    setEvaluiation(ev, evaluation.title, inventaiton)
                  }
                >
                  <h4>{evaluation.title}</h4>
                </div>
              )
            })}
          </div>
        )}
      </div>
      <div className='checkin-prev'>{inventaiton.startDate}</div>
      <div className='checkout-prev'>{inventaiton.endDate}</div>
      <div className='gusest-prev'>{inventaiton.guests}</div>
    </section>
  )
}
