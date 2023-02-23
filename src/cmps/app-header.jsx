import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { utilService } from '../services/util.service'
import Logo from '../assets/img/Logo1.png'
import { useState } from 'react'
import { logout } from '../store/user.actions'

export const AppHeader = () => {
  const loggedinUser = useSelector((storeState) => storeState.userModule.user)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const setLogout = () => {
    logout()
    setIsModalOpen(false)
  }

  return (
    <header className='app-header'>
      <div className='logo'>
        <img src={Logo} alt='' />
      </div>
      <nav>
        <NavLink className='home' to={'/'}>
          Home
        </NavLink>
        {/* <NavLink className='home' to={'/stay'}>
          Stay
        </NavLink> */}
        <NavLink className='home' to={'/orders'}>
          Orders
        </NavLink>
        {loggedinUser && (
          <section className='user-details'>
            <div
              className='username'
              onClick={() => {
                setIsModalOpen(!isModalOpen)
              }}
            >
              <span>{utilService.cutName(loggedinUser.fullname)}</span>
            </div>
            {isModalOpen && (
              <div className='logout-modal' onClick={setLogout}>
                Logout
              </div>
            )}
          </section>
        )}
      </nav>
    </header>
  )
}
