// import './App.css'
import { Route, Routes } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { StayApp } from './cmps/stay-app.jsx'
import { HomePage } from './pages/home-page'

export function RootCmp() {
  return (
    <div>
      <AppHeader />
      <main>
        <Routes>
          <Route path='/home' element={<HomePage />} exact={true} />
          <Route path='/stay' element={<StayApp />} exact={true} />
        </Routes>
      </main>
    </div>
  )
}
