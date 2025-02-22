import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Captainsignup from './pages/Captainsignup'
import Captainlogin from './pages/Captainlogin'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import Start from './pages/Start'
import UserContext, { UserDataContext } from './context/UserContext'
import Home from './pages/Home'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout' 
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectWrapper'
import CaptainLogout from './pages/CaptainLogout'
import Riding from './pages/Riding'
import CaptainRiding from './pages/CaptainRiding'
import 'remixicon/fonts/remixicon.css'

const App = () => {

  const ans= UserContext(UserDataContext)
  console.log(ans)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/login' element={<UserLogin/>}/>
        <Route path='/riding' element={<Riding/>}/>
        <Route path='/captain-riding' element={<CaptainRiding/>}/>

        <Route path='/signup' element={<UserSignup/>}/>
        <Route path='/captain-login' element={<Captainlogin/>}/>
        <Route path='/captain-signup' element={<Captainsignup/>}/>
        <Route path='/home' element={
          <UserProtectedWrapper>
          <Home/>
          </UserProtectedWrapper>
          }/>

          <Route path='/users/logout' element={
          <UserProtectedWrapper>
            <UserLogout/>
          </UserProtectedWrapper>
          }/>
         
          <Route path='/captain-home' element={
            <CaptainProtectedWrapper>
              <CaptainHome/>
            </CaptainProtectedWrapper>        
            }/>

<Route path='/captains/logout' element={
          <CaptainProtectedWrapper>
            <CaptainLogout/>
          </CaptainProtectedWrapper>
          }/>
  
       </Routes>
    </div>
  )
}

export default App
