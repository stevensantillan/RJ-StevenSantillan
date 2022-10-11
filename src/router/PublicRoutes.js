import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../components/login/Login'
import SignIn from '../components/login/SignIn'

const PublicRoutes = () => {
  return (
    <Routes>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Navigate to="/signIn"/>}/>
    </Routes>
  )
}

export default PublicRoutes