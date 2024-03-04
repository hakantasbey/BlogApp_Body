import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login'
import BlogPages from '../pages/BlogPages';

const AppRouter = () => {
  return (
    <Router>
        <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<Login/>}/>
        <Route path='/blogs' element={<PrivateRouter/>}>
        <Route path='/blogs' element={<BlogPages/>}/>
        </Route>
        </Routes>
    </Router>
  )
}

export default AppRouter