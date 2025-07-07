import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home/Home'
import Register from '../Pages/Home/Register'

const Paths = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/khetilogo' element={<Home/>}></Route>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default Paths
