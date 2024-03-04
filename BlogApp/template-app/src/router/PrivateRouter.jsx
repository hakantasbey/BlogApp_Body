import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRouter = () => {
    const {user} = useSelector((state)=>state.auth)
    return user ? <Outlet /> : <Navigate to="/" />
}

export default PrivateRouter