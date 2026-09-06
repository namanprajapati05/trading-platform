import React, { useState } from 'react'
import Nav from './Nav'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Holding from './Holding'
import Position from './Position'
import Order from './Order'
import Fund from './Fund'


const MainDashboard = () => {
  
   
  return (
    <div>
         <Nav/>
         <Routes>  
          <Route path='/' element={<Dashboard/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/holdings'  element={<Holding/>} />
          <Route path="/positions" element={<Position/>} />
          <Route path='/orders' element={<Order/>}/>
          <Route path='/funds' element={<Fund/>} />

        </Routes> 
    </div>
  )
}

export default MainDashboard
