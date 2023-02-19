import { useEffect, useRef, useState } from 'react'
import { IoChevronDownOutline } from 'react-icons/io5'
import { IoChevronUpOutline } from 'react-icons/io5'

export const BackOfficePreview = ({ inventaiton, user, setEvaluiation }) => {
  const [isOpen, setIsOpen] = useState(false)
  const elModal= useRef()
  const evaluations = [
    { id: 1, title: 'pending', back: { backgroundColor: '#fbaf3c' } },
    { id: 2, title: 'aproved', back: { backgroundColor: '#8fd26f' } },
    { id: 3, title: 'rejected', back: { backgroundColor: '#ff6664' } },
  ]
  useEffect(() => {
    window.addEventListener('click', (ev) => {
      setIsOpen(false)
    })
  }, [])
  useEffect(() => {
    handleScrollModal()
  }, [isOpen])

  function handleScrollModal(){
    elModal.current?.focus();
    if (elModal.current)  elModal.current.scrollIntoView()
  }

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
              handleScrollModal()
              ev.stopPropagation()
              setIsOpen(!isOpen)
            }}
          >
            {isOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </span>
        )}
        {user.isAdmin && isOpen && (
          <div onClick={handleScrollModal} ref={elModal} className='scroll-opt' >
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
