import { IoChevronDownOutline } from 'react-icons/io5'
import { IoChevronUpOutline } from 'react-icons/io5'

export const BackOfficePreview = ({ inventaiton, user, isScrollOpen ,toggleScrollOpen}) => {
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
        } ${user.isAdmin?'admin':''}`}
      >
        <h4>{inventaiton.status}</h4>
        {user.isAdmin && (
          <span onClick={toggleScrollOpen}>
            {isScrollOpen ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
          </span>
        )}
        {
          user.isAdmin && isScrollOpen && <div className='scroll-opt'> </div>
        }
      </div>
      <div className='checkin-prev'>{inventaiton.startDate}</div>
      <div className='checkout-prev'>{inventaiton.endDate}</div>
      <div className='gusest-prev'>{inventaiton.guests}</div>
    </section>
  )
}
