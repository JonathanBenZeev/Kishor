// import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { StayApp } from './cmps/stay-app.jsx'
import { HomePage } from './pages/home-page'
import { LoginSignup } from './pages/login-sginup'

export function RootCmp() {
  return (
    <div>
      <AppHeader />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} exact={true} />
          <Route path='/stay' element={<StayApp />} exact={true} />
          <Route element={<LoginSignup />} path='/signup' exact={true} />
          <Route element={<LoginSignup />} path='/login' exact={true} />
        </Routes>
      </main>
    </div>
  )
}
