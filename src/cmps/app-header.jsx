import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { userService } from '../services/user.service'
import { utilService } from '../services/util.service'

export const AppHeader = () => {
  const [user, setUser] = useState(userService.getLoggedinUser())


  return (
    <header className='app-header'>
      <div className='logo'>Home</div>
      <nav>
        <NavLink className='home' to={'/'}>
          Home
        </NavLink>
        <NavLink className='home' to={'/stay'}>
          Stay
        </NavLink>
        {user && (
          <div className='username'>
            <span>{utilService.cutName(user.fullname)}</span>
          </div>
        )}
      </nav>
    </header>
  )
}
