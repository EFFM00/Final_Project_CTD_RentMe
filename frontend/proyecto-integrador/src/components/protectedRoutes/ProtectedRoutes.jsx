import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function ProtectedRoutes({ isLogged }) {
  if (isLogged) {
    return <Outlet/>
  } else {
    return <Navigate to="/sign-up"/>
  }
}

export default ProtectedRoutes