import { BackOfficePreview } from './back-office-preview'

export const BackOfficeList = ({ user, inventaitons, setEvaluiation }) => {
  const getInvetaions = () => {
    // return user?.isAdmin ? inventaitons : user?.inventaions
    if (user?.isAdmin) return inventaitons
    else {
      return inventaitons.filter((order) => order.byUser.id === user._id)
    }
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
          key={inventaiton._id}
          user={user}
          inventaiton={inventaiton}
          setEvaluiation={setEvaluiation}
        />
      ))}
    </section>
  )
}
