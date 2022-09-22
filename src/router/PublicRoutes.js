import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from '../components/login/Login'

const PublicRoutes = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Navigate to="/login"/>}/>
    </Routes>
  )
}

export default PublicRoutes