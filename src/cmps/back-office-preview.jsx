export const BackOfficePreview = ({ inventaiton, user }) => {
  return (
    <section className='back-office-preview'>
      <div className='name-prev'>{user.fullname}</div>
      <div
        className={`status-prev ${
          inventaiton.status === 'pending'
            ? 'pending'
            : inventaiton.status === 'aproved'
            ? 'aproved'
            : 'rejected'
        } `}
      >
        {inventaiton.status}
      </div>
      <div className='checkin-prev'>{inventaiton.startDate}</div>
      <div className='checkout-prev'>{inventaiton.endDate}</div>
      <div className='gusest-prev'>{inventaiton.guests}</div>
    </section>
  )
}
