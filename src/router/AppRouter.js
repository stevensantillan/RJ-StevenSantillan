import React from 'react'
import { BrowserRouter } from "react-router-dom"
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'
import { UseLoginContext } from '../components/context/LoginContext'


const AppRouter = () => {

  const {users} = UseLoginContext()  

  return (
    <BrowserRouter>
            {
            users.logged
                ? <PrivateRoutes/>
                : <PublicRoutes/>
            }
        </BrowserRouter>
  )
}

export default AppRouter