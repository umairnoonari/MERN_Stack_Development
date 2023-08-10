import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
function Auth()
{
    const token=localStorage.getItem("token")
    return token&&token.length!=0
}
const CheckToken = () => {
  const isAuth=Auth()
  return (
    <>
    {
        isAuth?<Outlet/>:<Navigate to='/signin'></Navigate>
    }
    </>
  )
}

export default CheckToken
