import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { utilService } from '../services/util.service'
import Logo from '../assets/img/Logo1.png'

export const AppHeader = () => {
  const loggedinUser = useSelector((storeState) => storeState.userModule.user)
  // const [loggedinUser,setLoggedinUser] =useState(userService.getLoggedinUser())

  return (
    <header className='app-header'>
      <div className='logo'>
        <img src={Logo} alt='' />
      </div>
      <nav>
        <NavLink className='home' to={'/'}>
          Home
        </NavLink>
        <NavLink className='home' to={'/stay'}>
          Stay
        </NavLink>
        <NavLink className='home' to={'/orders'}>
          Orders
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
