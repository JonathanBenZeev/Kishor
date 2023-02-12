import { BackOfficePreview } from './back-office-preview'

export const BackOfficeList = ({ user, inventaitons, isScrollOpen ,toggleScrollOpen}) => {
  const getInvetaions = () => {
    return user.isAdmin ? inventaitons : user?.inventaitons
  }

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
        <div className='invent-guests'>
          <h4>Guests</h4>
        </div>
      </div>
      {getInvetaions().map((inventaiton) => (
        <BackOfficePreview
          isScrollOpen={isScrollOpen}
          key={inventaiton.id}
          user={user}
          inventaiton={inventaiton}
          toggleScrollOpen={toggleScrollOpen}
        />
      ))}
    </section>
  )
}
