import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { utilService } from '../services/util.service'

export const AppHeader = () => {
  const loggedinUser = useSelector((storeState) => storeState.userModule.user)

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
        {loggedinUser && (
          <div className='username'>
            <span>{utilService.cutName(loggedinUser.fullname)}</span>
          </div>
        )}
      </nav>
    </header>
  )
}
