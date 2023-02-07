export const BackOfficePreview = ({ inventaiton, user }) => {
  return (
    <section className='back-office-preview'>
      <div className='name-prev'>{user.fullname}</div>
      <div className='status-prev'>{inventaiton.status}</div>
      <div className='checkin-prev'>{inventaiton.startDate}</div>
      <div className='checkout-prev'>{inventaiton.endDate}</div>
    </section>
  )
}
