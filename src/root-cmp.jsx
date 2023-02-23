// import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { StayApp } from './pages/stay-app.jsx'
import { HomePage } from './pages/home-page'
import { LoginSignup } from './pages/login-sginup'
import { Dashboard } from './pages/dashboard'

export function RootCmp() {
  return (
    <div>
      <AppHeader />
      <main>
        <Routes>
          {/* <Route path='/' element={<HomePage />} exact={true} /> */}
          <Route path='/' element={<StayApp />} exact={true} />
          <Route path='/orders' element={<Dashboard />} exact={true} />
          <Route element={<LoginSignup />} path='/signup' exact={true} />
          <Route element={<LoginSignup />} path='/login' exact={true} />
        </Routes>
      </main>
    </div>
  )
}
