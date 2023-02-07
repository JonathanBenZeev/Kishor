import { BackOfficePreview } from './back-office-preview'

export const BackOfficeList = ({ user, inventaitons }) => {
  return (
    <section className='back-office-list'>
      <div className='back-office'>
        <div className='invent-name'>
          <h4>Name</h4>
        </div>
        <div className='invent-status'>
          <h4>Status</h4>
        </div>
        <div className='invent-start'>
          <h4>Check-in</h4>
        </div>
        <div className='invent-end'>
          <h4>Checkout</h4>
        </div>
      </div>
      {inventaitons.map((inventaiton) => (
        <BackOfficePreview
          key={inventaiton.id}
          user={user}
          inventaiton={inventaiton}
        />
      ))}
    </section>
  )
}
