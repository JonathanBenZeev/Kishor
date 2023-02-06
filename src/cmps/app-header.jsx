import {  NavLink } from 'react-router-dom'

export const AppHeader = () => {
  return (
    <header className='app-header'>
      <nav>
        <NavLink to={'/home'}>Home</NavLink>
        <NavLink to={'/stay'}>Stay</NavLink>
      </nav>
    </header>
  )
}
