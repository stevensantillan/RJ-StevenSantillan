import React from 'react'
import { BrowserRouter } from "react-router-dom"
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import { UserAuth } from '../components/context/AuthContext'


const AppRouter = () => {

  const { user } = UserAuth()

  return (
    <BrowserRouter>
            {
            user
                ? <PrivateRoutes/>
                : <PublicRoutes/>
            }
    </BrowserRouter>
  )
}

export default AppRouter