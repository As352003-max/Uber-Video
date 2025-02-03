import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Captainsignup from './pages/Captainsignup'
import Captainlogin from './pages/Captainlogin'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import Home from './pages/Home'
import UserContext, { UserDataContext } from './context/UserContext'

const App = () => {

  const ans= UserContext(UserDataContext)
  console.log(ans)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<Captainlogin/>}/>
        <Route path='/captain-signup' element={<Captainsignup/>}/>

      </Routes>
    </div>
  )
}

export default App
