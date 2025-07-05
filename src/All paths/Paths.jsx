import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Home from '../Pages/Home/Home'

const Paths = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/khetilogo' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default Paths
