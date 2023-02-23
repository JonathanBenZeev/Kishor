export const ReservationModal = ({
  guestCount,
  endDate,
  startDate,
  setOrder,
  closeModal,
}) => {
  const getMonth = () => {
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
    const date = new Date(startDate?.year, startDate?.month)
    return months[date.getMonth()].substring(0, 3)
  }

  return (
    <section className='modal-wareper'>
      <div className='reserve-modal'>
        <h4>Your trip</h4>
        <div className='dates'>
          <h5>Dates:</h5>
          <p>
            {getMonth()} {startDate.day} - {endDate.day}
          </p>
        </div>
        <div className='guest'>
          <h5>Guests:</h5>
          <p>{guestCount} guests</p>
        </div>
        <div className='button-conainer'>
          <button onClick={closeModal}>Cancel</button>
          <button onClick={setOrder}>Book</button>
        </div>
      </div>
    </section>
  )
}
